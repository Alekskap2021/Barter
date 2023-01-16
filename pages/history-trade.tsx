import Head from "next/head";
import { Footer } from "../src/components/footer/footer";
import { Header } from "../src/components/header/desktopHeader";
import { MobileFooter } from "../src/components/footer/mobile-footer";
import { MobileSearch } from "../src/components/header/mobileHeader";
import { DefaultBackground } from "../src/global-style/style-variables";
import { Notification } from "../src/views/notifications";

const HistoryTrade = ({ deviceType }) => {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Tuda - Suda / Туда - сюда</title>
      </Head>
      {/* Head */}

      {deviceType !== "mobile" ? <Header /> : <MobileSearch />}
      <DefaultBackground>
        <Notification deviceType={deviceType} />
        {deviceType !== "mobile" ? <Footer /> : <MobileFooter isActive={"Главная"} />}
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

export default HistoryTrade;
