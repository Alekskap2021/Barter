import styled from "styled-components";
import Image from "next/image";
import { media } from "../../../global-style";
import { mockSliderData } from "../../main/sliders/mockSliderData";
import { TabNavigation, TabNavigationLink } from "../tab-block";
import TradeOffersPage from "./active/active";
import { Buttons } from "./active/buttons";
import { Information } from "./active/information";
import Link from "next/link";

const LargeProductCard = styled.div`
  background: #ffffff;
  box-shadow: -5px -6px 18px 8px rgba(156, 156, 156, 0.25),
    5px 6px 18px 8px rgba(156, 156, 156, 0.25);
  border-radius: 20px;
  width: 48%;
  padding: 20px;
  img {
    max-width: 150px;
    height: 121px;
  }
  span {
    border-radius: 5px;
  }
  ${media.mobile} {
    width: 100%;
  }
`;

const ProductCardsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 20px;
`;

const ProductName = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  padding-bottom: 10px;
  margin-top: 20px;
`;

const Sum = styled.b`
  margin-bottom: 15px;
  font-size: 20px;
  line-height: 25px;
  ${media.mobile} {
    padding-bottom: 25px;
  }
`;

export const SubText = styled.p`
  margin-bottom: 10px;
`;

const OfferWrapper = styled.div`
  opacity: 0.5;
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }
  border-bottom: 1px solid #e7e7e7;
`;

export const OfferTitle = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 5px;
`;

export const TradeOffersTaDontPay = ({ deviceType }: any) => {
  const item = {
    img: mockSliderData[5].img,
    title: mockSliderData[5].title,
    category: "Книги/Досуг",
    location: "Алматы, Медеуский район",
    sum: "25.000 ₸",
  };
  const item2 = {
    img: mockSliderData[6].img,
    title: mockSliderData[6].title,
    category: "Книги/Досуг",
    location: "Алматы, Медеуский район",
    sum: mockSliderData[6].sum,
  };

  return (
    <>
      <TabNavigation>
        <Link legacyBehavior href="/my-announcements/trade">
          <TabNavigationLink>Активные</TabNavigationLink>
        </Link>
        <Link legacyBehavior href="/my-announcements/trade/trade-wait">
          <TabNavigationLink>Ожидающие</TabNavigationLink>
        </Link>
        <TabNavigationLink isActive>Неоплаченные</TabNavigationLink>
        <TabNavigationLink>Неактивные</TabNavigationLink>
        <TabNavigationLink>Отклоненные</TabNavigationLink>
      </TabNavigation>
      <OfferWrapper>
        <OfferTitle>Предложение №1</OfferTitle>
        <ProductCardsWrapper>
          <LargeProductCard>
            <Title>Ваш товар</Title>
            <Image alt="" src={item.img} width={150} height={120} />
            <ProductName>{item.title}</ProductName>
            <SubText>{item.category}</SubText>
            <SubText>{item.location}</SubText>

            <Sum>{item2.sum}</Sum>
          </LargeProductCard>
          <LargeProductCard>
            <Title>Предложенный товар</Title>
            <Image alt="" src={item2.img} width={150} height={120} />
            <ProductName>{item2.title}</ProductName>
            <SubText>{item2.category}</SubText>
            <SubText>{item2.location}</SubText>

            <Sum>{item2.sum}</Sum>
          </LargeProductCard>
        </ProductCardsWrapper>
        <Information />
      </OfferWrapper>
      <></>
    </>
  );
};

export default TradeOffersPage;
