import axios from "axios";
import router from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { UIBtn } from "../../global-style/style-variables";
import { AuthApi } from "../../http";
import { setProfileData } from "../../store/slices/user";
import { CheckBox } from "./checkbox";
import { Labels } from "./label";
import { setValue } from "./login-tab";
import { ButtonAbsolute } from "./mobile-footer-btn";

export const Error = styled.div<{ isActive?: boolean }>`
  color: red;
  margin-top: -15px;
  margin-bottom: 15px;
  font-size: 13px;
  ${({ isActive }) => (isActive ? "display:block" : "display:none")}
`;

export const RegistrationTab = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const register = () => {
    let input = document.querySelectorAll(`input`)[1];
    if (input.value.length < 8) {
      setError(true);
    } else if (checked < 2) {
      setError(false);
      setError2(true);
    } else {
      setError2(false);
      setError(false);
      AuthApi(loginData, "register")
        .then((resp) => {
          console.log(resp);
          router.push("/");
          dispatch(
            setProfileData({
              isLoggedIn: true,
            })
          );
        })
        .catch((err) => console.log(err));
    }
  };

  const [loginData, setloginData] = useState<any>({
    email: "",
    password: "",
    consent_agreed: 1,
  });

  let LoginValue = setValue(loginData, setloginData);

  const [checked, setChecked] = useState(0);
  const [error2, setError2] = useState(false);
  return (
    <>
      <Labels
        handleChange={LoginValue}
        name={"email"}
        type={"text"}
        id={"Укажите email или номер телефона"}
        placeholder={"Укажите email или номер телефона"}
        labelText={"Укажите email или номер телефона"}
      />
      <Labels
        handleChange={LoginValue}
        name={"password"}
        type={"password"}
        id={"Пароль"}
        placeholder={"Введите пароль"}
        labelText={"Пароль"}
      />
      <Error isActive={error}>Длина пароля не может быть меньше 8</Error>
      <CheckBox
        handleClick={(e) => {
          e.target.checked === true ? setChecked((e) => ++e) : setChecked((e) => --e);
        }}
        labelText={
          "Я соглашаюсь с правилами использования сервиса, а также с передачей и обработкой моих данных в OLX.kz. Я подтверждаю своё совершеннолетие и ответственность за размещение объявления"
        }
      />

      <CheckBox
        labelText={"Я не робот"}
        handleClick={(e) => {
          e.target.checked === true ? setChecked((e) => ++e) : setChecked((e) => --e);
        }}
      />
      {console.log(checked)}
      <Error isActive={error2}>Пожалуйста подтвердите все пункты</Error>
      <ButtonAbsolute>
        <UIBtn text={"Регистрация"} handleClick={register} />
      </ButtonAbsolute>
    </>
  );
};
