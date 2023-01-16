import DefaultPageBlocks from "../../../src/components/default-page-blocks";
import { MyAnnonucementsPage } from "../../../src/views/my-annonucements";
import { TradeOffersTaDontPay } from "../../../src/views/my-annonucements/trade-tab-content/dont-pay";

const TradeWait = () => {
  return (
    <>
      <DefaultPageBlocks>
        <MyAnnonucementsPage tabActive={"2"} tabContent={<TradeOffersTaDontPay />} />
      </DefaultPageBlocks>
    </>
  );
};

export default TradeWait;
