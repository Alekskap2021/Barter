import React, { useState } from "react";
import { MainLogo } from "../../public/assets/images/logo";
import { Container } from "../../global-style/style-variables";
import {
  Wrapper,
  HeaderContent,
  UrlBase,
  Flex,
  LCPopUp,
  LCUser,
  LCLinkWrapper,
  UrlPrimary,
  Lang,
} from "./style";
import { GlobeSvg, HeartSvg, MessageSvg, UserSvg, ArrowSvg, UserModalSvg } from "./img";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useProfile } from "../../store/hooks/useProfile";
import { useRouter } from "next/router";

export const Header = () => {
  const [isActive, setActive] = useState(true);

  const router = useRouter();

  const dispatch = useDispatch();

  const { isLoggedIn, email, phone } = useProfile();
  const ToggleActive = () => {
    isLoggedIn && setActive(!isActive);
    isLoggedIn || router.push("/authorization");
  };

  return (
    <>
      <Wrapper>
        <Container>
          <HeaderContent>
            <Link legacyBehavior href="/">
              <a>
                <MainLogo />
              </a>
            </Link>
            <Flex>
              <Link href="/my-announcements/chat">
                <UrlBase>
                  <MessageSvg />
                  Сообщения
                </UrlBase>
              </Link>
              <Link href="/favourites">
                <UrlBase>
                  <HeartSvg />
                  Избранные
                </UrlBase>
              </Link>
              <UrlBase onClick={ToggleActive}>
                <LCPopUp isActive={isActive}>
                  <LCUser>
                    <UserModalSvg />
                    user@gmail.com
                  </LCUser>
                  <Link legacyBehavior href="/my-announcements/ads/active">
                    <LCLinkWrapper>
                      <p>Мои объявления</p>
                    </LCLinkWrapper>
                  </Link>
                  <Link legacyBehavior href="/my-announcements/chat">
                    <LCLinkWrapper>
                      <p>Сообщения</p>
                    </LCLinkWrapper>
                  </Link>
                  <Link legacyBehavior href="/my-announcements/trade">
                    <LCLinkWrapper>
                      <p>Предложения обмена</p>
                    </LCLinkWrapper>
                  </Link>
                  <Link legacyBehavior href="/favourites">
                    <LCLinkWrapper>
                      <p> Избранные</p>
                    </LCLinkWrapper>
                  </Link>
                  <Link legacyBehavior href="/notification">
                    <LCLinkWrapper>
                      <p>История обмена</p>
                    </LCLinkWrapper>
                  </Link>
                  <Link legacyBehavior href="/history-trade">
                    <LCLinkWrapper>
                      <p>Уведомления</p>
                    </LCLinkWrapper>
                  </Link>
                  <Link legacyBehavior href="/settings">
                    <LCLinkWrapper>
                      <p>Настройки</p>
                    </LCLinkWrapper>
                  </Link>
                  <LCLinkWrapper>
                    <p>Выйти</p>
                  </LCLinkWrapper>
                </LCPopUp>
                <UserSvg />
                Личный кабинет
              </UrlBase>
              <Link legacyBehavior href="/create-ad">
                <UrlPrimary>Подать объявление</UrlPrimary>
              </Link>
              <Lang>
                <GlobeSvg />
                <p>Рус</p>
                <ArrowSvg />
              </Lang>
            </Flex>
          </HeaderContent>
        </Container>
      </Wrapper>
    </>
  );
};
