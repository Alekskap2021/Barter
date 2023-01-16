import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { AliCenter, DefaultWrapper, JC_SB } from "../../../global-style/style-variables";
import { DefaultBtn, UIBackToPage, UIContentWrapper } from "../../../global-style/UI-kit";
import { ContetWrapperTitle } from "../../profile/popups/settings";
import {
  BlockSvg,
  ClipFileSvg,
  ImgIconSvg,
  MessegeCheckSvg,
  ReportFlagSvg,
  TrashCanSvg,
} from "./icons";

import userAvatar from "./userAvatar.png";

import defaultImg from "../../main/images-default/default-1.png";
import Link from "next/link";
import { media } from "../../../global-style";

const UserInfo = styled(JC_SB)`
  padding-bottom: 8px;
  border-bottom: 1px solid #e7e7e7;
`;

const Flex = styled(AliCenter)`
  position: relative;
`;

const ImageWrapper = styled.div`
  margin-right: 15px;
`;
// user
const UserText = styled.div``;

const UserSettingsHidden = styled.div<{ show?: boolean }>`
  position: absolute;
  width: 70%;
  background: white;
  right: 0;
  transition: 500ms;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0px 6px 18px 8px rgb(156 156 156 / 25%), -4px 4px 16px rgb(172 172 172 / 15%),
    4px 4px 16px rgb(172 172 172 / 15%);
  transform-origin: top right;
  ${({ show }) => (show ? " transform: scale(1)" : " transform: scale(0)")};
`;

const UserSettings = styled.div`
  svg {
    /* width: 19px; */
    margin-right: 12px;
  }
`;

const UserSettingsItem = styled(AliCenter)`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #80808057;
  svg {
    width: 19px;
  }
`;

const UserProduct = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #80808057;
  display: flex;
  align-items: center;
  img {
    border-radius: 5px;
    margin-right: 10px;
    max-width: 75px;
  }
  h3 {
  }
`;
// message
const MessageContent = styled.div`
  height: 200px;
`;

const MessageWrapper = styled.div<{ Me?: any }>`
  text-align: ${({ Me }) => (Me ? "left" : "right")};
  margin-top: 10px;
  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    width: fit-content;
    margin-left: ${({ Me }) => (Me ? "inherit" : "auto")};
    padding: 8px 16px;
    background: ${({ Me }) => (Me ? "#FDCE054D" : "#fdce05")};
    margin-bottom: 10px;
    border-radius: 100px;
    svg {
      margin-left: 10px;
    }
    ${({ Me }) => (Me ? "svg {display: none;}" : "auto")}
  }
`;
const MessageDate = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  color: #868686;
`;

// message end

const Wrapper = styled.div`
  padding: 8px;
  background: white;
  box-shadow: 0px 6px 18px 8px rgb(156 156 156 / 25%), -4px 4px 16px rgb(172 172 172 / 15%),
    4px 4px 16px rgb(172 172 172 / 15%);
  position: relative;
  border-radius: 20px;
  min-height: 74vh;
  display: flex;
  flex-direction: column;
`;

const SendSmsWrapper = styled(AliCenter)`
  padding: 10px 0px;
  margin-top: auto;
  gap: 10px;
  border-top: 1px solid #80808057;
  button {
    padding: 10px 20px;
    margin-left: auto;
  }

  ${media.mobile} {
    button {
      display: none;
    }
  }
`;

const SendInput = styled.input``;

const MT = styled.div`
  margin-top: 10px;
`;

const WrapperMain = styled(DefaultWrapper)`
  min-height: 100vh;
`;

const SendMessageSvg = styled.div`
  width: 28px;
  height: 28px;
  background: #b4b3b3;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-left: auto;
  display: none;

  svg {
    width: 13px;
  }
  ${media.mobile} {
    display: flex;
  }
`;

