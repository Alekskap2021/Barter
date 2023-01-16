import styled from "styled-components";
import { FHomeSvg, FHeartSvg, FMessageSvg, FUserSvg, FBackground } from "./img/mobile-footer-svg";
import { MobileWrapper, LinkDefault, Adding, WrapperBg, LinkText } from "./style";

import Link from "next/link";
import router from "next/router";
import { useProfile } from "../../store/hooks/useProfile";
import { useState } from "react";

export const MobileFooter = ({ isActive }: any) => {
  const { isLoggedIn, email, phone } = useProfile();

  const ToggleActive = () => {
    console.log(isLoggedIn);
    isLoggedIn ? router.push("/profile") : router.push("/authorization");
  };

  return (
    <MobileWrapper>
      <WrapperBg>
        <FBackground />
      </WrapperBg>
      <Link legacyBehavior href="/create-ad">
        <Adding>
          <span></span>
          <span></span>
        </Adding>
      </Link>
      <Link legacyBehavior href="/">
        <LinkDefault>
          <FHomeSvg fill={isActive === "Главная" ? true : false} />
          <LinkText isActive={isActive === "Главная"}>Главная</LinkText>
        </LinkDefault>
      </Link>
      <Link legacyBehavior href="/favourites">
        <LinkDefault>
          <FHeartSvg fill={isActive === "Избранные" ? true : false} />
          <LinkText isActive={isActive === "Избранные"}>Избранные</LinkText>
        </LinkDefault>
      </Link>
      <Link legacyBehavior href="/my-announcements/chat">
        <LinkDefault>
          <FMessageSvg fill={isActive === "Сообщения" ? true : false} />
          <LinkText isActive={isActive === "Сообщения"}>Сообщения</LinkText>
        </LinkDefault>
      </Link>
      <LinkDefault>
        <div onClick={ToggleActive}>
          <LinkDefault>
            <FUserSvg fill={isActive === "Профиль" ? true : false} />
            <LinkText isActive={isActive === "Профиль"}>Профиль</LinkText>
          </LinkDefault>
        </div>
      </LinkDefault>
    </MobileWrapper>
  );
};
