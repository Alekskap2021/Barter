import Image from "next/image";
import styled from "styled-components";
import userAvatar from "./userAvatar.png";
import {
  ClipFileSvg,
  ImgIconSvg,
  ReportFlagSvg,
  BlockSvg,
  TrashCanSvg,
  MessegeCheckSvg,
} from "./icons";
import { mockSliderData } from "../../main/sliders/mockSliderData";
import { ChatMobilePage } from "./chatMobile-page";
import { DefaultBtn } from "../../../global-style/UI-kit";

const ChatWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 2fr;
  gap: 20px;
`;

const ChatsListHeader = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #e7e7e7;
`;

const ChatBox = styled.div<{ flex?: any; direction?: any }>`
  display: ${({ flex }) => flex};
  flex-direction: ${({ direction }) => direction};
  padding: 20px 29px;
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 20px;
`;

const ChatListTabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChatListHeaderTab = styled.button<{ isActive?: boolean }>`
  font-weight: ${({ isActive }) => (isActive ? 700 : 500)};
  font-size: 16px;
  line-height: 20px;
  border-bottom: ${({ isActive }) => (isActive ? "3px solid #fdce05" : "none")};
  padding: 10px;
  margin-right: 30px;
`;

const ChatListHeaderTrash = styled.div`
  color: #868686;
  font-weight: 500;
  font-size: 16px;
  border-left: 1px solid #e7e7e7;
  padding-left: 23px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 11px;
  }
`;

const ChatListItem = styled.div<{ isActive?: boolean }>`
  margin: 0px -29px;
  padding: 15px 29px;
  cursor: pointer;
  /* border-top: 1px solid #e7e7e7; */
  border-bottom: 1px solid #e7e7e7;
  background-color: ${({ isActive }) => (isActive ? " rgba(253, 206, 5, 0.2)" : "white")};
`;

const ChatListItemTitles = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #373538;
    margin-bottom: 5px;
  }
  p {
    font-weight: 500;
    color: #868686;
  }
`;

const ChatListItemUser = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
  }
  img {
  }
`;

const ChatBoxHeaderWrapper = styled.div`
  display: flex;
`;

const ChatBoxHeaderUser = styled.div`
  display: flex;

  h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 5px;
  }
  p {
    color: #868686;
  }
  .img-wrapper {
    min-width: 60px;
  }
  padding-bottom: 20px;
  border-bottom: 1px solid #e7e7e7;
`;

const ChatBoxHeaderUserInfo = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
`;

const ChatBoxHeaderBtns = styled.div`
  display: flex;
  justify-content: center;
`;
const ChatBoxHeaderButton = styled.div`
  cursor: pointer;
  color: #868686;
  font-weight: 500;
  font-size: 16px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`;

const ChatBoxHeaderProductBox = styled.div`
  padding-top: 10px;
  padding-bottom: 18px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
  img {
    border-radius: 5px;
  }
`;

const ChatBoxHeaderProductInfo = styled.div`
  margin-left: 10px;
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #373538;
  }
  h2 {
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: #373538;
  }
`;

const ChatBoxHeaderProductAddInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    text-align: right;
    color: #373538;
  }
  h2 {
    color: #868686;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
  }
`;

const ChatBoxHeaderInfoImg = styled.div`
  display: flex;
  align-items: center;
`;

const ChatBoxFooterInputBar = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #e7e7e7;
  svg {
    min-width: 19px;
    margin-right: 8px;
    cursor: pointer;
  }
  button {
    padding: 10px 20px;
  }
  margin-top: auto;
`;
const ChatBoxFooterInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  height: 100%;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
`;

// message

const MessageWrapper = styled.div<{ Me?: any }>`
  text-align: ${({ Me }) => (Me ? "left" : "right")};
  margin-top: 20px;
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

const AvatarImgWrapper = styled.div`
  width: 65px;
