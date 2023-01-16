import react from "react";
import { Wrapper, LinksWrapper, Link, Flex } from "./style";
import { Container } from "../../global-style/style-variables";
import ApplePng from "./img/Apple.svg";
import GooglePng from "./img/Google.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <LinksWrapper>
            <Link href="#">Мобильное приложение</Link>
            <Link href="#">Помощь и Обратная связь</Link>
            <Link href="#">Платные услуги</Link>
            <Link href="#">Реклама на сайте</Link>
            <Link href="#">Сотрудничество</Link>
            <Link href="#">Условия использования</Link>
            <Link href="#">Политика конфиденциальности</Link>
          </LinksWrapper>

          <LinksWrapper>
            <Link href="#">Как обмениваться товарами?</Link>
            <Link href="#">Правила безопасности</Link>
            <Link href="#">Платные услуги</Link>
            <Link href="#">Карта сайта</Link>
            <Link href="#">Карта регионов</Link>
            <Link href="#">Часто задаваемые запросы</Link>
          </LinksWrapper>
          <LinksWrapper>
            <p>Мобильные приложения для вашего смартфона</p>
            <Flex>
              <a href="">
                <Image alt="" src={ApplePng} />
              </a>
              <a href="">
                <Image alt="" src={GooglePng} />
              </a>
            </Flex>
          </LinksWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
