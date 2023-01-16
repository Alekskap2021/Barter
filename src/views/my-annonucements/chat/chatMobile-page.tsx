import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { media } from "../../../global-style";
import userAvatar from "./userAvatar.png";
import { AliCenter } from "../../../global-style/style-variables";
import Image from "next/image";

const SubTitle = styled.div<{ isSelected?: boolean }>`
  display: flex;
  width: 100%;
  font-weight: ${(props) => (props.isSelected ? 400 : 700)};
  font-size: 20px;
  line-height: 25px;
  color: #373538;
  border-bottom: ${(props) => (props.isSelected ? "none" : "3px solid #373538")};
  padding-right: 10px;
  padding-left: 10px;
  cursor: pointer;

  ${media.mobile} {
    text-align: center;
    display: flex;
    justify-content: center;
    padding-bottom: 4px;
    font-size: 14px;
    line-height: 18px;
    border-bottom: ${(props) => (props.isSelected ? "1px solid" : "3px solid #373538")};
  }
`;

const Tabs = styled.div`
  display: flex;
  ${media.mobile} {
    padding: 0px 24px;
  }
`;

const PageTitle = styled.h2`
  margin-bottom: 16px;
  ${media.mobile} {
    text-align: center;
  }
`;

const ChatMessageBox = styled.div`
  display: flex;
  padding: 16px 0px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
`;

const ChatMessageBoxUserAvatar = styled.div`
  width: 48px;
  height: 48px;
`;
const ChatMessageBoxContent = styled(AliCenter)``;

const ChatMessageBoxDate = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

const ChatMessageTextContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 60%;
  line-height: 18px;
  margin-left: 10px;
`;

const chatMessageMockData = {
  name: "Юлия",
  adDate: "14.09",
  adName: "Книги Л.Н. Толстого 4 тома, 2 книги Абая К.",
  messageText: "Здравствуйте, да, актуально",
  img: userAvatar,
};

const ChatMessageName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

const ChatMessageBook = styled.h2`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  margin: 2px 0px;
`;

const ChatMessageSms = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #868686;
`;
const ChatDate = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #868686;
  line-height: 18px;
`;

const ChatMessageBoxComp = (data: any) => {
  return (
    <ChatMessageBox>
      <ChatMessageBoxContent>
        <ChatMessageBoxUserAvatar>
          <Image alt="" src={data.img} />
        </ChatMessageBoxUserAvatar>
        <ChatMessageTextContent>
          <ChatMessageName>{data.name}</ChatMessageName>
          <ChatMessageBook>{data.adName}</ChatMessageBook>
          <ChatMessageSms>{data.messageText}</ChatMessageSms>
        </ChatMessageTextContent>
      </ChatMessageBoxContent>
      <ChatDate>14.09</ChatDate>
    </ChatMessageBox>
  );
};

export const ChatMobilePage = ({ deviceType }: any) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <PageTitle>Сообщения</PageTitle>
      <Tabs>
        <SubTitle isSelected={isSelected} onClick={() => setIsSelected(!isSelected)}>
          Прочитанные
        </SubTitle>
        <SubTitle isSelected={!isSelected} onClick={() => setIsSelected(!isSelected)}>
          Непрочитанные
        </SubTitle>
      </Tabs>
      <Link href="/my-announcements/chat/dialog-mobile">
        <ChatMessageBoxComp {...chatMessageMockData} />
      </Link>
      <Link href="/my-announcements/chat/dialog-mobile">
        <ChatMessageBoxComp {...chatMessageMockData} />
      </Link>{" "}
      <Link href="/my-announcements/chat/dialog-mobile">
        <ChatMessageBoxComp {...chatMessageMockData} />
      </Link>
    </>
  );
};
