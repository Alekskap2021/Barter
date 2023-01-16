import { Footer } from "../src/components/footer/footer";
import { Header } from "../src/components/header/desktopHeader";
import { MobileFooter } from "../src/components/footer/mobile-footer";
import { DefaultBackground } from "../src/global-style/style-variables";
import { CreateAdPage } from "../src/views/create-ad";
import { FavouriteAdsPage } from "../src/views/favouriteAds/FavouriteAds";

const FavouriteAds = ({ deviceType }) => {
  return (
    <>
      {deviceType !== "mobile" && <Header />}
      <DefaultBackground>
        <FavouriteAdsPage deviceType={deviceType} />
        {deviceType !== "mobile" ? <Footer /> : <MobileFooter isActive={"Избранные"} />}
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
export default FavouriteAds;
