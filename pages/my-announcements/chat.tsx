import styled from "styled-components";
import DefaultPageBlocks from "../../src/components/default-page-blocks";
import { UIBackToPage } from "../../src/global-style/UI-kit";
import { MyAnnonucementsPage } from "../../src/views/my-annonucements";
import { Chat } from "../../src/views/my-annonucements/chat/chat-page";

// Временно тут
const BackToPageUrlWrapper = styled.div`
  padding-top: 10px;
`;

const ChatPage = ({ deviceType }) => {
  return (
    <>
      <DefaultPageBlocks isActive={"Сообщения"} deviceType={deviceType}>
        {deviceType === "mobile" && (
          <BackToPageUrlWrapper>
            <UIBackToPage href="/" text="Вернуться к объявлению" />
          </BackToPageUrlWrapper>
        )}

        <MyAnnonucementsPage
          tabActive={"3"}
          deviceType={deviceType}
          tabContent={<Chat deviceType={deviceType} />}
        />
      </DefaultPageBlocks>
    </>
  );
};

export async function getServerSideProps(context) {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
  );

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
    },
  };
}

export default ChatPage;
