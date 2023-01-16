import DefaultPageBlocks from "../../../src/components/default-page-blocks";
import { MyAnnonucementsPage } from "../../../src/views/my-annonucements";
import { TradeOffersTabWait } from "../../../src/views/my-annonucements/trade-tab-content/wait";

const TradeWait = () => {
  return (
    <>
      <DefaultPageBlocks>
        <MyAnnonucementsPage tabActive={"2"} tabContent={<TradeOffersTabWait />} />
      </DefaultPageBlocks>
    </>
  );
};

export default TradeWait;
