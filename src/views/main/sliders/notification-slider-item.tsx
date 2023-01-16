import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

import { HeartSvg } from "../svg";
import Image from "next/image";

import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 8px;
  img {
    width: 100%;
    border-radius: 4px;
    height: 204px;
    object-fit: cover;
  }
  svg * {
    cursor: pointer;
    transition: 300ms linear;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;

const PostInfo = styled.div`
  display: flex;
`;
const City = styled.div`
  font-weight: 600;
  font-size: 12px;
`;
const Date = styled.div`
  font-weight: 500;
  font-size: 12px;
`;
const Sum = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

const WrapperTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 17px;
  text-align: center;
`;

export const NotificationSliderItem = (props) => {
  const renderedSlides = props.data.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="slider-wrapper">
          <Wrapper>
            <WrapperTitle>Новинка дня</WrapperTitle>
            <Link href="/card-page">
              <Title>{item.title.length > 80 ? item.title.slice(0, 80) + "..." : item.title}</Title>
            </Link>
            <Sum>{item.sum}</Sum>
            <Image alt="" src={item.img} />
          </Wrapper>
        </div>
      </SwiperSlide>
    );
  });

  return <>{renderedSlides}</>;
};
