import DefaultPageBlocks from "../src/components/default-page-blocks";
import { MyAnnonucementsPage } from "../src/views/my-annonucements";

const MyAnnonucements = ({ deviceType }) => {
  return (
    <DefaultPageBlocks deviceType={deviceType}>
      <MyAnnonucementsPage deviceType={deviceType} />
    </DefaultPageBlocks>
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

export default MyAnnonucements;
