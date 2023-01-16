import styled from "styled-components";
import Image from "next/image";
import { media } from "../../global-style";

import imgThumb from "./favorite-thumb.png";

const NoFavAdsBlockS = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 67px 0px 185px;
  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin: 40px 0px 15px;
    text-align: center;
  }
  p {
    max-width: 501px;
  }
  ${media.mobile} {
    h1 {
      order: -1;
      font-size: 14px;
      margin: 0px 0px 19px;
      line-height: 18px;
    }
    p {
      max-width: unset;
      margin-top: 33px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }
    padding: 32px 8px;
  }
`;

const LocalImage = styled.div`
  width: 316px;
  height: 411px;
  ${media.mobile} {
    max-width: 226px;
    height: 100%;
  }
`;

const ImgWrapper = styled.div`
  height: 411px;
  max-width: 338.79px;
  position: relative;
  ${media.mobile} {
    height: 274px;
  }
`;

export const NoFavAdsBlock = () => {
  return (
    <NoFavAdsBlockS>
      <LocalImage>
        <ImgWrapper>
          <Image fill={true} src={imgThumb.src} alt="" />
        </ImgWrapper>
      </LocalImage>
      <h1>Нет избранных объявлений</h1>
      <p>
        Добавить в избранное можно со страницы объявления либо со страницы списка объявлений Теперь
        избранные объявления всегда доступны на любом компьютере, а также на мобильной версии сайта,
        после входа в Мои объявления
      </p>
    </NoFavAdsBlockS>
  );
};
