import styled from "styled-components";
import headerBg from "../../public/assets/images/backgrounds/header-bg.png";
import { FlexCenter } from "../../global-style/style-variables";
import { media } from "../../global-style";
import Background from "../../public/assets/images/backgrounds/mobile-search-bg.png";

export const Wrapper = styled.div`
  padding: 25px 0px;
  background: center / cover no-repeat url(${headerBg.src});
`;

export const UrlBase = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border: 2px solid #fdce05;
  border-radius: 53px;
  background: white;
  position: relative;
  transition: 500ms;
  color: var(--default-black);
  svg {
    margin-right: 10px;
  }
  :hover {
    background: var(--default-yellow);
  }
`;

export const UrlPrimary = styled(UrlBase)`
  background: #fdce05;
  transition: 500ms linear;
  box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.25);
  :hover {
    box-shadow: unset;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  div,
  a {
    cursor: pointer;
  }
`;

export const Lang = styled(FlexCenter(styled.div))`
  p {
    margin: 0px 16px 0px 10px;
  }
`;

export const LCPopUp = styled.div<{ isActive?: boolean }>`
  z-index: 100;
  min-width: 213px;
  max-width: 213px;
  position: absolute;
  background: white;
  bottom: -20px;
  right: 0;
  left: 50%;
  transition: 500ms;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 8px;
  ${({ isActive }) => {
    return isActive
      ? "opacity: 0;visibility: hidden;  transform: translate(-50%,110%) "
      : "opacity: 1; visibility: visible;  transform: translate(-50%,100%)";
  }}
`;

export const LCUser = styled(FlexCenter(styled.div))`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  padding: 15px;
`;
export const LCLinkWrapper = styled.div`
  padding: 0px 15px;
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  &:last-child {
    margin-top: 59px;
    margin-bottom: 5px;
  }
  p {
    padding: 10px 0px;
    border-top: 1px solid #e7e7e7;
  }
`;

// Страницы в будущем уберется

export const PPopUp = styled.div<{ isActive?: boolean }>`
  z-index: 100;
  min-width: 213px;
  max-width: 213px;
  position: absolute;
  background: white;
  bottom: -20px;
  right: 0;
  left: 50%;
  transition: 500ms;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 8px;
  ${({ isActive }) => {
    return isActive
      ? "opacity: 0;visibility: hidden;  transform: translate(-50%,110%) "
      : "opacity: 1; visibility: visible;  transform: translate(-50%,100%)";
  }}
`;

export const LCLinkWrapperDuplicate = styled.div`
  padding: 0px 15px;
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  a {
    padding: 10px 0px;
    display: inline-block;
    border-top: 1px solid #e7e7e7;
    width: 100%;
  }
`;

export const UrlAbsolute = styled.div`
  position: absolute;
  ${PPopUp} {
    transform: translate(-111%, 97%);
  }
`;
// Страницы конец

//mobile
export const MobileWrapper = styled.div`
  padding: 15px 16px 24px;
  /* background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3)
  ); */
  background: center / cover no-repeat url(${Background.src});
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  ${media.mobile} {
    overflow: hidden;
  }
`;

export const InputWrapper = styled.div`
  background: #ffffff;
  border: 2px solid #fdce05;
  border-radius: 48px;
  display: flex;
  overflow: hidden;
`;

export const Input = styled.input`
  padding: 12px 16px;
  width: 100%;
  border: unset;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--default-black);
  }
`;

export const Button = styled.div`
  border-radius: 50%;
  min-width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  background: var(--default-yellow);
  svg {
    width: 18.5px;
    height: 18.96px;
  }
`;

export const Padding = styled.div`
  height: 85px;
`;
