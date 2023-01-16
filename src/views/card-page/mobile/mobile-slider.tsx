// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import Image from "next/image";

import defaultImg from "../../main/images-default/default-1.png";
import defaultImg2 from "../../main/images-default/default-2.png";

const SwiperWrapper = styled.div`
  height: 300px;
`;

export const MobileSwiper = ({ img }: any) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <SwiperWrapper>
          <img src={img} alt="" />
        </SwiperWrapper>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperWrapper>
          <Image alt="" src={defaultImg2} />
        </SwiperWrapper>
      </SwiperSlide>
    </Swiper>
  );
};
