import Image from "next/image";
import styled from "styled-components";
import { EyeSvg } from "../../../src/components/default-svg";
import { MessageSvg } from "../../../src/components/header/img";

import { HeartSvg, PhoneSvg } from "../../../src/views/main/svg";

import defaultImg from "../../../src/views/main/images-default/default-1.png";
import { DefaultCheckBox, UIBackToPage } from "../../../src/global-style/UI-kit";

import { MobileFooter } from "../../../src/components/footer/mobile-footer";
import { useState } from "react";
import { PopUpWrapper } from "../../../src/components/popUp";
import { PopUpReklama } from "../../../src/views/my-annonucements/ads-tab-content/active-popup/reklama";

const Wrapper = styled.div`
  background: var(--default-yellow);
  padding: 16px 8px 100px;
`;
const WrapperContent = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 30px;
  padding: 8px 20px;
`;

const DefaultTitle = styled.h2`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 4px;
`;

// Item

const Item = styled.div`
  padding: 16px 0px 6px;
  border-bottom: 1px solid #e7e7e7;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  min-width: 87px;
  height: 70px;
  margin-right: 8px;
  position: relative;
  border-radius: 3px;
`;

const Description = styled.div`
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }
  b {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    margin-top: 4px;
  }
`;
const Date = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #868686;
  margin: 8px 0px 16px;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #868686;
  svg {
    width: 12px;
    height: 12px;
    margin-right: 6px;
  }
`;

const ButtonsWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 3%;
  margin: 16px 0px;
  place-items: center;
`;

const Button = styled.div`
  width: 100%;
  text-align: center;
  padding: 8px 16px;
  border: 1px solid #fdce05;
  filter: drop-shadow(4px 4px 13px rgba(0, 0, 0, 0.25));
  border-radius: 53px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;

const ItemBlock = ({ handleClick }: any) => {
  return (
    <Item>
      <Flex>
        <ImageWrapper>
          <Image alt="" src={defaultImg} />
        </ImageWrapper>
        <Description>
          <p>Книги Л.Н. Толстого 4 тома, 2 книги Абая К.</p>
          <b>25.000 ₸ .</b>
        </Description>
      </Flex>
      <Date>18.03.2022 - 17.04.2022</Date>
      <Info>
        <InfoItem>
          <MessageSvg />
          <p>12</p>
        </InfoItem>
        <InfoItem>
          <EyeSvg />
          <p>45</p>
        </InfoItem>
        <InfoItem>
          <PhoneSvg />
          <p>2</p>
        </InfoItem>
        <InfoItem>
          <HeartSvg />
          <p>7</p>
        </InfoItem>
      </Info>
      <ButtonsWrapper>
        <Button>Редактировать</Button>
        <Button onClick={handleClick}>Продвигать</Button>
        <svg
          width="25"
          height="5"
          viewBox="0 0 25 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="2.5" r="2.5" fill="#FDCE05" />
          <circle cx="12.5" cy="2.5" r="2.5" fill="#FDCE05" />
          <circle cx="22.5" cy="2.5" r="2.5" fill="#FDCE05" />
        </svg>
      </ButtonsWrapper>
      <DefaultCheckBox labelText={"Товар по умолчанию"} />
    </Item>
  );
};

// Item end

const AdsActiveTabMobile = () => {
  const [reklamaShow, setReklamaShow] = useState(false);
  return (
    <>
      <Wrapper>
        <UIBackToPage href={"/profile"} text={"Вернуться в профиль"} />
        <WrapperContent>
          <DefaultTitle>Активные</DefaultTitle>
          <ItemBlock
            handleClick={() => {
              setReklamaShow(!reklamaShow);
            }}
          />
          <ItemBlock />
          <ItemBlock />
          <ItemBlock />
        </WrapperContent>
      </Wrapper>
      {reklamaShow && (
        <PopUpWrapper
          handleClick={() => {
            setReklamaShow(!reklamaShow);
          }}
          //   children={<PopUpReklama />}
        >
          <PopUpReklama />
        </PopUpWrapper>
      )}
      <MobileFooter />
    </>
  );
};

export default AdsActiveTabMobile;
