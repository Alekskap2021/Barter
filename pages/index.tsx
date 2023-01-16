import Head from "next/head";
import { Footer } from "../src/components/footer/footer";
import { Header } from "../src/components/header/desktopHeader";
import { MobileFooter } from "../src/components/footer/mobile-footer";
import { MobileSearch } from "../src/components/header/mobileHeader";
import { DefaultBackground } from "../src/global-style/style-variables";
import { Main } from "../src/views/main";

function App({ deviceType, product }) {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Tuda - Suda / Туда - сюда</title>
      </Head>
      {/* Head */}
      {deviceType !== "mobile" ? <Header /> : <MobileSearch />}
      <DefaultBackground>
        <Main product={product} deviceType={deviceType} />
        {deviceType !== "mobile" ? <Footer /> : <MobileFooter isActive={"Главная"} />}
      </DefaultBackground>
    </>
  );
}

export async function getServerSideProps(context) {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
  );

  const res = await fetch(`http://barter.a-lux.dev/api/products`);
  const product = await res.json();

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
      product,
    },
  };
}

export default App;
