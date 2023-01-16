import Head from "next/head";
import { Footer } from "../src/components/footer/footer";
import { Header } from "../src/components/header/desktopHeader";
import { DefaultBackground, UIBtn } from "../src/global-style/style-variables";
import { ButtonAbsolute } from "../src/views/authorization/mobile-footer-btn";
import ItemCardPage from "../src/views/card-page/card-page";
import { CardPageMobile } from "../src/views/card-page/mobile";

const CardPage = ({ deviceType }) => {
  return (
    <>
      <Head>
        <title>Создать объявление</title>
      </Head>
      {deviceType !== "mobile" && <Header />}
      <DefaultBackground>
        {deviceType !== "mobile" ? <ItemCardPage deviceType={deviceType} /> : <CardPageMobile />}
        {deviceType !== "mobile" ? (
          <Footer />
        ) : (
          <ButtonAbsolute position={"fixed"} imgVisible={false}>
            <UIBtn link={"/card-page/trade"} text={"Предложить обмен"} margin={"8px 0px"} />
            <UIBtn
              link={"/card-page/trade"}
              background={"white"}
              text={"Купить"}
              border={" 2px solid #FDCE05;"}
            />
          </ButtonAbsolute>
        )}
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

export default CardPage;
