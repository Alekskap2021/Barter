import styled from "styled-components";
import { PenSvg } from "../../components/default-svg";
import { media } from "../../global-style";
import { FlexOnlyCenter, UIBtn } from "../../global-style/style-variables";
import {
  DefaultBtn,
  DefaultInput,
  DefaultSelect,
  UIBackToPage,
  UIContentWrapper,
  UIGridColumn,
} from "../../global-style/UI-kit";
import { ButtonAbsolute } from "../authorization/mobile-footer-btn";
import { DubleInput } from "../create-ad";
import { UserAvatar } from "./change-photo";

const Wrapper = styled.div`
  h2 {
    margin-bottom: 20px;
  }
  ${media.mobile} {
    padding: 15px 0px 80px;
  }
`;

const Gap = styled.div`
  display: grid;
  row-gap: 20px;
  ${media.mobile} {
    row-gap: 15px;
    :nth-child(2) {
      margin-top: 20px;
    }
  }
`;
const GridColumn = styled(UIGridColumn)`
  align-items: start;
  margin-bottom: 40px;
`;

const country = [
  {
    title: "Караганда",
  },
  {
    title: "Алматы",
  },
  {
    title: "Астана",
  },
];

const rayon = [
  {
    title: "Сарыарка",
  },
  {
    title: "Москва",
  },
  {
    title: "Райымбек-батыра",
  },
];

export const SettingsPage = ({ deviceType }) => {
  return (
    <Wrapper>
      {deviceType !== "mobile" ? (
        <h2>Настройки</h2>
      ) : (
        <UIBackToPage href={"/profile"} text={"Вернуться в профиль"} />
      )}
      <UIContentWrapper>
        {deviceType === "mobile" && <h2 style={{ textAlign: "center" }}>Редактировать профиль</h2>}
        <UserAvatar />
        <GridColumn>
          <Gap>
            <DefaultInput labelText={"Контактное лицо *"} placeholder={"Имя"} />
            <DefaultSelect
              title={"Местоположение *"}
              placeholder={"Выберите город"}
              mockData={country}
            />
            <DefaultSelect title={"Район *"} placeholder={"Выберите район"} mockData={rayon} />
            <DefaultInput
              labelText={"Точное название улицы*"}
              placeholder={"Напишите название вашей улицы"}
            />

            <DubleInput>
              <DefaultInput labelText={"Номер дома"} placeholder={"№ дома"} />
              <DefaultInput labelText={"Номер квартиры"} placeholder={"№ кВ"} />
            </DubleInput>
          </Gap>
          <Gap>
            <DefaultInput labelText={"Номер телефона *"} placeholder={"+7 777 777 77 77"} />
            <DefaultInput labelText={"Почтовый адрес *"} placeholder={"tudasuda@gmail.com"} />
            <DefaultInput labelText={"ИИН"} placeholder={"Введите ИИН"} />
            <DefaultInput
              labelText={"Номер удостоверения личности"}
              placeholder={"Введите номер удостоверения личности"}
            />
            <DefaultInput labelText={"Кем выдано"} placeholder={"Кем выдано"} />
            <DubleInput>
              <DefaultInput labelText={"Номер дома"} placeholder={"№ дома"} />
              <DefaultInput labelText={"Номер квартиры"} placeholder={"№ кВ"} />
            </DubleInput>
          </Gap>
        </GridColumn>
        <FlexOnlyCenter>
          {deviceType !== "mobile" ? (
            <DefaultBtn text={"Сохранить"} />
          ) : (
            <ButtonAbsolute imgVisible={false} position={"fixed"}>
              <UIBtn text={"Сохранить"} />
            </ButtonAbsolute>
          )}
        </FlexOnlyCenter>
      </UIContentWrapper>
    </Wrapper>
  );
};
