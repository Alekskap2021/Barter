import styled from "styled-components";
import { UIBackToPage } from "../../global-style/UI-kit";
import { CloseSvg, FilterSvg } from "../main/svg";

const Wrapper = styled.div``;

const Button = styled.button`
  border: 2px solid #fdce05;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 30px;
  background: white;
  padding: 8.5px 16px;
  white-space: nowrap;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-right: 8px;
  }
  svg:first-child {
    margin-left: 6px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin-left: -20px;
  margin-right: -20px;
  overflow-x: scroll;
  padding: 16px 20px 19px;
  button:first-child {
    svg {
      margin-left: unset;
      margin-right: 6px;
    }
  }
`;

const Air = styled.div``;

export const MobileSearchFooter = ({ handleClick }) => {
  return (
    <>
      <Wrapper>
        <ButtonsWrapper>
          <Button onClick={handleClick}>
            <FilterSvg /> Фильтры
          </Button>
          <Button>
            Тест тестовый
            <CloseSvg />
          </Button>
          <Button>
            Тест тестовый <CloseSvg />
          </Button>
          <Button>
            Тест тестовый
            <CloseSvg />
          </Button>
          <Button>
            Тест тестовый
            <CloseSvg />
          </Button>
        </ButtonsWrapper>

        <UIBackToPage href={"/"} text={"Вернуться на главную "} color={"white"} marginB={"0px"} />
      </Wrapper>
      <Air></Air>
    </>
  );
};
