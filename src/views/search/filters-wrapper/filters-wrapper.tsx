import styled from "styled-components";
import { media } from "../../../global-style";
import { JC_SB } from "../../../global-style/style-variables";
import { FiltersItemsWrapper } from "./filters-items-wrapper";
import { Selections } from "./selections-wrapper";

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
  h2 {
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 20px;
  }
  ${media.mobile} {
    background: transparent;
    box-shadow: unset;
    margin-top: unset;
    padding: unset;
    margin-top: 91px;
    padding-bottom: 120px;
  }
`;

export const FiltersWrapper = ({ deviceType }) => {
  return (
    <Wrapper>
      {deviceType !== "mobile" && <h2>Фильтры</h2>}
      {deviceType !== "mobile" && <Selections />}
      <FiltersItemsWrapper deviceType={deviceType} />
    </Wrapper>
  );
};
