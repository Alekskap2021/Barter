import styled from "styled-components";
import Image from "next/image";
import { HeartSvg } from "./svg";
import { JC_SB } from "../../global-style/style-variables";
import { mockSliderData } from "./sliders/mockSliderData";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 8px 13px;
  height: 100%;
  gap: 8px;
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25);
  border-radius: 20px;
  img {
    width: 100%;
    border-radius: 12px;
    height: 94px;
    object-fit: cover;
  }
  svg * {
    cursor: pointer;
    transition: 300ms linear;
  }
  svg {
    width: 14px;
    height: 14px;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

const PostInfo = styled.div`
  display: flex;
`;
const City = styled.div`
  font-weight: 600;
  font-size: 10px;
  line-height: 12.6px;
`;
const Date = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 12.6px;
`;
const Sum = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

const SvgHeartToggleColor = (e: any) => {
  if (e.target.getAttribute("fill") == "#373538") {
    e.target.setAttribute("fill", "transparent");
    return;
  }
  e.target.setAttribute("fill", "#373538");
};

export const DefaulRubrikeBox = ({ data }: any) => {
  const renderItems = data.map((item, index) => {
    return (
      <Wrapper key={index}>
        <Image alt="" src={item.img} />
        <Link href="/card-page">
          <Title>{item.title.length > 60 ? item.title.slice(0, 60) + "..." : item.title}</Title>
        </Link>
        <PostInfo>
          <City>{item.city}&nbsp; - &nbsp;</City>
          <Date>{item.date}</Date>
        </PostInfo>
        <JC_SB>
          <Sum>{item.sum}</Sum>
          <HeartSvg handleClick={SvgHeartToggleColor} />
        </JC_SB>
      </Wrapper>
    );
  });
  return <>{renderItems}</>;
};

const NotificationTitle = styled.h3`
  font-size: 12px;
  text-align: center;
`;

export const DefaulRubrikeBoxNotific = ({ data }: any) => {
  const renderItems = data.map((item, index) => {
    return (
      <Wrapper key={index}>
        <NotificationTitle>Новинка дня</NotificationTitle>
        <Link href="/card-page">
          <Title>{item.title.length > 60 ? item.title.slice(0, 60) + "..." : item.title}</Title>
        </Link>

        <Sum>{item.sum}</Sum>
        <Image alt="" src={item.img} />
      </Wrapper>
    );
  });

  return <>{renderItems}</>;
};

const GridWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 30px;
  padding: 8px;
  position: relative;
  margin-bottom: 8px;
  h2 {
    text-align: center;
    margin-bottom: 8px;
  }
`;

const GridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const Button = styled.div`
  font-weight: 500;
  font-size: 10px;
  position: absolute;
  line-height: 13px;
  top: 11px;
  right: 16px;
  color: var(--default-yellow);
`;

export const GridRubrikMobile = ({ api, title }) => {
  return (
    <GridWrapper>
      <h2>{title}</h2>
      <GridContent>{api}</GridContent>
      <Button
        onClick={() => {
          console.log("смотреть всё :?");
        }}
      >
        Смотреть все
      </Button>
    </GridWrapper>
  );
};

export const GridSliderShow = ({ api, title }) => {
  return (
    <>
      <GridContent>{api}</GridContent>
    </>
  );
};

export const DefaulRubrikeBoxTest = ({ data }: any) => {
  const renderItems = data.map((item, index) => {
    return (
      <Wrapper key={index}>
        <img src={item.main_photo.slice(32)} alt="" />
        <Link href={`/card-page/${item.id}`}>
          <Title>{item.name.length > 60 ? item.name.slice(0, 60) + "..." : item.name}</Title>
        </Link>
        <PostInfo>
          <City>{item.location}&nbsp; - &nbsp;</City>
          <Date>{item.date}</Date>
        </PostInfo>
        <JC_SB>
          <Sum>{item.price}</Sum>
          <HeartSvg handleClick={SvgHeartToggleColor} />
        </JC_SB>
      </Wrapper>
    );
  });
  return <>{renderItems}</>;
};
