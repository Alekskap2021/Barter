import Image from "next/image";
import styled from "styled-components";
import { Container, DefaultWrapper } from "../../global-style/style-variables";

import defaultImg from "../../views/main/images-default/default-1.png";
import defaultImg2 from "../../views/main/images-default/default-2.png";
import defaultImg3 from "../../views/main/images-default/default-3.png";
import almatyMapPreview from "./almaty_map_preview.jpg";

import chevronRightSvg from "./chevron-right.svg";
import { ItemCardPageDelivery } from "./delivery";
import { SearchInputs } from "../../components/search-inputs";
import { DefaultBtn, UIBackToPage } from "../../global-style/UI-kit";
import { ProductSliderItems } from "../main/sliders/productSliderItems";
import { mockFavouriteAds } from "../favouriteAds/mockFavouriteAds";
import { useState } from "react";

const cardImages = [defaultImg, defaultImg2, defaultImg3];

const SectionContainerBase = styled.div`
  background: #fff;
  border-radius: 20px;

  margin-right: 20px;
  margin-bottom: 20px;

  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
`;

const SectionContainerGallery = styled(SectionContainerBase)`
  width: 90%;
  padding: 30px;
`;

const EnlargeButton = styled.div`
  font-weight: 600;
  font-size: 16px;

  color: #fdce05;
  cursor: pointer;

  /** TODO: upd */
  margin-top: 30px;
  text-align: right;
`;

const SectionTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #373538;
  margin-bottom: 10px;
  font-weight: 300;

  & > b {
    font-weight: 500;
  }
`;

const SectionContainer = styled(SectionContainerBase)`
  padding: 20px;

  & > * {
    margin-bottom: 10px;
  }
  & > :last-child {
    margin-bottom: 0;
  }
`;

const SectionContainerMinWidth = styled(SectionContainer)`
  min-width: 437px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const RowCentered = styled(Row)`
  justify-content: center;
  gap: 20px;
`;

const RowBetween = styled(Row)`
  justify-content: space-between;
`;

const GhostButtons = styled.button`
  display: inline-block;
  white-space: nowrap;

  line-height: 44px;
  border: 2px solid #fdce05;
  border-radius: 53px;
  padding-left: 15px;
  padding-right: 15px;

  font-size: 14px;
  font-weight: 600;
  color: #373538;

  cursor: pointer;
`;

const PrimaryButton = styled(GhostButtons)`
  background-color: #fdce05;
  color: #373538;
`;

const SubLabel = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #868686;
`;

// TODO: use 'a' or smth like ?
const SubLabelButton = styled(SubLabel)`
  cursor: pointer;
`;

const WasOnlineLabel = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: #868686;

  & > b {
    font-weight: 500;
  }
`;

const AllAuthorItems = styled.a`
  display: block;
  color: #373538;
  line-height: 24px;
  cursor: pointer;
  margin-bottom: 0;
  height: 24px;
`;

const AllAuthorItemsText = styled.span`
  margin-right: 8px;
  vertical-align: top;
`;

const OtherItemsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(232px, 232px));
  gap: 47px;
  svg {
    min-height: 24px;
  }
`;

const OtherSectionHeader = styled.h1`
  display: block;

  font-weight: 700;
  font-size: 28px;
  line-height: 35px;

  color: #373538;

  margin-top: 40px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;

  color: #373538;
`;

const Divider = styled.hr`
  border: 1px solid #e7e7e7;
  margin-bottom: 20px;
`;

const GhostButton = ({ text, dataText }) => {
  const [showHidden, setShowHidden] = useState(true);

  return (
    <>
      <GhostButtons
        onClick={() => {
          setShowHidden(!showHidden);
        }}
      >
        {showHidden ? text : dataText}
      </GhostButtons>
    </>
  );
};

function ItemCardPage({ deviceType, data }: any) {
  return (
    <>
      <Container>
        <DefaultWrapper>
          <SearchInputs marginB={"30px"} />
          <UIBackToPage href={"/"} text={"Назад"} />
          <Row>
            <SectionContainerGallery>
              <Row>
                <img src={data.main_photo.slice(32)} />
              </Row>
              <EnlargeButton>Увеличить</EnlargeButton>
            </SectionContainerGallery>
            <div>
              <SectionContainer>
                <SectionTitle>Пользователь</SectionTitle>
                <h3>{data.contact_name}</h3>
                <WasOnlineLabel>
                  Был онлайн сегодня, в <b>11:34</b>
                </WasOnlineLabel>
                <GhostButton text={"Показать телефон"} dataText={data.phone_number} />
                <br />
                <GhostButton text={"Написать сообщение"} dataText={data.email} />
                <AllAuthorItems>
                  <AllAuthorItemsText>Все объявления автора</AllAuthorItemsText>
                </AllAuthorItems>
              </SectionContainer>
              <SectionContainer>
                <SectionTitle>Местоположение</SectionTitle>
                <h3>{data.location}</h3>
                <img src={almatyMapPreview.src} width="100%" />
              </SectionContainer>
            </div>
          </Row>
          <Row>
            <div>
              <SectionContainer>
                <SectionTitle>
                  Опубликовано <b>{data.created_at.slice(0, 10)}</b>
                </SectionTitle>
                <h4>{data.name}</h4>
                <h2>{data.price} ₸</h2>
                <h3>Описание:</h3>
                <Description>{data.description}</Description>
                <RowCentered>
                  <PrimaryButton>Предложить обмен</PrimaryButton>
                  <DefaultBtn
                    color={"#FDCE05"}
                    border={"2px solid #FDCE05"}
                    background={"transparent"}
                    text={"Купить этот товар"}
                  />
                </RowCentered>
                <Divider />
                <RowBetween>
                  <SubLabel>ID: {data.id} / Просмотров: 1424</SubLabel>
                  <SubLabelButton>Пожаловаться</SubLabelButton>
                </RowBetween>
              </SectionContainer>
            </div>
            <div>
              <SectionContainerMinWidth>
                <SectionTitle>Расчет доставки</SectionTitle>
                <ItemCardPageDelivery />
              </SectionContainerMinWidth>
              <SectionContainerMinWidth>
                <SectionTitle>Реклама</SectionTitle>
                <h3>Место для вашей рекламы!</h3>
              </SectionContainerMinWidth>
            </div>
          </Row>
          <div>
            <OtherSectionHeader>Все объявления автора</OtherSectionHeader>
            <OtherItemsRow>
              {ProductSliderItems({ data: mockFavouriteAds.slice(0, 3) })}
            </OtherItemsRow>
          </div>
          <div>
            <OtherSectionHeader>Похожие объявления</OtherSectionHeader>
            <OtherItemsRow>
              {ProductSliderItems({ data: mockFavouriteAds.slice(0, 4) })}
            </OtherItemsRow>
          </div>
        </DefaultWrapper>
      </Container>
    </>
  );
}

export default ItemCardPage;
