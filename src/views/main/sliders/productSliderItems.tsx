import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

import { HeartSvg } from "../svg";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.div<{ maxH?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 8px;
  img {
    width: 100%;
    border-radius: 4px;
    object-fit: cover;
    max-height: ${({ maxH }) => (maxH ? "140px" : "204px")};
  }
  svg * {
    cursor: pointer;
    min-height: 24px;
    transition: 300ms linear;
  }
  svg {
    min-height: 24px;
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

const SvgHeartToggleColor = (e: any) => {
  if (e.target.getAttribute("fill") == "#373538") {
    e.target.setAttribute("fill", "transparent");
    return;
  }
  e.target.setAttribute("fill", "#373538");
};

export const ProductSliderItems = (props, slice?: any, maxH?: any) => {
  const renderedSlides = props.data.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="slider-wrapper">
          <Wrapper maxH={maxH}>
            <Image src={item.img} alt={""} />
            <Link href="/card-page">
              <Title>
                {item.title.length > slice ? item.title.slice(0, slice) + "..." : item.title}
              </Title>
            </Link>
            <PostInfo>
              <City>{item.city} -</City>
              <Date>{item.date}</Date>
            </PostInfo>
            <Sum>{item.sum}</Sum>
            <HeartSvg handleClick={SvgHeartToggleColor} />
          </Wrapper>
        </div>
      </SwiperSlide>
    );
  });

  return <>{renderedSlides}</>;
};

//   {
//       "id": 10,
//       "name": "dicta",
//       "gallery": null,
//       "main_photo": "http://barter.a-lux.dev/storage/https://via.placeholder.com/640x480.png/0044ee?text=et",
//       "description": "I ought to be two people. 'But it's no use speaking to a snail. \"There's a porpoise close behind her, listening: so she helped herself to some tea and bread-and-butter, and went back for a minute or.",
//       "condition": "б/у",
//       "price": 893,
//       "preferred_city": "Lake Ravenstad",
//       "location": "Ziemetown",
//       "contact_name": "Lindsey Fritsch",
//       "phone_number": "+12836345922",
//       "email": "gillian.lebsack@aufderhar.com"
//   }
// ]
export const ProductSliderItemsTest = ({ data, maxH, slice }: any) => {
  return data.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="slider-wrapper">
          <Wrapper maxH={maxH}>
            <img src={item.main_photo.slice(32)} alt="" />
            <Link href={`/card-page/${item.id}`}>
              <Title>
                {item.description.length > slice
                  ? item.description.slice(0, slice) + "..."
                  : item.description}
              </Title>
            </Link>
            <PostInfo>
              <City>{item.location} -</City>
              <Date>&nbsp;{item.created_at.slice(0, 10)}</Date>
            </PostInfo>
            <Sum>{item.price} ₸</Sum>
            <HeartSvg handleClick={SvgHeartToggleColor} />
          </Wrapper>
        </div>
      </SwiperSlide>
    );
  });
};
