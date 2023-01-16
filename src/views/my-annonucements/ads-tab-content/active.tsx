import { useState } from "react";
import styled from "styled-components";
import { PopUpWrapper } from "../../../components/popUp";

import { DefaultCheckBox, DefaultSelect } from "../../../global-style/UI-kit";
import { PopUpReklama } from "./active-popup/reklama";
import { data1 } from "../../search/filters-wrapper/selections-wrapper";
import { TabNav } from "../tab-block";
import { AdsTabActiveItem } from "./active/item";

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 63px;
  margin-bottom: 20px;
`;

const ItemWrapper = styled.div`
  display: grid;
  gap: 20px;
`;

const Count = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-top: 30px;
  b {
    font-weight: 600;
  }
`;

export const TabContentActive = () => {
  const [reklamaShow, setReklamaShow] = useState(false);

  return (
    <>
      <TabNav tabActive={"1"} />
      <Flex>
        <DefaultSelect
          maxWidth={"440px"}
          title={"Выберите категорию"}
          placeholder={"Выберите категорию"}
          mockData={data1}
        />
        <DefaultCheckBox marginB={"8px"} labelText={"Рекламируемые объявления"} />
      </Flex>
      <ItemWrapper>
        <AdsTabActiveItem
          upBtn={() => {
            setReklamaShow(!reklamaShow);
          }}
        />
        <AdsTabActiveItem
          upBtn={() => {
            setReklamaShow(!reklamaShow);
          }}
        />
        <AdsTabActiveItem
          upBtn={() => {
            setReklamaShow(!reklamaShow);
          }}
        />
      </ItemWrapper>
      {reklamaShow && (
        <PopUpWrapper
          handleClick={() => {
            setReklamaShow(!reklamaShow);
          }}
        >
          <PopUpReklama />
        </PopUpWrapper>
      )}
      <Count>
        Всего <b>3</b> объявления
      </Count>
    </>
  );
};
