import { useState } from "react";
import styled from "styled-components";
import { MoneySvg } from "../../components/default-svg";
import { PopUpWrapper } from "../../components/popUp";
import { AliCenter, JC_SB } from "../../global-style/style-variables";
import { TabContentActive } from "./ads-tab-content/active";
import { PopUpReklama } from "./ads-tab-content/active-popup/reklama";
import { HeaderNavigation } from "./header-navigation";
import { PromoteAd } from "./pop-up/promoteAd";
import { PopUpMoney } from "./popup-money";
import { TabBlock } from "./tab-block";

const Balance = styled.div``;

export const TopUp = styled(AliCenter)`
  padding: 13px 15px;
  cursor: pointer;
  border: 2px solid #373538;
  border-radius: 53px;
  margin-left: 30px;
  svg {
    margin-right: 15px;
  }
`;

export const MyAnnonucementsPage = ({ tabContent, deviceType, tabActive }: any) => {
  return (
    <>
      {deviceType !== "mobile" && (
        <>
          <JC_SB>
            <h2>Мои объявление</h2>
            <AliCenter>
              <Balance>Баланс: 0 ₸</Balance>
              <TopUp>
                <MoneySvg />
                Пополнить счет
              </TopUp>
            </AliCenter>
          </JC_SB>
          <HeaderNavigation tabActive={tabActive} />
          {/* <PopUpWrapper children={<PopUpMoney />} /> */}
        </>
      )}
      <TabBlock tabContent={tabContent} />

      {/* <PromoteAd/> */}
    </>
  );
};
