import styled from "styled-components";
import { ContetWrapperTitle } from "./settings";
import { DefaultInput } from "../../../global-style/UI-kit";
import { ButtonAbsolute } from "../../authorization/mobile-footer-btn";
import { UIBtn } from "../../../global-style/style-variables";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 8px;
  background: white;
  border-radius: 100px;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  margin-top: 15px;
`;

export const ChangePassword = () => {
  return (
    <>
      <Wrapper>
        <ContetWrapperTitle>Изменить пароль</ContetWrapperTitle>
        <InputWrapper>
          <DefaultInput
            type={"password"}
            labelText={"  Текущий пароль"}
            placeholder={"***********"}
          />
          <DefaultInput type={"password"} labelText={"Новый пароль"} placeholder={"***********"} />
          <DefaultInput
            type={"password"}
            labelText={"Подтвердите новый пароль"}
            placeholder={"***********"}
          />
        </InputWrapper>
        <ButtonAbsolute imgVisible={false} bottom={"-73px"}>
          <UIBtn text={"Сохранить"} />
        </ButtonAbsolute>
      </Wrapper>
    </>
  );
};
