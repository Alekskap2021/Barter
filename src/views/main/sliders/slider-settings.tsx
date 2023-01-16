import { EffectCoverflow, Grid, Navigation } from "swiper";
import useDeviceSize from "../../../hooks/useDeviceSize";

// const  huynia = () => {
//   const [width, height] = useDeviceSize();

// let widthW: any = '8 + "%"'

// if(width >  560) {
//   widthW = 300
// }
// }

// huynia()

export const RowSlider: any = {
  slidesPerView: 4,
  modules: [Grid, Navigation],
  spaceBetween: 20,
  effect: "slide",
  grid: { rows: 2, fill: "row" },
  slideActiveClass: "swiper-unwrapped",
  navigation: {
    prevEl: "navigationPrevRef.current",
    nextEl: "navigationNextRef.current",
  },
  scrollbar: { draggable: true },
  // onSwiper: (swiper) => console.log(swiper),
};

export const ColumnSlider: any = {
  modules: [Navigation, EffectCoverflow],
  // spaceBetween: '8 + "%"',
  slidesPerView: 3,
  effect: "coverflow",
  pagination: { clickable: true },
  navigation: {
    prevEl: "navigationPrevRef.current",
    nextEl: "navigationNextRef.current",
  },
  // coverflowEffect: {
  //   rotate: 0,
  //   stretch: 150,
  //   depth: 20,
  //   modifier: 1,
  //   slideShadows: false,
  // },
  centeredSlides: true,
  centeredSlidesBounds: true,
  loop: true,
  scrollbar: { draggable: true },
  // onSwiper: (swiper) => console.log(swiper),
  // onSlideChange: () => console.log("slide change"),
};

// Old ColumnSlider
// modules={[Navigation, EffectCoverflow]}
// spaceBetween={8 + "%"}
// slidesPerView={3}
// effect="coverflow"
// pagination={{ clickable: true }}
// navigation={{
//   prevEl: navigationPrevRef.current,
//   nextEl: navigationNextRef.current,
// }}
// onBeforeInit={(swiper: any) => {
//   swiper.params.navigation.prevEl = navigationPrevRef.current;
//   swiper.params.navigation.nextEl = navigationNextRef.current;
// }}
// coverflowEffect={{
//   rotate: 0,
//   stretch: 150,
//   depth: 20,
//   modifier: 1,
//   slideShadows: false,
// }}
// centeredSlides
// centeredSlidesBounds
// loop
// scrollbar={{ draggable: true }}
// onSwiper={(swiper) => console.log(swiper)}
// onSlideChange={() => console.log("slide change")}

// Old RowSlider

// `modules={[Grid, Navigation]}
//     spaceBetween={20}
//     slidesPerView={4}
//     effect="slide"
//     grid={{ rows: 2, fill: "row" }}
//     slideActiveClass="swiper-unwrapped"
//     navigation={{
//       prevEl: navigationPrevRef.current,
//       nextEl: navigationNextRef.current,
//     }}
//     onBeforeInit={(swiper: any) => {
//       swiper.params.navigation.prevEl = navigationPrevRef.current;
//       swiper.params.navigation.nextEl = navigationNextRef.current;
//     }}
//     scrollbar={{ draggable: true }}
//     onSwiper={(swiper) => console.log(swiper)}
//     onSlideChange={() => console.log("slide change")}
//     `
