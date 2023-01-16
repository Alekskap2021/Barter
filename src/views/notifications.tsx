import { DefaultBanner } from "../components/default-banner";
import { Container, DefaultWrapper, FlexCenter } from "../global-style/style-variables";
import styled from "styled-components";
import { SliderWrapper } from "./main/sliders/sliderWrapper";

// img
import MainPageBanner from "../public/assets/images/banners/Main-page-banner.png";
import ExchangeIcon from "./main/images-default/exchange.png";

// api
import { SearchInputs } from "../components/search-inputs";
import { SectionsSvg } from "./main/svg";
import {
  DefaulRubrikeBox,
  DefaulRubrikeBoxNotific,
  GridRubrikMobile,
} from "./main/default-rubrik-mobile";
import { useEffect, useState } from "react";
import { RubRiksPopUp } from "./main/all-rubriks-popup";
import { headingsMockData } from "./main/sliders/headingsMockData";
import { mockSliderData } from "./main/sliders/mockSliderData";
import { UIChangeLang } from "../global-style/UI-kit";
import { MainLogo } from "../public/assets/images/logo";

const ExchangeBlock = styled.div`
  color: var(--default-black);
  background: white;
  border-radius: var(--default-border-radius);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 0px 80px;
  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
  img {
    width: 100px;
    height: 100px;
  }
`;

const ExchangeBtn = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  padding: 13px;
  background: var(--default-yellow);
  border-radius: var(--default-border-radius);
`;

const InfoBlock = styled.div`
  text-align: center;
  border-radius: var(--default-border-radius);
  background: white;
  padding: 36px;
  margin: 70px 0px;
  h1 {
    font-weight: 900;
    font-size: 80px;
    line-height: 101px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-top: 22px;
  }
`;

const SectionsBlock = styled.div`
  display: flex;
  flex-flow: column;
`;

const SectionsLink = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  padding: 8px 16px;
  background: white;
  transition: 500ms;
  color: black;
  border-radius: var(--default-border-radius);
  :hover {
    transform: translateY(-5px);
  }
`;

const SectionsBlockTitle = styled(FlexCenter(styled.div))`
  font-weight: 700;
  margin: 0 auto;
  font-size: 28px;
  line-height: 35px;
  svg {
    margin-right: 15px;
  }
`;
const SectionsBlockContent = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 20px 15px;
  margin-top: 20px;
  justify-content: center;
`;

export const Notification = ({ deviceType }) => {
  return (
    <Container>
      {deviceType !== "mobile" && <DefaultBanner img={MainPageBanner.src} />}
      <DefaultWrapper>
        {deviceType !== "mobile" && <SearchInputs />}
        {/* Слайдеры */}

        {deviceType === "mobile" && <UIChangeLang />}
        {deviceType !== "mobile" ? (
          <SliderWrapper type="notific" title={"Уведомления"} sliderdata={mockSliderData} />
        ) : (
          <GridRubrikMobile
            title={"Уведомления"}
            api={<DefaulRubrikeBoxNotific data={mockSliderData.slice(0, 6)} />}
          />
        )}
        {deviceType !== "mobile" ? (
          <SliderWrapper type="notific" title={"Уведомления"} sliderdata={mockSliderData} />
        ) : (
          <GridRubrikMobile
            title={"Уведомления"}
            api={<DefaulRubrikeBox data={mockSliderData.slice(0, 6)} />}
          />
        )}
        {deviceType !== "mobile" ? (
          <SliderWrapper type="notific" title={"Уведомления"} sliderdata={mockSliderData} />
        ) : (
          <GridRubrikMobile
            title={"Уведомления"}
            api={<DefaulRubrikeBox data={mockSliderData.slice(0, 6)} />}
          />
        )}
        {deviceType !== "mobile" ? (
          <SliderWrapper title={"Горячие предложения"} type="product" sliderdata={mockSliderData} />
        ) : (
          <GridRubrikMobile
            title={"Горячие предложения"}
            api={<DefaulRubrikeBox data={mockSliderData.slice(0, 6)} />}
          />
        )}

        {/* Конец Слайдеры  */}

        {deviceType !== "mobile" && (
          <ExchangeBlock>
            <img src={ExchangeIcon.src} alt="" />
            <p>Обменевайтесь своими вещами в любой точке Казахстана!</p>
            <ExchangeBtn href="#">Подробнее</ExchangeBtn>
          </ExchangeBlock>
        )}
        {
          <InfoBlock>
            <MainLogo />
            <p>
              Крупнейший онлайн-сервис обмена товаров Казахстана Все онлайн-объявления Казахстана на
              TUDA-SUDA - здесь вы обменяете то, что желаете! Нажав на кнопку {"Подать объявление"},
              вы сможете разместить объявление на любую тематику легко и быстро. С помощью сервиса
              TUDA-SUDA вы сможете обменять практически все, что угодно.
            </p>
          </InfoBlock>
        }
        {deviceType !== "mobile" && (
          <SectionsBlock>
            <SectionsBlockTitle>
              <SectionsSvg />
              Разделы
            </SectionsBlockTitle>
            <SectionsBlockContent>
              <SectionsLink href="#">Услуги</SectionsLink>
              <SectionsLink href="#">Дом и сад</SectionsLink>
              <SectionsLink href="#">Мода и стиль</SectionsLink>
              <SectionsLink href="#">Животные</SectionsLink>
              <SectionsLink href="#">Детский мир</SectionsLink>
              <SectionsLink href="#">Транспорт</SectionsLink>
              <SectionsLink href="#">Работа</SectionsLink>
              <SectionsLink href="#">Авто товары</SectionsLink>
              <SectionsLink href="#">Детский мир</SectionsLink>
              <SectionsLink href="#">Транспорт</SectionsLink>
              <SectionsLink href="#">Работа</SectionsLink>
              <SectionsLink href="#">Авто товары</SectionsLink>
            </SectionsBlockContent>
          </SectionsBlock>
        )}
      </DefaultWrapper>
    </Container>
  );
};
