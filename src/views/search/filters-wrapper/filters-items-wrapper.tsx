import styled from "styled-components";
import { media } from "../../../global-style";
import { FilterItem } from "./filter-item";

const Wrapper = styled.div`
  padding-top: 40px;
  ${media.mobile} {
    padding-top: 16px;
  }
`;

const FilterOverflow = styled.div`
  padding-top: 20px;
  max-height: 700px;
  overflow-y: scroll;
  margin-left: -20px;
  margin-right: -17px;
  padding: 20px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #868686;
    border-radius: 13px;
  }
  ${media.mobile} {
    background: #ffffff;
    box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
      4px 4px 16px rgba(172, 172, 172, 0.15);
    border-radius: 30px;
    margin-left: unset;
    margin-right: unset;
    padding: 16px;
    margin-top: 16px;
    ::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
  }
`;

const Title = styled.h3`
  ${media.mobile} {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const FiltersItemsWrapper = ({ deviceType }) => {
  return (
    <Wrapper>
      <Title>Мы нашли более 1 000 объявлений</Title>
      <FilterOverflow>
        <FilterItem deviceType={deviceType} />
        <FilterItem deviceType={deviceType} />
        <FilterItem deviceType={deviceType} />
        <FilterItem deviceType={deviceType} />
        <FilterItem deviceType={deviceType} />
        <FilterItem deviceType={deviceType} />
        <FilterItem deviceType={deviceType} />
        <FilterItem deviceType={deviceType} />
        <FilterItem deviceType={deviceType} />
      </FilterOverflow>
    </Wrapper>
  );
};
