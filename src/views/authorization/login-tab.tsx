import axios from "axios";
import Link from "next/link";
import router from "next/router";
import { MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { media } from "../../global-style";
import { UIBtn } from "../../global-style/style-variables";
import { AuthApi } from "../../http";
import { setProfileData } from "../../store/slices/user";
import { CheckBox } from "./checkbox";
import { Labels } from "./label";
import { ButtonAbsolute } from "./mobile-footer-btn";

const Wrapper = styled.form`
  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #868686;
    text-align: center;
    cursor: pointer;
    margin: 30px 0px 16px;
    ${media.mobile} {
      margin: 8px 0px 24px;
    }
  }
`;

const Error = styled.div<{ isActive?: boolean }>`
  color: red;
  margin-top: -15px;
  margin-bottom: 15px;
  font-size: 13px;
  ${({ isActive }) => (isActive ? "display:block" : "display:none")}
`;

export const inputValue = (e, data, setData) => {
  let name = e.target.name;
  setData({
    ...data,
    [name]: e.target.value,
  });
  console.log(data);
};

export const setValue = (data, setData) => {
  return (e) => {
    let name = e.target.name;
    setData({
      ...data,
      [name]: e.target.value,
    });
    console.log(data);
  };
};

export const LogIn = ({ passPageShow, deviceType }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const login = () => {
    if (checked === 2) {
      AuthApi(loginData, "login")
        .then((resp) => {
          console.log(resp);
          if (resp.data.error) {
            alert("Вы ввели неправильный пароль");
          } else {
            deviceType !== "mobile" ? router.push("/") : router.push("/profile");
            dispatch(
              setProfileData({
                isLoggedIn: true,
              })
            );
          }
        })
        .catch((err) => alert("Логин или пароль не совпадают"));
    } else {
      setError(true);
    }
  };

  const [loginData, setloginData] = useState<any>({
    email: "",
    password: "",
  });

  const LoginValue = setValue(loginData, setloginData);

  const [checked, setChecked] = useState(0);

  return (
    <Wrapper action="">
      <Labels
        name={"email"}
        handleChange={LoginValue}
        type={"text"}
        id={"email"}
        placeholder={"Введите email или номер телефона"}
        labelText={"Укажите email или номер телефона"}
      />
      <Labels
        name={"password"}
        type={"password"}
        handleChange={LoginValue}
        id={"Пароль"}
        placeholder={"Введите пароль"}
        labelText={"Пароль"}
      />

      <p onClick={passPageShow}>Забыли пароль?</p>
      <CheckBox
        handleClick={(e) => {
          e.target.checked === true ? setChecked((e) => ++e) : setChecked((e) => --e);
        }}
        labelText={"Соглашаюсь с условиями Политики конфиденциальности"}
      />
      <CheckBox
        handleClick={(e) => {
          e.target.checked === true ? setChecked((e) => ++e) : setChecked((e) => --e);
        }}
        labelText={"Я не робот"}
      />
      <Error isActive={error}>Пожалуйста подтвердите все пункты</Error>
      <ButtonAbsolute>
        <UIBtn handleClick={login} text={"Войти"} />
      </ButtonAbsolute>
    </Wrapper>
  );
};
