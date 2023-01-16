import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { ArrowRightSvg } from "../../components/default-svg";

import userAvatar from "../my-annonucements/chat/userAvatar.png";
import { SettingsPopUp } from "./popups/settings";

const Wrapper = styled.div`
  background: var(--default-yellow);
  min-height: 100vh;
  padding-bottom: 100px;
`;

const ContentWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 30px;
  padding: 20px;
`;

const User = styled.div``;
const UserCircle = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  border-radius: 50%;
  background: gray;
`;
const UserName = styled.h2`
  font-weight: 600;
  margin-bottom: 6px;
  font-size: 18px;
  line-height: 23px;
`;

const UserBalance = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #868686;
  }
`;

const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  padding: 13px 0px;
  text-align: center;
  border: 2px solid #fdce05;
  filter: drop-shadow(4px 4px 13px rgba(74, 74, 74, 0.25));
  border-radius: 53px;
  width: 100%;
  margin: 20px 0px 24px;
`;

const LogInBtn = styled(Button)`
  border: 2px solid black;
`;

const InfoTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
`;

const InfoWrapper = styled.div`
  :not(:nth-child(3)) {
    margin-top: 32px;
  }
`;

export const LinkItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0px;
  border-bottom: 1px solid #e7e7e7;
  b {
    font-weight: 600;
  }
`;

export const ProfilePage = () => {
  const [PopUpShow, setPopUpShow] = useState(false);

  const togglePopUp = () => {
    setPopUpShow(!PopUpShow);
    SetcontentPopUpShow(false);
    let footer = document.querySelector(".mobile-footer__Wrapper-sc-1nzsuq4-0 ") as HTMLElement;
    footer.style.display = "flex";
  };

  const [contentPopUpShow, SetcontentPopUpShow] = useState(false);

  return (
    <Wrapper>
      <ContentWrapper>
        <User>
          <UserCircle>
            <Image alt="" src={userAvatar} />
          </UserCircle>
          <UserName>Привет, Юлия!</UserName>
          <UserBalance>
            <p>Ваш кошелёк: 0.00</p>
            <svg
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2132 22.1005C25.1184 18.1952 25.1184 11.8636 21.2132 7.95835C17.308 4.05311 10.9763 4.05311 7.07107 7.95835C3.16582 11.8636 3.16582 18.1952 7.07107 22.1005C10.9763 26.0057 17.308 26.0057 21.2132 22.1005Z"
                stroke="#868686"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.9692 10.7574V19.2426"
                stroke="#868686"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.72656 15H18.2118"
                stroke="#868686"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </UserBalance>
        </User>
        <Link href="/create-ad">
          <Button>Создать объявление</Button>
        </Link>

        <InfoWrapper>
          <InfoTitle>Мои объявления</InfoTitle>
          <Link href="/my-announcements/ads/active-mobile">
            <LinkItem>
              <p>
                Неоплаченные / <b>2</b>
              </p>
              <ArrowRightSvg />
            </LinkItem>
          </Link>
          <Link href="/my-announcements/ads/active-mobile">
            <LinkItem>
              <p>
                Активные / <b>3</b>
              </p>
              <ArrowRightSvg />
            </LinkItem>
          </Link>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>Предложения об обмене</InfoTitle>
          <Link href="/my-announcements/trade/trade-wait-mobile">
            <LinkItem>
              <p>
                Активные / <b>12</b>
              </p>
              <ArrowRightSvg />
            </LinkItem>
          </Link>
          <Link href="/my-announcements/trade/trade-wait-mobile">
            <LinkItem>
              <p>
                Ожидающие / <b>1</b>
              </p>
              <ArrowRightSvg />
            </LinkItem>
          </Link>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>Настройки и другое</InfoTitle>

          <LinkItem onClick={togglePopUp}>
            <p>Настройки</p>
            <ArrowRightSvg />
          </LinkItem>

          <LinkItem>
            <p>Помощь</p>
            <ArrowRightSvg />
          </LinkItem>
          <LinkItem>
            <p>Условия использования</p>
            <ArrowRightSvg />
          </LinkItem>
        </InfoWrapper>
        <Link href="/">
          <LogInBtn>Выйти</LogInBtn>
        </Link>
      </ContentWrapper>
      <SettingsPopUp
        show={PopUpShow}
        closePopUp={togglePopUp}
        showPopUp={contentPopUpShow}
        ChangePopUp={SetcontentPopUpShow}
      />
    </Wrapper>
  );
};
