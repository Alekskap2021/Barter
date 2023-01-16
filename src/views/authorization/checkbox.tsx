import styled from "styled-components";
import { media } from "../../global-style";

const Label = styled.label<{ for?: any }>`
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  margin-left: 8px;
  color: #373538;
  cursor: pointer;
  margin-bottom: 17px;
  ${media.mobile} {
    margin-bottom: 14px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const CheckBoxVivible = styled.label<{ for?: any }>`
  min-width: 18px;
  cursor: pointer;
  min-height: 18px;
  border: 3px solid gray;
  position: relative;
  svg {
    opacity: 0;
    transition: 300ms;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
const CheckBlock = styled.input`
  appearance: none;
  :checked ~ ${CheckBoxVivible} svg {
    opacity: 1;
  }
  :checked ~ ${CheckBoxVivible} {
    border: unset;
  }
`;

export const CheckBox = ({ labelText, handleClick }: any) => {
  return (
    <Wrapper>
      <CheckBlock onClick={handleClick} id={labelText} type="checkbox" />
      <CheckBoxVivible for={labelText}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5417 0.875H3.45833C2.0375 0.875 0.875 2.0375 0.875 3.45833V21.5417C0.875 22.9625 2.0375 24.125 3.45833 24.125H21.5417C22.9625 24.125 24.125 22.9625 24.125 21.5417V3.45833C24.125 2.0375 22.9625 0.875 21.5417 0.875ZM10.8337 18.0413C10.33 18.545 9.51625 18.545 9.0125 18.0413L4.37542 13.4042C3.87167 12.9004 3.87167 12.0867 4.37542 11.5829C4.87917 11.0792 5.69292 11.0792 6.19667 11.5829L9.91667 15.3029L18.8033 6.41625C19.3071 5.9125 20.1208 5.9125 20.6246 6.41625C21.1283 6.92 21.1283 7.73375 20.6246 8.2375L10.8337 18.0413V18.0413Z"
            fill="#FDCE05"
          />
        </svg>
      </CheckBoxVivible>
      <Label for={labelText}>{labelText} </Label>
    </Wrapper>
  );
};
