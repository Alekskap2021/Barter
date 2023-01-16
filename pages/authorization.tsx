import Head from "next/head";
import { Header } from "../src/components/header/desktopHeader";

import { DefaultBackground } from "../src/global-style/style-variables";
import { AuthorizationPage } from "../src/views/authorization";

const Authorization = ({ deviceType }) => {
  return (
    <>
      <Head>
        <title>Авторизация</title>
      </Head>
      {deviceType !== "mobile" && <Header />}
      <DefaultBackground>
        <AuthorizationPage deviceType={deviceType} />
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

export default Authorization;
