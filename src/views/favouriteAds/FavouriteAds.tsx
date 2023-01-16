import { useState } from "react";
import styled from "styled-components";
import { media } from "../../global-style";
import { Container, DefaultWrapper } from "../../global-style/style-variables";

import { mockFavouriteAds } from "./mockFavouriteAds";

import { UIBackToPage } from "../../global-style/UI-kit";
import { NoFavAdsBlock } from "./NoFavAdsBlock";
import { SliderState } from "./SliderState";

const SubTitle = styled.div<{ isSelected?: boolean }>`
  display: flex;

  font-weight: ${({ isSelected }) => (isSelected ? 400 : 700)};
  font-size: 20px;
  line-height: 25px;
  color: #373538;
  border-bottom: ${(props) => (props.isSelected ? "none" : "3px solid #373538")};
  padding-right: 10px;
  padding-left: 10px;
  cursor: pointer;
  padding-bottom: 4px;
  margin-bottom: 15px;
  width: fit-content;

  ${media.mobile} {
    padding: unset;
    font-size: 14px;
    text-align: center;
    line-height: 18px;
    border-bottom: ${(props) => (props.isSelected ? "1px solid" : "3px solid #373538")};
  }
  @media screen and (max-width: 345px) {
    font-size: 12px;
  }
`;

const Tabs = styled.div`
  display: flex;
  ${media.mobile} {
    padding: 0px 24px;
  }
`;

const Wrapper = styled.div`
  background: white;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 15px;
  position: relative;
  ${media.mobile} {
    box-shadow: unset;
  }
`;

const MainWrapper = styled(DefaultWrapper)`
  padding: 20px;
  ${media.mobile} {
    padding: 19px 6px 100px;
    min-height: 100vh;
  }
`;

const PageTitle = styled.h2`
  margin-bottom: 20px;
  ${media.mobile} {
    text-align: center;
  }
`;
const MobileWrapper = styled.div`
  ${media.mobile} {
    background: #ffffff;
    box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
      4px 4px 16px rgba(172, 172, 172, 0.15);
    border-radius: 30px;
    padding: 8px;
  }
`;

// Убрать

const TimePopUp = styled.div``;

// Убрать конец

export const FavouriteAdsPage = ({ deviceType }: any) => {
  const [isSelected, setIsSelected] = useState(false);

  const Title = deviceType !== "mobile" ? "Избранные объявление" : "Избранное";

  return (
    <Container>
      <MainWrapper>
        {deviceType === "mobile" && <UIBackToPage href={"/"} text={"Вернуться к объявлению"} />}
        <MobileWrapper>
          {((mockFavouriteAds.length > 0 && deviceType === "mobile") ||
            deviceType === "desktop") && (
            <>
              <PageTitle>{Title}</PageTitle>
              <Tabs>
                <SubTitle isSelected={isSelected} onClick={() => setIsSelected(!isSelected)}>
                  Избранные объявления ({mockFavouriteAds.length}/150)
                </SubTitle>
                <SubTitle isSelected={!isSelected} onClick={() => setIsSelected(!isSelected)}>
                  Недавно просмотренные
                </SubTitle>
              </Tabs>
            </>
          )}
          <Wrapper>
            {/* СНИЗУ КОД КОТОРЫЙ НУЖНО РАСКОМИТИТЬ КОГДА ПРОЕКТ ПОЙДЕТ НА ПРОД */}
            {/* {mockFavouriteAds.length > 0 ? (
              <SliderState deviceType={deviceType} />
            ) : (
              <NoFavAdsBlock />
            )} */}

            {!isSelected ? <SliderState deviceType={deviceType} /> : <NoFavAdsBlock />}
          </Wrapper>
          {/* Убрать */}

          <TimePopUp></TimePopUp>
          {/* Убрать конец */}
        </MobileWrapper>
      </MainWrapper>
    </Container>
  );
};
