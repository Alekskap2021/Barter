import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { LinkItem } from "..";
import { ArrowRightSvg } from "../../../components/default-svg";
import { UIBackToPage, UiMobWrapper } from "../../../global-style/UI-kit";
import { ArrowLeft2Svg } from "../../main/svg";
import { ChangeEmail } from "./change-email";
import { ChangePassword } from "./change-password";

const Wrapper = styled.div<{ show?: any }>`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 8px;

  background: var(--default-yellow);
  ${({ show }) =>
    show
      ? "  visibility: visible;  transform: scale(1);   transition: 300ms;"
      : " visibility: hidden;   transform: scale(0.9); opacity: 0;"};
`;
const ClosePopUp = styled.p`
  color: black;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  margin-bottom: 16px;
  transition: 500ms;
  svg {
    margin: 0px 9px;
  }
`;

export const ContetWrapperTitle = styled.h2`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 9px;
`;

const LinkBox = ({
  href = "",
  text,
  popUpContent,
  setPopUpContent,
  ShowPopUp,
  ClickDisabled = true,
}: any) => {
  const Click = () => {
    if (ClickDisabled === true) {
      setPopUpContent(popUpContent);
      ShowPopUp(true);
      let footer = document.querySelector(".mobile-footer__Wrapper-sc-1nzsuq4-0 ") as HTMLElement;
      footer.style.display = "none";
    } else "";
  };
  return (
    <Link href={href}>
      <LinkItem onClick={Click}>
        {text}
        <ArrowRightSvg />
      </LinkItem>
    </Link>
  );
};

const PopUpContentWrapper = ({ child }) => {
  return <>{child}</>;
};

export const SettingsPopUp = ({ show, closePopUp, showPopUp, ChangePopUp }: any) => {
  const [popUpContent, setPopUpContent] = useState<any>(<ChangePassword />);

  return (
    <>
      <Wrapper show={show}>
        <ClosePopUp onClick={closePopUp}>
          <ArrowLeft2Svg /> Вернуться в профиль
        </ClosePopUp>

        <UiMobWrapper minHeight={"80vh"}>
          <ContetWrapperTitle>Настройки</ContetWrapperTitle>
          <LinkBox href={"/settings"} text={"Редактировать профиль"} ClickDisabled={false} />
          <LinkBox
            text={"Изменить пароль"}
            popUpContent={<ChangePassword />}
            ShowPopUp={ChangePopUp}
            setPopUpContent={setPopUpContent}
          />

          <LinkBox
            // handleClick={handleClick}
            popUpContent={<ChangeEmail />}
            text={"Изменить электронную почту"}
            setPopUpContent={setPopUpContent}
            ShowPopUp={ChangePopUp}
          />
          {showPopUp && <PopUpContentWrapper child={popUpContent} />}
        </UiMobWrapper>
      </Wrapper>
    </>
  );
};
