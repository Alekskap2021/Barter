import styled from "styled-components";
import { FlexOnlyCenter } from "../../global-style/style-variables";
import MFooterBg from "./img/Mobile-footer-background.svg";

export const Wrapper = styled.div`
  background: #fdce05;
  padding: 70px 40px 98px;
  border-radius: 0px 0px 100px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-flow: column;
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #505050;
    margin-bottom: 20px;
  }
  img:first-child {
    margin-right: 20px;
  }
`;

export const Link = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #868686;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Flex = styled.div`
  display: flex;
  a {
    :first-child {
      margin-right: 15px;
    }
  }
`;

export const MobileWrapper = styled.div`
  width: 100%;
  bottom: 0;
  position: fixed;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background: (${MFooterBg});
`;
export const LinkDefault = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #868686;
  p {
  }
`;

export const Adding = styled(FlexOnlyCenter)`
  width: 60px;
  height: 60px;
  position: absolute;
  border-radius: 50%;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  background: var(--default-yellow);
  box-shadow: 0px 0px 13px 2px rgba(0, 0, 0, 0.25);
  span {
    display: block;
    width: 28px;
    border-radius: 6px;
    position: absolute;
    height: 3px;
    background: white;
    :first-child {
      height: 28px;
      width: 3px;
    }
  }
`;

export const WrapperBg = styled.div`
  z-index: -1;
  width: 100%;
  position: absolute;
  left: 0;
  height: 100%;
  bottom: 0;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LinkText = styled.p<{ isActive?: boolean }>`
  margin-top: 7px;
  color: ${({ isActive }) => (isActive ? "#FDCE05" : "#868686")};
  border-bottom: 2px solid ${({ isActive }) => (isActive ? "#FDCE05" : "transparent")};
`;
