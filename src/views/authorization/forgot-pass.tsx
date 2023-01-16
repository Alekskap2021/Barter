import styled from "styled-components";
import { LeftArrowSvg } from "../../components/default-svg";
import { media } from "../../global-style";
import { UIBtn } from "../../global-style/style-variables";
import { Labels } from "./label";
import { ButtonAbsolute } from "./mobile-footer-btn";

const Back = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  color: #373538;
  svg {
    margin-right: 20px;
  }
`;

const Wrapper = styled.div`
  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    margin: 36px 0px 30px;
  }
  p {
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    margin-bottom: 42px;
  }
  ${media.mobile} {
    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 20px;
      letter-spacing: 0.02em;
    }
    p {
      text-align: center;
    }
  }
`;

export const ForgotPass = ({ BackClick }) => {
  return (
    <Wrapper>
      <Back onClick={BackClick}>
        <LeftArrowSvg />
        Вернуться
      </Back>
      <h1>Забыли пароль ?</h1>
      <p>
        Введите ваш email или номер телефона, и мы вышлем вам код подтверждения. Вы сможете
        установить новый пароль после ввода этого кода
      </p>
      <Labels
        type={"text"}
        id={"email"}
        placeholder={"Введите email или номер телефона"}
        labelText={"Введите email или номер телефона"}
      />
      {/* <ButtonAbsolute>
        
      </ButtonAbsolute> */}
      <ButtonAbsolute>
        <UIBtn text={"Отправить код"} />
      </ButtonAbsolute>
    </Wrapper>
  );
};
