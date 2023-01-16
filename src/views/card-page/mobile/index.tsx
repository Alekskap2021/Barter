import styled from "styled-components";
import { UserSvg } from "../../../components/header/img";
import { AliCenter, FlexOnlyCenter, JC_SB } from "../../../global-style/style-variables";
import { ArrowLeft2Svg, HeartSvg, MarkSvg } from "../../main/svg";
import { MobileSwiper } from "./mobile-slider";
import { EyeSvg, UploadSvg } from "./svg";

import mapImg from "./map.jpg";
import { DefaulRubrikeBox } from "../../main/default-rubrik-mobile";
import { mockSliderData } from "../../main/sliders/mockSliderData";
import Image from "next/image";
import Link from "next/link";

const Title = styled.h2`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
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
    height: 14px;
    width: 14px;
  }
`;

const Container = styled.div`
  padding: 16px;
`;

const WrapperContent = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25);
  border-radius: 20px;
  padding: 16px 8px;
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

const TagsItem = styled.div`
  padding: 4px 8px;
  background: #e7e7e7;
  border-radius: 20px;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
`;

const BorderWrapper = styled.div`
  padding: 16px 0px;
  border-top: 1px solid #e7e7e7;
`;

const Tags = styled(BorderWrapper)`
  display: flex;
  flex-flow: wrap;
  gap: 8px;
`;

const Description = styled(BorderWrapper)``;

const ContentTitle = styled.h2`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 8px;
`;

// user

const User = styled(BorderWrapper)`
  display: flex;
  align-items: center;
`;

const UserCircle = styled(FlexOnlyCenter)`
  border: 1px solid #868686;
  border-radius: 48px;
  width: 36px;
  height: 36px;
  margin-right: 8px;
  svg {
  }
`;

const UserName = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  span {
    font-weight: 500;
    color: var(--default-yellow);
  }
`;

const UserDate = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #868686;
`;
// user end

// Map

const Flex = styled(AliCenter)`
  p {
    margin-left: 4px;
  }
`;

const Map = styled(BorderWrapper)``;

const ImgWrapper = styled.div`
  position: relative;
  height: 87px;
  margin-top: 16px;
`;

const Delivery = styled(BorderWrapper)`
  display: flex;
  justify-content: space-between;
`;

const DefaultBig = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

const MoreAds = styled(BorderWrapper)``;

const MoreAdsHerder = styled(JC_SB)`
  a {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: var(--default-yellow);
    text-decoration-line: underline;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 11px;
  margin-top: 16px;
`;

// Map end

//  IDWrapper

const IDWrapper = styled(BorderWrapper)`
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #868686;
  }
`;

const IDFooter = styled(JC_SB)`
  margin-top: 16px;
`;
//  IDWrapper end

const Advertising = styled(FlexOnlyCenter)`
  background: #ffffff;
  margin-top: 16px;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 30px;
  height: 136px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

export const CardPageMobile = ({ data }: any) => {
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
              <HeartSvg fill={"white"} />
            </SvgCircle>
          </div>
        </SwiperHeader>
        <MobileSwiper img={data.main_photo.slice(32)} />
      </SwiperWrapper>
      <Wrapper>
        <Container>
          <Title>Информацио о товаре</Title>
          <WrapperContent>
            <Date>Сегодня в 14:02</Date>
            <ProductName>{data.name}</ProductName>
            <Price>{data.price} ₸</Price>
            <Tags>
              <TagsItem>Подкатегории: Досуг</TagsItem>
              <TagsItem>Состояние: {data.condition}</TagsItem>
              <TagsItem>Какое- то</TagsItem>
              <TagsItem>Описание</TagsItem>
              <TagsItem>или</TagsItem>
              <TagsItem>характеристика</TagsItem>
            </Tags>
            <Description>
              <ContentTitle>Описание:</ContentTitle>
              <p>{data.description}</p>
            </Description>
            <User>
              <UserCircle>
                <UserSvg />
              </UserCircle>
              <div>
                <UserName>
                  {data.contact_name} / <span>сейчас онлайн</span>
                </UserName>
                <UserDate>на TUDA-SUDA.KZ с июля 2017 г.</UserDate>
              </div>
            </User>
            <Map>
              <Flex>
                <MarkSvg />
                <p>{data.location}</p>
              </Flex>
              <ImgWrapper>
                <Image alt="" src={mapImg} />
              </ImgWrapper>
            </Map>
            <Delivery>
              <DefaultBig>Стоимость доставки:</DefaultBig>
              <DefaultBig>45 063₸ </DefaultBig>
            </Delivery>
            <MoreAds>
              <MoreAdsHerder>
                <DefaultBig>Все объявления автора</DefaultBig>
                <a href="#">Смотреть все</a>
              </MoreAdsHerder>
              <Grid>
                <DefaulRubrikeBox data={mockSliderData.slice(0, 2)} />
              </Grid>
            </MoreAds>
            <MoreAds>
              <MoreAdsHerder>
                <DefaultBig>Похожие объявление</DefaultBig>
                <a href="#">Смотреть все</a>
              </MoreAdsHerder>
              <Grid>
                <DefaulRubrikeBox data={mockSliderData.slice(0, 2)} />
              </Grid>
            </MoreAds>
            <IDWrapper>
              <p>
                Главная / Досуг и развлечения / Книги / Тут / Может / Быть и что-то / другое /
                Категория / Подкатегория
              </p>
              <IDFooter>
                <p>ID: {data.id}</p>
                <Flex>
                  <EyeSvg />
                  <p style={{ margin: "4px" }}>120</p>
                </Flex>
              </IDFooter>
            </IDWrapper>
          </WrapperContent>
          <Advertising>Место для вашей рекламы</Advertising>
        </Container>
      </Wrapper>
    </>
  );
};
