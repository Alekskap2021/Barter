import styled from "styled-components";
import { UIBtn } from "../../../global-style/style-variables";
import { DefaultInput } from "../../../global-style/UI-kit";
import { ButtonAbsolute } from "../../authorization/mobile-footer-btn";
import { ContetWrapperTitle } from "./settings";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  padding: 8px;
  border-radius: 100px;
  div:nth-child(3) {
    margin-top: 16px;
  }
`;

export const ChangeEmail = () => {
  return (
    <>
      <Wrapper>
        <ContetWrapperTitle>Изменить e-mail</ContetWrapperTitle>
        <DefaultInput labelText={" Текущий e-mail"} placeholder={"tudasuda@gmail.com"} />
        <DefaultInput labelText={"Новый e-mail"} placeholder={"tudasuda@gmail.com"} />
        <ButtonAbsolute imgVisible={false} bottom={"-73px"}>
          <UIBtn text={"Сохранить"} />
        </ButtonAbsolute>
      </Wrapper>
    </>
  );
};
