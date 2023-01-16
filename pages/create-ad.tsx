import Head from "next/head";
import { Header } from "../src/components/header/desktopHeader";
import { DefaultBackground } from "../src/global-style/style-variables";
import { CreateAdPage } from "../src/views/create-ad";

const CreateAd = ({ deviceType }) => {
  return (
    <>
      <Head>
        <title>Создать объявление</title>
      </Head>
      {deviceType !== "mobile" && <Header />}
      <DefaultBackground>
        <CreateAdPage deviceType={deviceType} />
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

export default CreateAd;
