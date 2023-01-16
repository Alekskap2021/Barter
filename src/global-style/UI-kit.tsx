import Link from "next/link";
import styled from "styled-components";
import { media } from ".";
import { CheckBoxCheckedSvg, EyeSvg, SelectArrowSvg } from "../components/default-svg";
import { ArrowLeft2Svg } from "../views/main/svg";

const DefaultInputLabel = styled.label`
  margin-bottom: 8px;
  color: #868686;
  ${media.mobile} {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
`;

const DefaultInputI = styled.input<{ placeholder?: any }>`
  background: #e7e7e7;
  border-radius: 48px;
  padding: 14px 20px;
  width: 100%;
`;

const DefaultInputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const DefaultInput = ({ labelText, placeholder, type = "text" }: any) => {
  return (
    <DefaultInputWrapper>
      <DefaultInputLabel>{labelText}</DefaultInputLabel>
      <DefaultInputI type={type} placeholder={placeholder} />
    </DefaultInputWrapper>
  );
};

const DefaultSelectWrapper = styled.div<{ marginG?: any; maxWidth?: any }>`
  margin: ${({ marginG }) => marginG};
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
`;

const DefaultSelectS = styled.select`
  background: #e7e7e7;
  border-radius: 48px;
  width: 100%;
  position: relative;
  padding: 14px 20px;
  appearance: none;
`;

const DefaultSelectTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 8px;
  color: #868686;
`;

const DefaultSelectArrow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    right: 20px;
  }
`;

export const DefaultSelect = ({ title, placeholder, marginG, maxWidth, mockData }: any) => {
  return (
    <DefaultSelectWrapper marginG={marginG} maxWidth={maxWidth}>
      <DefaultSelectTitle>{title}</DefaultSelectTitle>
      <DefaultSelectArrow>
        <DefaultSelectS>
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
          {mockData &&
            mockData.map((item, index) => {
              return <option key={index}>{item.title}</option>;
            })}
        </DefaultSelectS>
        <SelectArrowSvg />
      </DefaultSelectArrow>
    </DefaultSelectWrapper>
  );
};

const DefaultCheckBoxWrapper = styled.div<{ marginB?: any }>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ marginB }) => {
    return marginB ? marginB : "14px";
  }};
`;
const DefaultCheckBoxVivible = styled.label<{ for?: any }>`
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
const DefaultCheckBoxLabel = styled.label<{ for?: any; color?: any }>`
  font-weight: ${({ color }) => (color ? "700 " : "500")};
  font-size: 16px;
  line-height: 15px;
  margin-left: 8px;
  color: ${({ color }) => (color ? color : "#373538")};
  cursor: pointer;
  ${media.mobile} {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }
`;

const DefaultCheckBoxBlock = styled.input`
  appearance: none;
  :checked ~ ${DefaultCheckBoxVivible} svg {
    opacity: 1;
  }
  :checked ~ ${DefaultCheckBoxVivible} {
    border: unset;
  }
`;

export const DefaultCheckBox = ({ labelText, children, color, marginB }: any) => {
  return (
    <DefaultCheckBoxWrapper marginB={marginB}>
      <DefaultCheckBoxBlock id={labelText} type="checkbox" />
      <DefaultCheckBoxVivible for={labelText}>
        <CheckBoxCheckedSvg />
      </DefaultCheckBoxVivible>
      <DefaultCheckBoxLabel color={color} for={labelText}>
        {labelText}
        {children}
      </DefaultCheckBoxLabel>
    </DefaultCheckBoxWrapper>
  );
};

const UiBtn = styled.button<{
  background?: any;
  border?: any;
  color?: any;
  width?: any;
}>`
  font-weight: 600;
  font-size: 14px;
  min-width: ${({ width }) => (width ? width : "0")};
  line-height: 18px;
  padding: 13px 0px;
  box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.25);

  border-radius: 53px;
  width: 100%;
  background: ${({ background }) => (background ? background : "var(--default-yellow)")};
`;

const DefaultButton = styled.button<{
  background?: any;
  border?: any;
  color?: any;
}>`
  padding: 13px 15px;
  background: ${({ background }) => (background ? background : "var(--default-yellow)")};
  border: ${({ border }) => (border ? border : "none")};
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${({ color }) => (color ? color : "#373538")};
  border-radius: 53px;
  transition: 500ms;
  :hover {
    transform: scale(1.05);
  }
`;

export const DefaultBtn = ({ text, background, color, border = "2px solid transparent" }: any) => {
  return (
    <>
      <DefaultButton color={color} background={background} border={border}>
        {text}
      </DefaultButton>
    </>
  );
};

const UIContentWrapperS = styled.div`
  padding: 20px;
  background: white;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  position: relative;
  border-radius: 20px;
  ${media.mobile} {
    padding: 8px;
  }
`;

export const UIContentWrapper = ({ children }) => {
  return <UIContentWrapperS>{children}</UIContentWrapperS>;
};

export const UIGridColumn = styled.div<{ styles?: any }>`
  display: grid;
  gap: 60px;
  grid-template-columns: 1fr 1fr;
  ${({ styles }) => styles}

  ${media.mobile} {
    gap: unset;
    grid-template-columns: 1fr;
  }
`;

const UIBackToPageLink = styled.p<{ color?: any; marginB?: any }>`
  color: ${({ color }) => (color ? color : "black")};
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  margin-bottom: ${({ marginB }) => (marginB ? marginB : "16px")};
  svg {
    margin: 0px 9px;
  }
`;

export const UIBackToPage = ({ href, text, color, marginB }: any) => {
  return (
    <>
      <Link href={href}>
        <UIBackToPageLink color={color} marginB={marginB}>
          <ArrowLeft2Svg fill={color} />
          {text}
        </UIBackToPageLink>
      </Link>
    </>
  );
};

const UIChangeLangWrapper = styled.div`
  color: #868686;
  margin: 16px 0px;
  font-weight: 500;
  font-size: 10px;
  display: flex;
  line-height: 13px;
`;

const UIChangeLangBtn = styled.div<{ isActive?: any }>`
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
`;

export const UIChangeLang = () => {
  return (
    <UIChangeLangWrapper>
      Сменить язык:&nbsp;
      <UIChangeLangBtn>Каз /</UIChangeLangBtn>
      <UIChangeLangBtn isActive>&nbsp;Рус /</UIChangeLangBtn>
      <UIChangeLangBtn>&nbsp;Eng</UIChangeLangBtn>
    </UIChangeLangWrapper>
  );
};

const UiMobWrapperS = styled.div<{ minHeight?: any }>`
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 30px;
  padding: 8px;
  position: relative;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
`;

export const UiMobWrapper = ({ children, minHeight }: any) => {
  return <UiMobWrapperS minHeight={minHeight}>{children}</UiMobWrapperS>;
};
