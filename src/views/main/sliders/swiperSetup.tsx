import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowLeftSvg, ArrowRightSvg } from "../svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import styled from "styled-components";
import { ColumnSlider, RowSlider } from "./slider-settings";
import useDeviceSize from "../../../hooks/useDeviceSize";

const SwiperArrow = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fdce05;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  margin: 0px 12.5px;
`;

const SwiperNavigation = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

const SwiperNavigationWrapper = ({ navigationPrevRef, navigationNextRef }) => {
  return (
    <SwiperNavigation>
      <SwiperArrow ref={navigationPrevRef}>
        <ArrowLeftSvg />
      </SwiperArrow>
      <SwiperArrow ref={navigationNextRef}>
        <ArrowRightSvg />
      </SwiperArrow>
    </SwiperNavigation>
  );
};

const MainSlider = ({ children, deviceType, sliderConfig }: any) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const [width, height] = useDeviceSize();
  const [widthW, SetWidth] = useState<any>('8 + "%"');
  const [stretchS, SetStretch] = useState<any>(150);
  useEffect(() => {
    // Нужен рефакторинг, невозможно адаптировать по формуле под спецефические расширения экранов
    if (width < 1042) {
      SetWidth(50);
    }
    if (width < 946) {
      SetWidth(-100);
    }
    if (width < 706) {
      SetWidth(170);
    }
    if (width < 620) {
      SetWidth(150);
    }
    if (width < 562) {
      SetWidth(100);
    }
    if (width < 494) {
      SetWidth(70);
    }
    if (width < 420) {
      SetWidth(40);
    }
    if (width < 385) {
      SetWidth(25);
    }
  }, [width]);
  return (
    <>
      <Swiper
        {...sliderConfig}
        watchOverflow
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        spaceBetween={widthW}
        coverflowEffect={{
          rotate: 0,
          stretch: `${stretchS}`,
          depth: 20,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {children}
        {deviceType !== "mobile" && (
          <SwiperNavigationWrapper
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
          />
        )}
      </Swiper>
    </>
  );
};

const UnwrappingSlider = ({ children, deviceType, sliderConfig = ColumnSlider }: any) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const [width, height] = useDeviceSize();
  const [widthW, SetWidth] = useState<any>('8 + "%"');
  const [stretchS, SetStretch] = useState<any>(150);
  useEffect(() => {
    // Нужен рефакторинг, невозможно адаптировать по формуле под спецефические расширения экранов
    if (width < 1042) {
      SetWidth(50);
    }
    if (width < 946) {
      SetWidth(-100);
    }
    if (width < 706) {
      SetWidth(170);
    }
    if (width < 620) {
      SetWidth(150);
    }
    if (width < 562) {
      SetWidth(100);
    }
    if (width < 494) {
      SetWidth(70);
    }
    if (width < 420) {
      SetWidth(40);
    }
    if (width < 385) {
      SetWidth(25);
    }
  }, [width]);

  return (
    <Swiper
      {...sliderConfig}
      onBeforeInit={(swiper: any) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
      spaceBetween={widthW}
      coverflowEffect={{
        rotate: 0,
        stretch: `${stretchS}`,
        depth: 20,
        modifier: 1,
        slideShadows: false,
      }}
    >
      {children}

      {deviceType !== "mobile" && (
        <SwiperNavigationWrapper
          navigationPrevRef={navigationPrevRef}
          navigationNextRef={navigationNextRef}
        />
      )}
    </Swiper>
  );
};

export { MainSlider, UnwrappingSlider };
