import styled from "styled-components";
import { GridSliderShow, DefaulRubrikeBox } from "../main/default-rubrik-mobile";
import { ProductSliderItems } from "../main/sliders/productSliderItems";
import { RowSlider } from "../main/sliders/slider-settings";

import { UnwrappingSlider } from "../main/sliders/swiperSetup";
import { mockFavouriteAds } from "./mockFavouriteAds";

const SliderWrapper = styled.div`
  .swiper {
    padding: 30px !important;
  }
`;

export const SliderState = ({ deviceType }) => {
  return deviceType !== "mobile" ? (
    <SliderWrapper>
      <UnwrappingSlider sliderConfig={RowSlider}>
        {ProductSliderItems({ data: mockFavouriteAds })}
      </UnwrappingSlider>
    </SliderWrapper>
  ) : (
    <>
      <GridSliderShow title={"Избранное"} api={<DefaulRubrikeBox data={mockFavouriteAds} />} />
    </>
  );
};
