import styled from "styled-components";
import { Flex } from "../../../global-style/style-variables";

const DefaultStyleSelect = (data) => {
  return data`
    background: #e7e7e7;
    border-radius: 48px;
    padding: 14px 20px;
    margin-top: 8px;
    `;
};

const PriceInput = styled(DefaultStyleSelect(styled.input))``;

const PriceInputWrapper = styled(Flex)`
  input:first-child {
    margin-right: 20px;
  }
`;

export const SelectionPrice = () => {
  return (
    <div>
      <p>Цена</p>
      <PriceInputWrapper>
        <PriceInput placeholder={"От:"} />
        <PriceInput placeholder={"До:"} />
      </PriceInputWrapper>
    </div>
  );
};
