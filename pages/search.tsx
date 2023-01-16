import Head from "next/head";
import { useState } from "react";
import { Footer } from "../src/components/footer/footer";
import { Header } from "../src/components/header/desktopHeader";
import { MobileFooter } from "../src/components/footer/mobile-footer";
import { MobileSearch } from "../src/components/header/mobileHeader";

import { DefaultBackground } from "../src/global-style/style-variables";
import { SearchPage } from "../src/views/search";
import { MobileFiltersPopUp } from "../src/views/search/mobile-filters-popup";
import { MobileSearchFooter } from "../src/views/search/mobile-search-footer";

const Search = ({ deviceType }) => {
  const [mobileFilterShow, setMobileFilterShow] = useState(false);

  const ToggleMobileFilterPopUp = () => {
    setMobileFilterShow(!mobileFilterShow);
  };

  return (
    <>
      <Head>
        <title>Поиск</title>
      </Head>
      {deviceType !== "mobile" ? (
        <Header />
      ) : (
        <MobileSearch>
          <MobileSearchFooter handleClick={ToggleMobileFilterPopUp} />
        </MobileSearch>
      )}
      <DefaultBackground>
        <SearchPage deviceType={deviceType} />
        {deviceType !== "mobile" ? <Footer /> : <MobileFooter isActive={"Главная"} />}
      </DefaultBackground>
      {mobileFilterShow && <MobileFiltersPopUp />}
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

export default Search;
