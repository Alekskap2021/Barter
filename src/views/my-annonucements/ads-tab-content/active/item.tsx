import Image from "next/image";
import styled from "styled-components";
import { PenSvg, UpSvg, RocketSvg } from "../../../../components/default-svg";
import { MessageSvg } from "../../../../components/header/img";
import { JC_SB, AliCenter } from "../../../../global-style/style-variables";
import { DefaultCheckBox } from "../../../../global-style/UI-kit";
import { EyeSvg } from "../../../card-page/mobile/svg";
import { HeartSvg } from "../../../main/svg";
import { TrashCanSvg } from "../../chat/icons";

import defaultImg from "../../../main/images-default/default-1.png";

const ItemWrapper = styled.div`
  background: #ffffff;
  box-shadow: -5px -6px 18px 8px rgba(156, 156, 156, 0.25),
    5px 6px 18px 8px rgba(156, 156, 156, 0.25);
  border-radius: 20px;
  padding: 20px;
`;

const ItemFooter = styled(JC_SB)`
  padding-top: 20px;
  border-top: 1px solid #e7e7e7;
`;

const ItemBody = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;

const ImgWrapper = styled.div`
  position: relative;
  height: 193px;
  max-width: 240px;
  margin-right: 20px;
`;

const ItemText = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
`;
const ItemTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
`;

const ItemCategory = styled.div``;

const ItemDate = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const ItemLocation = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  span {
    font-weight: 600;
  }
`;

const ItemStatistics = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const ItemPrice = styled.b`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
`;
const ItemStatisticsInfo = styled.div`
  display: flex;
  gap: 32px;
`;

const ItemStatisticsItem = styled(AliCenter)`
  display: flex;
  color: #868686;
  cursor: pointer;
  svg {
    margin-right: 8px;
    width: 21px;
    height: 21px;
  }
`;

const Item_JC_SB = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const AdsTabActiveItem = ({ upBtn }: any) => {
  return (
    <ItemWrapper>
      <ItemBody>
        <ImgWrapper>
          <Image alt="" src={defaultImg} />
        </ImgWrapper>

        <Item_JC_SB>
          <ItemText>
            <ItemTitle>Книги Л.Н. Толстого 4 тома, 2 книги Абая К.</ItemTitle>
            <ItemCategory>Категория: Книги / Досуг</ItemCategory>
            <ItemLocation>
              Алматы, Медеуский район / Сегодня <span>12:04</span>
            </ItemLocation>
            <ItemDate>18.03.2022 - 17.04.2022</ItemDate>
            <DefaultCheckBox marginB={"0px"} labelText={"Автопродление"} />
          </ItemText>
          <ItemStatistics>
            <ItemPrice>25.000 ₸</ItemPrice>
            <ItemStatisticsInfo>
              <ItemStatisticsItem>
                <EyeSvg />
                <p>120</p>
              </ItemStatisticsItem>
              <ItemStatisticsItem>
                <HeartSvg />
                <p>120</p>
              </ItemStatisticsItem>
              <ItemStatisticsItem>
                <MessageSvg />
                <p>120</p>
              </ItemStatisticsItem>
            </ItemStatisticsInfo>
          </ItemStatistics>
        </Item_JC_SB>
      </ItemBody>
      <ItemFooter>
        <DefaultCheckBox marginB={"0px"} labelText={"Товар по умалчанию"} />
        <ItemStatisticsInfo>
          <ItemStatisticsItem>
            <PenSvg />
            <p>Редактировать</p>
          </ItemStatisticsItem>
          <ItemStatisticsItem onClick={upBtn}>
            <UpSvg />
            <p>Поднять</p>
          </ItemStatisticsItem>
          <ItemStatisticsItem>
            <RocketSvg />
            <p>Рекламировать</p>
          </ItemStatisticsItem>
          <ItemStatisticsItem>
            <TrashCanSvg />
            <p>Удалить</p>
          </ItemStatisticsItem>
        </ItemStatisticsInfo>
      </ItemFooter>
    </ItemWrapper>
  );
};
