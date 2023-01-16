import { DefaultBanner } from "../components/default-banner";
import { Container, DefaultWrapper, FlexCenter } from "../global-style/style-variables";
import styled from "styled-components";

// img
import MainPageBanner from "../public/assets/images/banners/Main-page-banner.png";
import ExchangeIcon from "./main/images-default/exchange.png";

// api
import { SearchInputs } from "../components/search-inputs";
import { SectionsSvg } from "./main/svg";

import { DefaultBtn, UIChangeLang } from "../global-style/UI-kit";
import { MainLogo } from "../public/assets/images/logo";

import monImg from "./mon.png";
import { DefaultArrowSvg } from "../components/default-svg";
import { useState } from "react";

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

const ContentWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 60px;
  margin-bottom: 66px;
  padding: 40px 20px;
`;
const ContentWrapperTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  margin-bottom: 41px;
`;

const TradeItemWrapper = styled.div`
  background: #fff1b4;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 30px;
`;

const TradeItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const TradeItemHeaderLeft = styled.div`
  display: flex;
  svg {
    margin-right: 8px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
  b {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }
`;

const TradeItemHeaderMid = styled.div`
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  b {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;
const TradeItemHeaderRight = styled.div`
  display: flex;
  align-items: center;
  svg {
    transition: 500ms;
    margin-left: 14px;
  }
`;

const TradeItemHidden = styled.div<{ show?: boolean }>`
  transition: 300ms;
  ${({ show }) =>
    show
      ? "height: auto; opacity: 1; visibility: visible"
      : "visibility: hidden;opacity: 0; height: 0;"}
`;

const TradeItemHiddenHeader = styled.div`
  justify-content: space-between;
`;

const TradeGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  :first-child {
    border-bottom: 1px solid gray;
  }
  padding: 20px 0px;
  > p:nth-child(2) {
    justify-self: center;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 15px;
  }
`;

const TradeItem = () => {
  const [showTab, setShowTab] = useState(false);

  return (
    <TradeItemWrapper>
      <TradeItemHeader
        onClick={() => {
          setShowTab(!showTab);
        }}
      >
        <TradeItemHeaderLeft>
          <svg
            width="9"
            height="37"
            viewBox="0 0 9 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.25" y="0.759277" width="8" height="36" rx="4" fill="black" />
          </svg>

          <div>
            <p>№747 433 352 от 17.10.2022</p>
            <b>Выполнен</b>
          </div>
        </TradeItemHeaderLeft>
        <TradeItemHeaderMid>
          <p>Сумма заказа</p>
          <b>3 569 ₸</b>
        </TradeItemHeaderMid>
        <TradeItemHeaderRight>
          <img src={monImg.src} alt="" />

          <DefaultArrowSvg rotate={showTab ? "180deg" : "0deg"} />
        </TradeItemHeaderRight>
      </TradeItemHeader>
      <TradeItemHidden show={showTab}>
        <TradeItemHiddenHeader>
          <TradeGrid>
            <p>Заказ</p>
            <p>Статус</p>
            <p>Обмен на</p>
            <p>Обмен с</p>
          </TradeGrid>
          <TradeGrid>
            <Flex>
              <img src={monImg.src} alt="" />
              <p>
                Монитор MSI<br></br>
                №747 433 352<br></br>
                17.10.2022<br></br>
              </p>
            </Flex>
            <p>Принято</p>
            <Flex>
              <img src={monImg.src} alt="" />
              <p>
                Телефон<br></br>
                Samsung
              </p>
            </Flex>
            <b>Alux 222</b>
            <DefaultBtn text={"Оставить отзыв"} />
          </TradeGrid>
        </TradeItemHiddenHeader>
      </TradeItemHidden>
    </TradeItemWrapper>
  );
};

export const HistoryTradePage = ({ deviceType }) => {
  return (
    <Container>
      {deviceType !== "mobile" && <DefaultBanner img={MainPageBanner.src} />}
      <DefaultWrapper>
        {deviceType !== "mobile" && <SearchInputs />}
        {/* Слайдеры */}

        {deviceType === "mobile" && <UIChangeLang />}
        <ContentWrapper>
          <ContentWrapperTitle>История обмена</ContentWrapperTitle>
          <TradeItem />
          <TradeItem />
          <TradeItem />
          <TradeItem />
          <TradeItem />
          <TradeItem />
        </ContentWrapper>
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
