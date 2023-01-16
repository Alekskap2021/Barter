import styled from "styled-components";
import { OfferTitle, SubText } from "./active";

const OfferInfoDetails = styled.div`
  padding-left: 5px;
`;

const OfferInfo = styled.div``;

export const Information = () => {
  return (
    <OfferInfo>
      <OfferTitle>Информация:</OfferTitle>
      <OfferInfoDetails>
        <SubText>
          <b> Имя: </b>Олег Иванов
        </SubText>
        <SubText>
          <b> Комментарий:</b> Прелагаю обменяться мебелью, высокое качество
        </SubText>
        <SubText>
          <b>Доплата:</b> Готов доплатить 5.000 ₸
        </SubText>
      </OfferInfoDetails>
    </OfferInfo>
  );
};
