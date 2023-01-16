import styled from "styled-components";
import { media } from "../../global-style";

const LabelInput = styled.input`
  background: #e7e7e7;
  border-radius: 48px;
  padding: 14px 20px;
  width: 100%;
  margin-top: 8px;
  ${media.mobile} {
    padding: 12px 16px;
  }
`;

const Label = styled.label<{ for: any }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #868686;
  cursor: pointer;
  ${media.mobile} {
    font-size: 12px;
    line-height: 15px;
  }
`;

const Wrapper = styled.div`
  :not(:last-child) {
    margin-bottom: 30px;
    ${media.mobile} {
      margin-bottom: 17px;
    }
  }
`;

export const Labels = ({ placeholder, labelText, id, type, handleChange, name }: any) => {
  return (
    <Wrapper>
      <Label for={id}>{labelText}</Label>
      <LabelInput
        name={name}
        onChange={handleChange}
        type={type}
        id={id}
        placeholder={placeholder}
      ></LabelInput>
    </Wrapper>
  );
};