`;

// message end

export const Chat = ({ deviceType }: any) => {
  if (deviceType !== "mobile") {
    return (
      <>
        <ChatWrapper>
          <ChatBox>
            <ChatsListHeader>
              <ChatListTabsWrapper>
                <ChatListHeaderTab isActive>Покупаю</ChatListHeaderTab>
                <ChatListHeaderTab>Продаю</ChatListHeaderTab>
                <ChatListHeaderTrash>
                  <TrashCanSvg />
                  Корзина
                </ChatListHeaderTrash>
              </ChatListTabsWrapper>
            </ChatsListHeader>

            <ChatListItem isActive>
              <ChatListItemUser>
                <AvatarImgWrapper>
                  <Image alt="" src={userAvatar} />
                </AvatarImgWrapper>
                <p>Юлия</p>
              </ChatListItemUser>
              <ChatListItemTitles>
                <h2>Книги Л.Н. Толстого 4 тома, 2 книги Абая К.</h2>
                <p>Здравствуйте, да, актуально</p>
              </ChatListItemTitles>
            </ChatListItem>
            <ChatListItem>
              <ChatListItemUser>
                <AvatarImgWrapper>
                  <Image alt="" src={userAvatar} />
                </AvatarImgWrapper>
                <p>Юлия</p>
              </ChatListItemUser>
              <ChatListItemTitles>
                <h2>Книги Л.Н. Толстого 4 тома, 2 книги Абая К.</h2>
                <p>Здравствуйте, да, актуально</p>
              </ChatListItemTitles>
            </ChatListItem>
            <ChatListItem>
              <ChatListItemUser>
                <AvatarImgWrapper>
                  <Image alt="" src={userAvatar} />
                </AvatarImgWrapper>
                <p>Юлия</p>
              </ChatListItemUser>
              <ChatListItemTitles>
                <h2>Книги Л.Н. Толстого 4 тома, 2 книги Абая К.</h2>
                <p>Здравствуйте, да, актуально</p>
              </ChatListItemTitles>
            </ChatListItem>
          </ChatBox>
          {/* Правый блок */}
          <ChatBox flex={"flex"} direction={"column"}>
            <ChatBoxHeaderWrapper>
              {/* Блок юзера */}
              <ChatBoxHeaderUser>
                <Flex>
                  <div className="img-wrapper">
                    <Image alt="" src={userAvatar} />
                  </div>
                  <ChatBoxHeaderUserInfo>
                    <h2>Юлия</h2>
                    <p>
                      Онлайн в <b>15:20</b>
                    </p>
                  </ChatBoxHeaderUserInfo>
                </Flex>
                <ChatBoxHeaderBtns>
                  <ChatBoxHeaderButton>
                    <BlockSvg />В блок
                  </ChatBoxHeaderButton>
                  <ChatBoxHeaderButton>
                    <ReportFlagSvg />
                    Пожаловаться
                  </ChatBoxHeaderButton>
                  <ChatBoxHeaderButton>
                    <TrashCanSvg />
                    Удалить
                  </ChatBoxHeaderButton>
                </ChatBoxHeaderBtns>
              </ChatBoxHeaderUser>
              {/* Блок юзера */}
            </ChatBoxHeaderWrapper>

            <ChatBoxHeaderProductBox>
              <ChatBoxHeaderInfoImg>
                <AvatarImgWrapper>
                  <Image alt="" height={52} width={65} src={mockSliderData[0].img} />
                </AvatarImgWrapper>
                <ChatBoxHeaderProductInfo>
                  <p>Книги Л.Н. Толстого 4 тома, 2 книги Абая К.</p>
                  <h2>25.000 ₸ </h2>
                </ChatBoxHeaderProductInfo>
              </ChatBoxHeaderInfoImg>
              <ChatBoxHeaderProductAddInfo>
                <h2>ID: 123454321</h2>
                <p>14 сентября</p>
              </ChatBoxHeaderProductAddInfo>
            </ChatBoxHeaderProductBox>
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
            <ChatBoxFooterInputBar>
              <ImgIconSvg />
              <ClipFileSvg />
              <ChatBoxFooterInput placeholder="Напишите сообщение..." />
              <DefaultBtn
                border={"1px solid black"}
                background={"transparent"}
                text={"Отправить"}
              />
            </ChatBoxFooterInputBar>
          </ChatBox>
        </ChatWrapper>
      </>
    );
  } else
    return (
      <>
        <ChatMobilePage />
      </>
    );
};
