import styled from "styled-components";

import Link from "next/link";

import { HeartSvg } from "../../src/components/header/img";
import { JC_SB, FlexOnlyCenter, AliCenter, UIBtn } from "../../src/global-style/style-variables";
import { MobileSwiper } from "../../src/views/card-page/mobile/mobile-slider";
import { UploadSvg } from "../../src/views/card-page/mobile/svg";

import { ArrowLeft2Svg } from "../../src/views/main/svg";
import { ArrowRightSvg } from "../../src/components/default-svg";
import { useState } from "react";
import { CheckBox } from "../../src/views/authorization/checkbox";

import Image from "next/image";
import defaultImg from "../../src/views/main/images-default/default-1.png";
import { DefaultCheckBox } from "../../src/global-style/UI-kit";
import { DeliveryPath } from "../../src/views/card-page/delivery";

import CalcImg from "./calculate.jpg";

const Title = styled(AliCenter)`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
  svg {
    margin-left: 8px;
  }
`;

const Wrapper = styled.div`
  background: var(--default-yellow);
  padding-bottom: 140px;
`;

const SwiperWrapper = styled.div`
  position: relative;
  margin-top: -8px;
`;

const SwiperHeader = styled(JC_SB)`
  position: absolute;
  z-index: 100;
  width: 96%;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 14px;
`;

const SvgCircle = styled(FlexOnlyCenter)`
  background: rgba(98, 98, 98, 0.5);
  width: 24px;
  height: 24px;
  border-radius: 50px;
  svg {
    height: 17px;
    width: 17px;
  }
`;

const Container = styled.div`
  padding: 16px;
`;

const WrapperContent = styled.div<{ marginB?: any }>`
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25);
  border-radius: 20px;
  padding: 16px 8px;
  margin-bottom: ${({ marginB }) => (marginB ? marginB : "")};
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }
`;

const Date = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
`;

const ProductName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin: 16px 0px;
`;

const Price = styled.b`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

// accardion

const AccardionTitle = styled.h2<{ rotateArrow?: boolean; border?: any }>`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: ${({ border }) => (border ? border : "0.5px solid #373538")};
  svg {
    transition: 300ms;
    ${({ rotateArrow }) => (rotateArrow ? "transform: rotate(90deg)" : "transform: rotate(0deg)")}
  }
`;

const AccardionHiddenContent = styled.div<{ open?: any }>`
  ${({ open }) => (open ? "display: block;" : "display: none")}
`;

// accardion end

const Accardion = ({ title, accardionThumb, border, child }: any) => {
  const [openAccardion, setOpenAccardion] = useState(false);

  return (
    <>
      <AccardionTitle
        border={border}
        rotateArrow={openAccardion}
        onClick={() => {
          setOpenAccardion(!openAccardion);
        }}
      >
        {title} <ArrowRightSvg />
      </AccardionTitle>
      <AccardionHiddenContent open={openAccardion}>{child}</AccardionHiddenContent>
      {accardionThumb}
    </>
  );
};

// ChangeItems

const ChangeItem = styled(JC_SB)`
  padding: 16px 0px;
  border-bottom: 1px solid #e7e7e7; ;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ChangeItemTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  width: 50%;
  line-height: 15px;
`;

const ImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  margin: 0px 16px;
`;

const ChangePrice = styled.b`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

const Label = styled.label<{ for?: any }>`
  display: flex;
  align-items: center;
`;

const ChangeItemsWrappers = styled.div`
  :last-child {
    border-bottom: 0.5px solid #373538;
  }
`;

// ChangeItems end

// Comment

const Comment = styled.div`
  display: flex;
  margin-top: 16px;
  flex-flow: column;
`;

const CommentTitle = styled.b`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 8px;
`;

const CommentArea = styled.textarea`
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  height: 117px;
`;

const PriceDelivery = styled(JC_SB)`
  /* margin-top: 16px; */
  margin: 16px 0px;
  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
  }
`;

const ButtonAbsolute = styled.div`
  position: fixed;
  bottom: 30px;
  width: 100%;
`;

// Comment end
const ChangeItems = () => {
  return (
    <ChangeItemsWrappers>
      <ChangeItem>
        <CheckBoxWrapper>
          <DefaultCheckBox labelText={"  "} marginB={"0px"} />
          <Label for={"  "}>
            <ImageWrapper>
              <Image src={defaultImg} alt="" />
            </ImageWrapper>
            <ChangeItemTitle>Аллюминивая кружка</ChangeItemTitle>
          </Label>
        </CheckBoxWrapper>
        <ChangePrice>80 000 ₸</ChangePrice>
      </ChangeItem>
      <ChangeItem>
        <CheckBoxWrapper>
          <DefaultCheckBox labelText={" "} marginB={"0px"} />
          <Label for={" "}>
            <ImageWrapper>
              <Image src={defaultImg} alt="" />
            </ImageWrapper>
            <ChangeItemTitle>Аллюминивая кружка</ChangeItemTitle>
          </Label>
        </CheckBoxWrapper>
        <ChangePrice>80 000 ₸</ChangePrice>
      </ChangeItem>
      <ChangeItem>
        <CheckBoxWrapper>
          <DefaultCheckBox labelText={"   "} marginB={"0px"} />
          <Label for={"   "}>
            <ImageWrapper>
              <Image src={defaultImg} alt="" />
            </ImageWrapper>
            <ChangeItemTitle>Аллюминивая кружка</ChangeItemTitle>
          </Label>
        </CheckBoxWrapper>
        <ChangePrice>80 000 ₸</ChangePrice>
      </ChangeItem>
    </ChangeItemsWrappers>
  );
};

const CheckBoxWrapperS = styled.div`
  img {
    width: 100%;
  }
  border-bottom: 0.5px solid #373538;
  padding-bottom: 18px;
  margin-bottom: 16px;
