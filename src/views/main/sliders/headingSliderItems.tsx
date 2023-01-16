import styled from "styled-components";

import { SwiperSlide } from "swiper/react";
import { media } from "../../../global-style";
import { headingsMockData, headingsMockDataItemType } from "./headingsMockData";
import { mockSliderData } from "./mockSliderData";
import Image from "next/image";
import Link from "next/link";

export const SwiperCircle = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  transition: 500ms;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25);
  img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
  ${media.mobile} {
    width: 75px;
    height: 75px;
  }
`;
export const SwiperTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  transition: 500ms;
  border-bottom: 3px solid transparent;
  padding: 10px;
  color: #3e4149;
  cursor: pointer;
  ${media.mobile} {
    font-weight: 500;
    font-size: 10px;
    line-height: 13px;
    border-bottom: unset !important;
    white-space: nowrap;
  }
`;

const SwiperSlideContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  ${media.mobile} {
    transform: rotateY(-180deg);
  }
`;

type HeadingsSliderItemsProps = {
  data: headingsMockDataItemType[];
};

export const HeadingSliderItems = (props: HeadingsSliderItemsProps) => {
  const renderItems = props.data.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <SwiperSlideContent>
          <SwiperCircle>
            <Image alt="" src={item.img} height={150} width={150} />
          </SwiperCircle>
          <Link href="/search">
            <SwiperTitle>{item.title}</SwiperTitle>
          </Link>
        </SwiperSlideContent>
      </SwiperSlide>
    );
  });
  return <>{renderItems}</>;
};
