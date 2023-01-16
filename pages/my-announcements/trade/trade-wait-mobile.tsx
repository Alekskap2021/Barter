import Image from "next/image";
import styled from "styled-components";
import { EyeSvg } from "../../../src/components/default-svg";
import { MessageSvg, HeartSvg } from "../../../src/components/header/img";
import { MobileFooter } from "../../../src/components/footer/mobile-footer";
import { UIBackToPage, DefaultCheckBox } from "../../../src/global-style/UI-kit";
import { PhoneSvg } from "../../../src/views/main/svg";
import defaultImg from "../../../src/views/main/images-default/default-1.png";
import { UIBtn } from "../../../src/global-style/style-variables";

const Wrapper = styled.div`
  background: var(--default-yellow);
  padding: 16px 8px 100px;
`;
const WrapperContent = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 30px;
  padding: 8px 20px;
`;

const DefaultTitle = styled.h2`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 4px;
`;

// Item

const Item = styled.div`
  padding: 16px 0px 6px;
  border-bottom: 1px solid #e7e7e7;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  min-width: 87px;
  height: 70px;
  margin-right: 8px;
  position: relative;
  border-radius: 3px;
`;

const Description = styled.div`
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }
  b {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    margin-top: 4px;
  }
`;
const Date = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #868686;
  margin: 8px 0px 16px;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #868686;
  svg {
    width: 12px;
    height: 12px;
    margin-right: 6px;
  }
`;

const ButtonsWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3%;
  margin: 16px 0px;

  place-items: center;
  button {
    padding: 8px 0px;
  }
  button:last-child {
    grid-column: 1 / 4;
    margin-top: 10px;
  }
  @media screen and (max-width: 345px) {
    button {
      font-size: 11px;
    }
  }
`;

const Button = styled.div`
  width: 100%;
  text-align: center;
  padding: 8px 16px;
  border: 1px solid #fdce05;
  filter: drop-shadow(4px 4px 13px rgba(0, 0, 0, 0.25));
  border-radius: 53px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;

// Item end

const TradeWaitMobile = () => {
  return (
    <>
      <Wrapper>
        <UIBackToPage href={"/profile"} text={"Вернуться в профиль"} />
        <WrapperContent>
          <DefaultTitle>Активные</DefaultTitle>
          <Item>
            <Flex>
              <ImageWrapper>
                <Image alt="" src={defaultImg} />
              </ImageWrapper>
              <Description>
                <p>Книги Л.Н. Толстого 4 тома, 2 книги Абая К.</p>
                <b>25.000 ₸ .</b>
              </Description>
            </Flex>

            <Date>18.03.2022 - 17.04.2022</Date>
            <Info>
              <InfoItem>
                <MessageSvg />

                <p>12</p>
              </InfoItem>
              <InfoItem>
                <EyeSvg />

                <p>45</p>
              </InfoItem>
              <InfoItem>
                <PhoneSvg />

                <p>2</p>
              </InfoItem>
              <InfoItem>
                <HeartSvg />
                <p>7</p>
              </InfoItem>
            </Info>
            <ButtonsWrapper>
              <UIBtn text={"Принять"} color={"white"} background={"#60B56F"} />
              <UIBtn text={"Отклонить"} color={"white"} background={"#DD4756"} />
              <UIBtn
                text={"В чат"}
                color={"#868686"}
                background={"transparent"}
                border={"1px solid #868686"}
              />
              <UIBtn
                text={"Приянть, но с другми условиями доставки"}
                background={"transparent"}
                border={"1px solid #60B56F"}
              />
            </ButtonsWrapper>
          </Item>
          <Item>
            <Flex>
              <ImageWrapper>
                <Image alt="" src={defaultImg} />
              </ImageWrapper>
              <Description>
                <p>Книги Л.Н. Толстого 4 тома, 2 книги Абая К.</p>
                <b>25.000 ₸ .</b>
              </Description>
            </Flex>

            <Date>18.03.2022 - 17.04.2022</Date>
            <Info>
              <InfoItem>
                <MessageSvg />

                <p>12</p>
              </InfoItem>
              <InfoItem>
                <EyeSvg />

                <p>45</p>
              </InfoItem>
              <InfoItem>
                <PhoneSvg />

                <p>2</p>
              </InfoItem>
              <InfoItem>
                <HeartSvg />
                <p>7</p>
              </InfoItem>
            </Info>
            <ButtonsWrapper>
              <UIBtn text={"Приянть"} color={"white"} background={"#60B56F"} />
              <UIBtn text={"Приянть"} color={"white"} background={"#DD4756"} />
              <UIBtn
                text={"В чат"}
                color={"#868686"}
                background={"transparent"}
                border={"1px solid #868686"}
              />
              <UIBtn
                text={"Приянть, но с другми условиями доставки"}
                background={"transparent"}
                border={"1px solid #60B56F"}
              />
            </ButtonsWrapper>
          </Item>
          <Item>
            <Flex>
              <ImageWrapper>
                <Image alt="" src={defaultImg} />
              </ImageWrapper>
              <Description>
                <p>Книги Л.Н. Толстого 4 тома, 2 книги Абая К.</p>
                <b>25.000 ₸ .</b>
              </Description>
            </Flex>

            <Date>18.03.2022 - 17.04.2022</Date>
            <Info>
              <InfoItem>
                <MessageSvg />

                <p>12</p>
              </InfoItem>
              <InfoItem>
                <EyeSvg />

                <p>45</p>
              </InfoItem>
              <InfoItem>
                <PhoneSvg />

                <p>2</p>
              </InfoItem>
              <InfoItem>
                <HeartSvg />
                <p>7</p>
              </InfoItem>
            </Info>
            <ButtonsWrapper>
              <UIBtn text={"Приянть"} color={"white"} background={"#60B56F"} />
              <UIBtn text={"Приянть"} color={"white"} background={"#DD4756"} />
              <UIBtn
                text={"В чат"}
                color={"#868686"}
                background={"transparent"}
                border={"1px solid #868686"}
              />
              <UIBtn
                text={"Приянть, но с другми условиями доставки"}
                background={"transparent"}
                border={"1px solid #60B56F"}
              />
            </ButtonsWrapper>
          </Item>
          <Item>
            <Flex>
              <ImageWrapper>
                <Image alt="" src={defaultImg} />
              </ImageWrapper>
              <Description>
                <p>Книги Л.Н. Толстого 4 тома, 2 книги Абая К.</p>
                <b>25.000 ₸ .</b>
              </Description>
            </Flex>

            <Date>18.03.2022 - 17.04.2022</Date>
            <Info>
              <InfoItem>
                <MessageSvg />

                <p>12</p>
              </InfoItem>
              <InfoItem>
                <EyeSvg />

                <p>45</p>
              </InfoItem>
              <InfoItem>
                <PhoneSvg />

                <p>2</p>
              </InfoItem>
              <InfoItem>
                <HeartSvg />
                <p>7</p>
              </InfoItem>
            </Info>
            <ButtonsWrapper>
              <UIBtn text={"Приянть"} color={"white"} background={"#60B56F"} />
              <UIBtn text={"Приянть"} color={"white"} background={"#DD4756"} />
              <UIBtn
                text={"В чат"}
                color={"#868686"}
                background={"transparent"}
                border={"1px solid #868686"}
              />
              <UIBtn
                text={"Приянть, но с другми условиями доставки"}
                background={"transparent"}
                border={"1px solid #60B56F"}
              />
            </ButtonsWrapper>
          </Item>
        </WrapperContent>
      </Wrapper>
      <MobileFooter />
    </>
  );
};

export default TradeWaitMobile;
