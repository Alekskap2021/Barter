import styled from "styled-components";
import DefaultPageBlocks from "../../../src/components/default-page-blocks";
import { UIBackToPage } from "../../../src/global-style/UI-kit";
import { MyAnnonucementsPage } from "../../../src/views/my-annonucements";
import { TabContentActive } from "../../../src/views/my-annonucements/ads-tab-content/active";

// Временно тут

const AdsActiveTab = ({ deviceType }) => {
  return (
    <>
      <DefaultPageBlocks deviceType={deviceType}>
        <MyAnnonucementsPage tabActive={"1"} tabContent={<TabContentActive />} />
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

export default AdsActiveTab;
