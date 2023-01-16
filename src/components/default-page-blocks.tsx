import { DefaultBackground, Container, DefaultWrapper } from "../global-style/style-variables";
import { Footer } from "./footer/footer";
import { Header } from "./header/desktopHeader";
import { MobileFooter } from "./footer/mobile-footer";
import { MobileSearch } from "./header/mobileHeader";

const DefaultPageBlocks = ({ deviceType, children, isActive }: any) => {
  return (
    <>
      {deviceType !== "mobile" ? <Header /> : <MobileSearch />}
      <DefaultBackground>
        <Container>
          <DefaultWrapper>{children}</DefaultWrapper>
        </Container>
        {deviceType !== "mobile" ? <Footer /> : <MobileFooter isActive={isActive} />}
      </DefaultBackground>
    </>
  );
};

export default DefaultPageBlocks;
