import styled from "styled-components";

import googleImg from "./mobile-footer-img/gog.png";
import facebookImg from "./mobile-footer-img/fac.png";
import { media } from "../../global-style";

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  img {
    width: 32px;
    height: 32px;
    display: none;
  }
  ${media.mobile} {
    img {
      display: block;
    }
  }
`;

const Line = styled.div`
  width: 1px;
  background: #868686;
  margin: 5px 16px;
`;

export const Wrapper = styled.div<{ position?: any; bottom?: any }>`
  ${media.mobile} {
    position: ${({ position }) => (position ? position : "absolute")};
    width: 100%;
    left: 0;
    bottom: ${({ bottom }) => (bottom ? bottom : "30px")};
  }
`;

export const ButtonAbsolute = ({ children, position, imgVisible = true, bottom }: any) => {
  return (
    <Wrapper bottom={bottom} position={position}>
      {imgVisible && (
        <ImgWrapper>
          <img src={googleImg.src} alt="" />
          <Line />
          <img src={facebookImg.src} alt="" />
        </ImgWrapper>
      )}
      {children}
    </Wrapper>
  );
};