`;

const ChangeItemsCheckbox = () => {
  return (
    <CheckBoxWrapperS>
      <DefaultCheckBox labelText={"Оплачиваю сам"} />
      <DefaultCheckBox labelText={"50 / 50"} />
      <DefaultCheckBox labelText={"Оплачивает собственник"} />
      <DefaultCheckBox labelText={"Каждый за себя"} />
      <DefaultCheckBox labelText={"Оплата по договоренности"} />
      <img src={CalcImg.src} alt="" />
    </CheckBoxWrapperS>
  );
};

const ChangeItemThumbWrapper = styled.div`
  padding: 16px 0px;
  border-bottom: 0.5px solid #373538;
  margin-bottom: 19px;
`;

const CheckBoxTextThumbP = styled.p`
  font-weight: 500;
  font-size: 12px;
  padding-bottom: 16px;
  line-height: 15px;
  border-bottom: 0.5px solid #373538;
`;

const CheckBoxTextThumb = () => {
  return <CheckBoxTextThumbP>Оплачиваю сам</CheckBoxTextThumbP>;
};

const ChangeItemThumb = () => {
  return (
    <>
      <ChangeItemThumbWrapper>
        <Label for={"   "}>
          <ImageWrapper>
            <Image src={defaultImg} alt="" />
          </ImageWrapper>
          <ChangeItemTitle>Аллюминивая кружка</ChangeItemTitle>
        </Label>
      </ChangeItemThumbWrapper>
    </>
  );
};

const MobileCardPageTrade = () => {
  return (
    <>
      <SwiperWrapper>
        <SwiperHeader>
          <Link href="/">
            <SvgCircle>
              <ArrowLeft2Svg fill={"white"} />
            </SvgCircle>
          </Link>
          <div style={{ display: "flex", gap: "8px" }}>
            <SvgCircle>
              <UploadSvg />
            </SvgCircle>
            <SvgCircle>
              <HeartSvg fill={"transparent"} stroke={"white"} />
            </SvgCircle>
          </div>
        </SwiperHeader>
        <MobileSwiper />
      </SwiperWrapper>
      <Wrapper>
        <Container>
          <Title>
            Расчет доставки
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.066 11.92L9.052 9.26L9.43 9.246C9.75667 9.246 10.0413 9.176 10.284 9.036C10.536 8.896 10.732 8.70467 10.872 8.462C11.012 8.21933 11.082 7.94867 11.082 7.65C11.082 7.342 11.012 7.07133 10.872 6.838C10.7413 6.60467 10.55 6.42267 10.298 6.292C10.0553 6.16133 9.766 6.096 9.43 6.096C8.982 6.096 8.59467 6.208 8.268 6.432C7.94133 6.656 7.68 6.97333 7.484 7.384L6.56 6.614C6.83067 6.06333 7.218 5.634 7.722 5.326C8.23533 5.018 8.82333 4.864 9.486 4.864C10.0553 4.864 10.5593 4.98067 10.998 5.214C11.4367 5.438 11.7773 5.75533 12.02 6.166C12.2627 6.56733 12.384 7.034 12.384 7.566C12.384 8.05133 12.272 8.49467 12.048 8.896C11.8333 9.288 11.5253 9.61467 11.124 9.876C10.732 10.128 10.2653 10.2913 9.724 10.366L10.27 9.806L10.158 11.92H9.066ZM9.598 15.14C9.33667 15.14 9.11733 15.0513 8.94 14.874C8.772 14.6967 8.688 14.4773 8.688 14.216C8.688 13.9547 8.772 13.74 8.94 13.572C9.11733 13.3947 9.33667 13.306 9.598 13.306C9.85933 13.306 10.074 13.3947 10.242 13.572C10.4193 13.74 10.508 13.9547 10.508 14.216C10.508 14.4773 10.4193 14.6967 10.242 14.874C10.074 15.0513 9.85933 15.14 9.598 15.14Z"
                fill="#373538"
              />
              <circle cx="10" cy="10" r="9.5" stroke="#373538" />
            </svg>
          </Title>
          <WrapperContent marginB={"16px"}>
            <Date>Сегодня в 14:02</Date>
            <ProductName>Аллюминивая кружка</ProductName>
            <Price>80 000 ₸</Price>
          </WrapperContent>
          <WrapperContent>
            <Accardion
              accardionThumb={<ChangeItemThumb />}
              child={<ChangeItems />}
              title={"Выберите товар для обмена"}
            />

            <Accardion
              accardionThumb={<CheckBoxTextThumb />}
              child={<ChangeItemsCheckbox />}
              border={"unset"}
              title={"Кто платит за доставку"}
            />
            <Comment>
              <CommentTitle>Комментарий:</CommentTitle>
              <CommentArea></CommentArea>
            </Comment>
            <PriceDelivery>
              <p>Стоимость доставки</p>
              <p>45 063 ₸</p>
            </PriceDelivery>
            <DeliveryPath from={"Гагарина 29, кв 8"} to={"Garden st, 32, 76543 ap "} />
          </WrapperContent>
        </Container>
      </Wrapper>
      <ButtonAbsolute>
        <UIBtn margin={"0 0 8px"} text={"Предложить обмен"} />
        <UIBtn border={"2px solid #FDCE05"} background={"white"} text={"Купить"} />
      </ButtonAbsolute>
    </>
  );
};

export default MobileCardPageTrade;
