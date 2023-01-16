import styled from "styled-components";
import { SearchInputs } from "../../components/search-inputs";
import { Container, DefaultWrapper } from "../../global-style/style-variables";
import { CheckBoxSearch } from "./checkbox";
import { FiltersWrapper } from "./filters-wrapper/filters-wrapper";

const CheckBoxWrapper = styled.div`
  display: flex;
  div:first-child {
    margin-right: 40px;
  }
`;

export const SearchPage = ({ deviceType }) => {
  return (
    <>
      <Container>
        <DefaultWrapper>
          {deviceType !== "mobile" && <SearchInputs marginB={"20px"} not_first={false} />}
          {deviceType !== "mobile" && (
            <CheckBoxWrapper>
              <CheckBoxSearch text={"Искать в описании"} />
              <CheckBoxSearch text={"Только с фото"} />
            </CheckBoxWrapper>
          )}
          <FiltersWrapper deviceType={deviceType} />
        </DefaultWrapper>
      </Container>
    </>
  );
};
