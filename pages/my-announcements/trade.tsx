import DefaultPageBlocks from "../../src/components/default-page-blocks";
import { MyAnnonucementsPage } from "../../src/views/my-annonucements";
import TradeOffersPage from "../../src/views/my-annonucements/trade-tab-content/active/active";

const TradePage = ({ deviceType }) => {
  return (
    <>
      <DefaultPageBlocks deviceType={deviceType}>
        <MyAnnonucementsPage tabActive={"2"} tabContent={<TradeOffersPage />} />
      </DefaultPageBlocks>
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

export default TradePage;
