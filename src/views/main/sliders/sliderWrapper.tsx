// Import Swiper styles
import styled from "styled-components";
import React, { useEffect, useState } from "react";

import { media } from "../../../global-style";

// Слайдер рубрик
import { headingsMockDataItemType } from "./headingsMockData";
import { HeadingsUnwrapped } from "./headingsUnwrapped";
import { HeadingSliderItems } from "./headingSliderItems";

// Слайдер продукта
import { ProductSliderItems, ProductSliderItemsTest } from "./productSliderItems";

// Рендер айтемов внутри свайпера
import { MainSlider, UnwrappingSlider } from "./swiperSetup";
import { ColumnSlider, RowSlider } from "./slider-settings";
import { NotificationSliderItem } from "./notification-slider-item";
import { SwiperSlide } from "swiper/react";

const Wrapper = styled.div`
  padding: 40px 80px 40px;
  background: white;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: var(--default-border-radius);
  position: relative;
  margin-bottom: 40px;
  h2 {
    cursor: pointer;
    text-align: center;
  }
  @media screen and (max-width: 840px) {
    padding: 40px 0px;
  }
  ${media.mobile} {
    margin-top: 16px;

    div:first-child {
    }
    padding: 8px 0px;
    h2 {
      margin-bottom: 8px;
    }
    margin-bottom: unset;
  }
`;
const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: var(--default-yellow);
  position: absolute;
  right: 60px;
  bottom: 20px;
  border: unset;
  background: unset;
  outline: unset;
  cursor: pointer;
  ${media.mobile} {
    font-weight: 500;
    font-size: 10px;
    bottom: unset;
    line-height: 13px;
    top: 11px;
    right: 16px;
  }
`;

type SliderWrapperProps = {
  type: "headings" | "product" | "notific";
  title: string;
  deviceType?: any;
  headingSliderData?: headingsMockDataItemType[];
  isUnwrapped?: any;
  isUnwrappedAll?: any;
  handleClick?: any;
  sliderdata?: any;
};

export const SliderWrapper = (props: SliderWrapperProps) => {
  const [isUnwrapped, setIsUnwrapped] = useState(false);

  if (props.type === "headings" && props.headingSliderData) {
    return (
      <div className="allrubrik">
        <Wrapper>
          {!props.isUnwrappedAll ? (
            <>
              <h2>{props.title}</h2>
              <MainSlider deviceType={props.deviceType} sliderConfig={ColumnSlider}>
                {HeadingSliderItems({ data: props.headingSliderData })}
              </MainSlider>
            </>
          ) : (
            <HeadingsUnwrapped data={props.headingSliderData} />
          )}
          <Button onClick={props.handleClick}>{isUnwrapped ? "Скрыть" : "Смотреть все"}</Button>
        </Wrapper>
      </div>
    );
  }

  if (props.type === "product" && props.sliderdata) {
    return (
      <Wrapper>
        <>
          <h2>{props.title}</h2>

          {/* Todo можно сделать 1 компонентом менять sliderConfig, UnwrappingSlider станет ненужным  */}
          {isUnwrapped ? (
            <MainSlider sliderConfig={RowSlider}>
              {ProductSliderItems({ data: props.sliderdata }, 50, true)}
            </MainSlider>
          ) : (
            <UnwrappingSlider sliderConfig={ColumnSlider}>
              {ProductSliderItems({ data: props.sliderdata }, 90)}
            </UnwrappingSlider>
          )}
        </>
        <Button
          onClick={() => {
            setIsUnwrapped(!isUnwrapped);
          }}
        >
          {isUnwrapped ? "Скрыть" : "Смотреть все"}
        </Button>
      </Wrapper>
    );
  }
  if (props.type === "notific" && props.sliderdata) {
    return (
      <Wrapper>
        <>
          <h2>{props.title}</h2>

          {isUnwrapped ? (
            <MainSlider sliderConfig={RowSlider}>
              {NotificationSliderItem({ data: props.sliderdata })}
            </MainSlider>
          ) : (
            <UnwrappingSlider sliderConfig={ColumnSlider}>
              {NotificationSliderItem({ data: props.sliderdata })}
            </UnwrappingSlider>
          )}
        </>
        <Button
          onClick={() => {
            setIsUnwrapped(!isUnwrapped);
          }}
        >
          {isUnwrapped ? "Скрыть" : "Смотреть все"}
        </Button>
      </Wrapper>
    );
  }
  return <></>;
};

export const SliderWrapperTest = ({ title, data }) => {
  const [isUnwrapped, setIsUnwrapped] = useState(false);

  return (
    <Wrapper>
      <>
        <h2>{title}</h2>
        {isUnwrapped ? (
          <MainSlider sliderConfig={RowSlider}>
            {<>{ProductSliderItemsTest({ data: data, maxH: true, slice: 50 })}</>}
          </MainSlider>
        ) : (
          <UnwrappingSlider sliderConfig={ColumnSlider}>
            {ProductSliderItemsTest({ data: data, maxH: false, slice: 90 })}
          </UnwrappingSlider>
        )}
      </>
      <Button
        onClick={() => {
          setIsUnwrapped(!isUnwrapped);
        }}
      >
        {isUnwrapped ? "Скрыть" : "Смотреть все"}
      </Button>
    </Wrapper>
  );
};
