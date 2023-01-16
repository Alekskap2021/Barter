import styled from "styled-components";
import { media } from "../../../global-style";

import defaultImg from "../../main/images-default/default-3.png";
import { HeartSvg } from "../../main/svg";

// import defaultImg3 from "../images-default/default-3.png";
// const Flex = styled.div`
//   display: flex;

// `;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  ${media.mobile} {
    font-weight: 500;
    font-size: 10px;
    line-height: 13px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  line-height: 25px;
  color: #373538;
  ${media.mobile} {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }
`;

const Location = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-top: auto;
  color: #868686;
  ${media.mobile} {
    font-size: 10px;
    line-height: 13px;
  }
`;

const Category = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  padding: 20px;
  background: #ffffff;
  box-shadow: -5px -6px 18px 8px rgba(156, 156, 156, 0.25),
    5px 6px 18px 8px rgba(156, 156, 156, 0.25);
  border-radius: 20px;
  display: flex;
  margin-bottom: 20px;
  img {
    margin-right: 20px;
    max-width: 180px;
    height: 146px;
    border-radius: 3px;
  }
  ${media.mobile} {
    img {
      margin-right: 8px;
      border-radius: 12px;
      max-width: 116px;
      height: 97px;
    }
    padding: 8px;
    margin-bottom: 8px;
  }
`;

const Price = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #373538;
  ${media.mobile} {
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
  svg {
    margin-top: auto;
  }
  ${media.mobile} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-left: unset;
    svg {
      width: 13px;
      height: 13px;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
  justify-content: space-between;
`;

export const FilterItem = ({ deviceType }) => {
  return (
    <Wrapper>
      <img src={defaultImg.src} alt="" />
      <Flex>
        <Description>
          <Title>Книги Л.Н. Толстого 4 тома, 2 книги Абая К.</Title>
          {deviceType !== "mobile" && <Category>Категория: Книги / Досуг</Category>}
          <Location>Алматы, Медеуский район / Сегодня 12:04</Location>
        </Description>
        <Column>
          <Price>25.000 ₸</Price>
          <HeartSvg />
        </Column>
      </Flex>
    </Wrapper>
  );
};
