import { useState } from "react";
import styled from "styled-components";
import { CloseSvg } from "../views/main/svg";
import { media } from "../global-style";
import { UIBackToPage } from "../global-style/UI-kit";

const PopUpOverlay = styled.div`
  ${media.mobile} {
    max-width: 560px;
    background-color: #fdce05;
  }
  position: fixed;
  overflow-y: auto;
  background-color: #00000065;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 500;
`;

const PopUpBody = styled.div`
  ${media.mobile} {
    max-width: 560px;
    border-radius: 30px;
  }
  position: absolute;
  border-radius: 100px;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 863px;
  height: fit-content;
  background-color: white;
  z-index: 1000;

  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
`;

const CloseIconBox = styled.div`
  ${media.mobile} {
    display: none;
  }
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 60px;
  margin-top: 40px;
  cursor: pointer;
`;

const PopUpContent = styled.div``;

const ShowMobile = styled.div`
  ${media.mobile} {
    display: block;
  }
  display: none;
`;

export const PopUpWrapper = ({ children, handleClick }: any) => {
  return (
    <>
      <PopUpOverlay>
        <UIBackToPage href="/" text={"Вернуться к объявлению"} />
        <ShowMobile></ShowMobile>

        <PopUpBody>
          <CloseIconBox onClick={handleClick}>
            <CloseSvg />
          </CloseIconBox>
          <PopUpContent>{children}</PopUpContent>
        </PopUpBody>
      </PopUpOverlay>
    </>
  );
};
