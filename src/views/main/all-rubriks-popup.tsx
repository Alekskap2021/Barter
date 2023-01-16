import styled from "styled-components";
import { FlexCenter } from "../../global-style/style-variables";
import { headingsMockData } from "./sliders/headingsMockData";
import { mockSliderData } from "./sliders/mockSliderData";
import Image from "next/image";
import Link from "next/link";

const ArrowSvg = () => {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 13L1 7L7 1"
        stroke="#373538"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  background: var(--default-yellow);
  top: 0;
  left: 0;
  color: green;
  padding: 4px 8px;
  z-index: 20000;
`;

const Button = styled.div`
  color: black;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  svg {
    margin-right: 9px;
  }
`;

const ItemsWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 30px;
  padding: 8px 16px;
  max-height: 90vh;
  overflow-y: scroll;
  text-align: center;
`;

const Item = styled(FlexCenter(styled.div))`
  border-bottom: 1px solid #e7e7e7;
  padding: 8px 0px;
`;

const ItemCircle = styled.div`
  width: 45px;
  height: 45px;
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25);
  border-radius: 50%;
  position: relative;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const ItemTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: var(--default-black);
  margin-left: 16px;
`;
const Title = styled.h2``;

export const RubRiksPopUp = ({ closePopUp, title, img }) => {
  return (
    <>
      <Wrapper>
        <Button onClick={closePopUp}>
          <ArrowSvg />
          Вернуться на главную
        </Button>
        <ItemsWrapper>
          <Title>Категории</Title>
          {headingsMockData.map((item, index) => {
            return (
              <Link href="/search" key={index}>
                <Item>
                  <ItemCircle>
                    <Image alt="" height={30} width={30} src={item.img} />
                  </ItemCircle>
                  <ItemTitle>{item.title}</ItemTitle>
                </Item>
              </Link>
            );
          })}
        </ItemsWrapper>
      </Wrapper>
    </>
  );
};
