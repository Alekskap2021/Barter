import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { media } from "../../global-style";
import { Container, FlexOnlyCenter } from "../../global-style/style-variables";
import { CloseSvg } from "../main/svg";
import { ForgotPass } from "./forgot-pass";
import { LogIn } from "./login-tab";
import { RegistrationTab } from "./registration";
import { Tabs } from "./tabs";

const Wrapper = styled(FlexOnlyCenter)`
  height: calc(100vh - 98px);
  background: var(--default-yellow);
  ${media.mobile} {
    height: 100vh;
    position: relative;
  }
`;

const Good = styled.p`
  text-align: center;
  margin-bottom: 32px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.02em;
  line-height: 20px;
`;

const ChangeWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 32px 20px;
  background: white;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 20px;
  margin: 0 auto;
  ${media.mobile} {
    padding: 24px 8px;
  }
`;

function TabsPage({ passPageShow, deviceType }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 1 ? (
        <LogIn deviceType={deviceType} passPageShow={passPageShow} />
      ) : (
        <RegistrationTab />
      )}
    </>
  );
}

const Close = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
`;

const ContainerMobilePadding = styled(Container)`
  ${media.mobile} {
    padding: 0px 16px;
    position: relative;
    background: var(--default-yellow);
  }
`;

export const AuthorizationPage = ({ deviceType }) => {
  const [passPageShow, setPassPage] = useState(true);

  const togglePage = () => {
    setPassPage(!passPageShow);
  };

  return (
    <ContainerMobilePadding>
      <Wrapper>
        {deviceType === "mobile" && (
          <Link href="/">
            <Close>
              <CloseSvg size={"15px"} />
            </Close>
          </Link>
        )}
        <ChangeWrapper>
          {deviceType === "mobile" && passPageShow === true && <Good>ДОБРО ПОЖАЛОВАТЬ!</Good>}
          {passPageShow ? (
            <TabsPage deviceType={deviceType} passPageShow={togglePage} />
          ) : (
            <ForgotPass BackClick={togglePage} />
          )}
        </ChangeWrapper>
      </Wrapper>
    </ContainerMobilePadding>
  );
};
