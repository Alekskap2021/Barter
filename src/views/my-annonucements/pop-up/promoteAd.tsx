import styled from "styled-components";
import { PopUpWrapper } from "../../../components/popUp";
import { media } from "../../../global-style";
import { DefaultCheckBox, UIBackToPage } from "../../../global-style/UI-kit";
import { PromoteAdCard } from "./promoteAdCard";

const PromoteAdContent = styled.div`
  ${media.mobile} {
    max-width: 560px;
    flex-direction: column;
    height: 100%;
  }
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 40px;
  margin-bottom: 20px;
`;

const PromoteAdTitle = styled.div`
  ${media.mobile} {
    margin-bottom: 10px;
    padding-top: 0;
  }
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  margin-bottom: 40px;
  padding-top: 20px;
`;
const CheckBoxesBox = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }
`;

const CheckBoxItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
  }
`;

export const PromoteAd = ({ deviceType }) => {
  const mockData = [
    {
      title: `СТАНДАРТ 300 ₸`,
      maintext:
        'Это текст-"рыба", часто используемый в печати и вэб-дизайне является стандартной "рыбой" то текст-"рыба", часто',
    },
    {
      title: `ПРЕМИУМ 900 ₸`,
      maintext:
        'Это текст-"рыба", часто используемый в печати и вэб-дизайне является стандартной "рыбой" то текст-"рыба", часто дизайне является стандартной "рыбой" то текст-"рыба", часто ',
    },
    {
      title: `БИЗНЕС 600 ₸`,
      maintext:
        'Это текст-"рыба", часто используемый в печати и вэб-дизайне является стандартной "рыбой" то текст-"рыба", часто',
    },
  ];

  return (
    <>
      <UIBackToPage href="/" />

      <PopUpWrapper>
        <PromoteAdTitle>
          <h2>Рекламировать объявление</h2>
        </PromoteAdTitle>

        <PromoteAdContent>
          <PromoteAdCard {...mockData[0]} />
          <PromoteAdCard {...mockData[1]} main />
          <PromoteAdCard {...mockData[2]} subMain />
        </PromoteAdContent>
        <CheckBoxesBox>
          <h2>Другие доступные услуги:</h2>
          <CheckBoxItemBox>
            <DefaultCheckBox labelText="7 поднятий вверх списка (ежедневно, 7 дней)" />
            <h2>900 ₸</h2>
          </CheckBoxItemBox>
          <CheckBoxItemBox>
            <DefaultCheckBox labelText="Отправить в TOP - объявления" />
            <h2>900 ₸</h2>
          </CheckBoxItemBox>
          <CheckBoxItemBox>
            <DefaultCheckBox labelText="Отправить в VIP - объявления" />
            <h2>900 ₸</h2>
          </CheckBoxItemBox>
        </CheckBoxesBox>
      </PopUpWrapper>
    </>
  );
};
