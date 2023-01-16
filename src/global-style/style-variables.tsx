import Link from "next/link";
import styled from "styled-components";
import { media } from ".";

import defaultBackground from "../public/assets/images/backgrounds/default-background.jpg";

export const Container = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  ${media.mobile} {
    /* padding: 0px 16px; */
  }
`;

export const DefaultBackground = styled.div`
  background: center / cover repeat-y url(${defaultBackground.src});
  /* padding-bottom: 84px; */
`;

export const FlexCenter = (data: any) => {
  return data`
  display: flex;
  align-items: center;
`;
};

export const FlexOnlyCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AliCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const JC_SB = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Flex = styled.div`
  display: flex;
`;

const UiBtn = styled.button<{
  background?: any;
  border?: any;
  margin?: any;
  color?: any;
}>`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  padding: 13px 0px;
  color: ${({ color }) => (color ? color : "black")};
  box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.25);
  border-radius: 53px;
  width: 100%;
  background: ${({ background }) => (background ? background : "var(--default-yellow)")};
  border: ${({ border }) => border};
  margin: ${({ margin }) => margin};
  transition: 300ms linear;
  :hover {
    box-shadow: unset;
  }
`;

export const UIBtn = ({ text, background, border, margin, link = "", color, handleClick }: any) => {
  return (
    <Link legacyBehavior href={link}>
      <UiBtn
        margin={margin}
        border={border}
        background={background}
        color={color}
        onClick={handleClick}
      >
        {text}
      </UiBtn>
    </Link>
  );
};

export const DefaultWrapper = styled.div`
  background: #fdce05;
  padding: 20px 20px;
  ${media.mobile} {
    padding: 1px 8px;
    min-height: calc(100vh - 85px);
  }
`;