export const DialogMobilePage = () => {
  const [settingShow, SetsettingShow] = useState(false);

  return (
    <>
      <WrapperMain>
        <MT>
          <UIBackToPage href="/my-announcements/chat" text={"Вернуться к сообщениям"} />
        </MT>
        <Wrapper>
          <UserInfo>
            <Flex>
              <ImageWrapper>
                <Image alt="" src={userAvatar} />
              </ImageWrapper>
              <UserText>
                <h3>Юлия</h3>
                <p>Онлайн в 15:20</p>
              </UserText>
            </Flex>
            <UserSettings>
              <svg
                onClick={() => {
                  SetsettingShow(!settingShow);
                }}
                width="10"
                height="57"
                viewBox="0 0 15 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="7.5" fill="#E7E7E7" />
                <circle cx="7.5" cy="28.5" r="7.5" fill="#E7E7E7" />
                <circle cx="7.5" cy="49.5" r="7.5" fill="#E7E7E7" />
              </svg>
              <UserSettingsHidden show={settingShow}>
                <UserSettingsItem>
                  <BlockSvg />В блок
                </UserSettingsItem>
                <UserSettingsItem>
                  <ReportFlagSvg />
                  Пожаловаться
                </UserSettingsItem>
                <UserSettingsItem>
                  <TrashCanSvg />
                  Удалить
                </UserSettingsItem>
              </UserSettingsHidden>
            </UserSettings>
          </UserInfo>
          <Link href="/card-page">
            <UserProduct>
              <img src={defaultImg.src} alt="" />
              <div>
                <p>Книги Л.Н. Толстого 4 тома, 2 книги Абая К.</p>
                <b>25.000 ₸</b>
              </div>
            </UserProduct>
          </Link>
          <MessageContent>
            <MessageWrapper>
              <p>
                Здравствуйте, объявление еще актуально? <MessegeCheckSvg />
              </p>
              <MessageDate>17:25</MessageDate>
            </MessageWrapper>
            <MessageWrapper Me>
              <p>
                Здравствуйте, да
                <MessegeCheckSvg />
              </p>
              <MessageDate>17:35</MessageDate>
            </MessageWrapper>
          </MessageContent>
          <SendSmsWrapper>
            <ImgIconSvg />
            <ClipFileSvg />
            <SendInput placeholder={"Напишите сообщение ..."} />
            <DefaultBtn border={"1px solid black"} background={"transparent"} text={"Отправить"} />

            <SendMessageSvg>
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
              >
                <g>
                  <path
                    d="M10,980.5l98.6-438.2l584.7-48.5l0.1-5.9l-583.6-32.7L23,19.5l967,467.4L10,980.5z"
                    fill="white"
                  />
                </g>
              </svg>
            </SendMessageSvg>

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
              <path
                d="M66.964 134.874s-32.08-10.062-51.344-16.002c-17.542-6.693-1.57-14.928 6.015-17.59 7.585-2.66 186.38-71.948 194.94-75.233 8.94-4.147 19.884-.35 14.767 18.656-4.416 20.407-30.166 142.874-33.827 158.812-3.66 15.937-18.447 6.844-18.447 6.844l-83.21-61.442z"
                fill="none"
                stroke="#000"
                stroke-width="10"
              />
              <path
                d="M92.412 201.62s4.295.56 8.83-3.702c4.536-4.26 26.303-25.603 26.303-25.603"
                fill="none"
                stroke="#000"
                stroke-width="10"
              />
              <path
                d="M66.985 134.887l28.922 14.082-3.488 52.65s-4.928.843-6.25-3.613c-1.323-4.455-19.185-63.12-19.185-63.12z"
                fill-rule="evenodd"
                stroke="#000"
                stroke-width="10"
                stroke-linejoin="bevel"
              />
              <path
                d="M66.985 134.887s127.637-77.45 120.09-71.138c-7.55 6.312-91.168 85.22-91.168 85.22z"
                fill-rule="evenodd"
                stroke="#000"
                stroke-width="9.67"
                stroke-linejoin="bevel"
              />
            </svg> */}
          </SendSmsWrapper>
        </Wrapper>
      </WrapperMain>
    </>
  );
};
