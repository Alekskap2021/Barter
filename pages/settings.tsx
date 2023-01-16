import Head from "next/head";
import { Footer } from "../src/components/footer/footer";
import { Header } from "../src/components/header/desktopHeader";
import { MobileFooter } from "../src/components/footer/mobile-footer";
import { MobileSearch } from "../src/components/header/mobileHeader";
import { Container, DefaultBackground, DefaultWrapper } from "../src/global-style/style-variables";
import { SettingsPage } from "../src/views/settings";

const Settings = ({ deviceType }) => {
  return (
    <>
      <Head>
        <title>Настройки</title>
      </Head>
      {deviceType !== "mobile" && <Header />}
      <DefaultBackground>
        <Container>
          <DefaultWrapper>
            <SettingsPage deviceType={deviceType} />
          </DefaultWrapper>
        </Container>
        {deviceType !== "mobile" && <Footer />}
      </DefaultBackground>
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

export default Settings;
