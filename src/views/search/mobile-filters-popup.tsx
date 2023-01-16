import styled from "styled-components";
import { UIMobileWrapperTitle } from "../../components/header/mobileHeader";
import { UIBtn } from "../../global-style/style-variables";
import {
  DefaultCheckBox,
  DefaultInput,
  DefaultSelect,
  UIBackToPage,
  UiMobWrapper,
} from "../../global-style/UI-kit";
import { ButtonAbsolute } from "../authorization/mobile-footer-btn";
import { DubleInput } from "../create-ad";

const Wrapper = styled.div`
  height: 100vh;
  background: var(--default-yellow);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200000;
  width: 100%;
  padding: 18px 6px;
`;

const CheckBoxWrapper = styled.div`
  margin: 16px 0px;
`;

const Sorting = styled.div`
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #868686;
    margin-bottom: 8px;
  }
`;

const SortingButton = styled.button<{ isActive?: boolean }>`
  font-weight: 500;
  padding: 4px 8px;
  font-size: 10px;
  line-height: 13px;
  background: ${({ isActive }) => (isActive ? "var(--default-yellow)" : "#e7e7e7")};
  border-radius: 20px;
`;

const SortingWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const SubTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #868686;
  margin: 16px 0px 8px;
`;

export const MobileFiltersPopUp = () => {
  return (
    <Wrapper>
      <UIBackToPage href={"/"} text={"Вернуться на главную "} />
      <UiMobWrapper minHeight={"80vh"}>
        <UIMobileWrapperTitle text={"Создать объявление"} />
        <DefaultSelect title={"Категория"} placeholder={"Категория / Подкатегория"} />
        <SubTitle>Цена</SubTitle>
        <DubleInput marginT={"8px"}>
          <DefaultInput labelText={"От:"} />
          <DefaultInput labelText={"До:"} />
        </DubleInput>
        <CheckBoxWrapper>
          <DefaultCheckBox labelText={"Цена"} />
          <DefaultCheckBox labelText={"Бесплатно"} />
          <DefaultCheckBox labelText={"Обмен"} />
        </CheckBoxWrapper>
        <Sorting>
          <p>Сортировка</p>
          <SortingWrapper>
            <SortingButton isActive>Самые догорогие</SortingButton>
            <SortingButton>Самые дешевые</SortingButton>
            <SortingButton>Самые новые</SortingButton>
            <SortingButton>Рекомендованные</SortingButton>
            <SortingButton>Отдам даром</SortingButton>
          </SortingWrapper>
        </Sorting>
        <Sorting>
          <p>Частное лицо / Бизнес</p>
          <SortingWrapper>
            <SortingButton isActive>Все объявления</SortingButton>
            <SortingButton>Бизнес</SortingButton>
            <SortingButton>Частные</SortingButton>
          </SortingWrapper>
        </Sorting>
      </UiMobWrapper>
      <ButtonAbsolute imgVisible={false}>
        <UIBtn text={"Показать результаты"} />
      </ButtonAbsolute>
    </Wrapper>
  );
};
