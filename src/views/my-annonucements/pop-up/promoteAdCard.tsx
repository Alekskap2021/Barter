import styled from "styled-components";
import { media } from "../../../global-style";
import { DoubleStarSvg, StarSvg, TripleStarSvg } from "./icons";

const PromoteCardBody = styled.div<{ isSelected?: boolean }>`
  padding: 20px;
  background: #ffffff;

  ${media.mobile} {
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  width: ${({ isSelected }) => (isSelected ? "279px" : "232px")};
  height: ${({ isSelected }) => (isSelected ? "392px" : "326px")};
  border: ${({ isSelected }) => (isSelected ? "4px solid #FDCE05" : "2px solid #fdce05")};
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25);
  border-radius: 20px;
  p {
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    line-height: 20px;
    ${media.mobile} {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }
  }
  cursor: pointer;
`;

const PromoteCardHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    padding-right: 20px;
    padding-left: 20px;
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    text-align: center;

    ${media.mobile} {
      max-width: 40%;
      font-weight: 800;
      font-size: 14px;
      line-height: 18px;
    }
  }
  svg {
    margin-bottom: 10px;
    ${media.mobile} {
      width: 30%;
      height: 20%;
    }
  }
  padding-bottom: 20px;

  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 20px;

  ${media.mobile} {
    border-right: 1px solid #e7e7e7;
    border-bottom: none;
  }
`;

export const PromoteAdCard = ({
  title,
  maintext,
  main,
  subMain,
}: {
  title: string;
  maintext: string;
  main?: boolean;
  subMain?: boolean;
}) => {
  return (
    <>
      <PromoteCardBody isSelected={main ? true : false}>
        <PromoteCardHeader>
          {main ? <TripleStarSvg /> : subMain ? <DoubleStarSvg /> : <StarSvg />}

          <h2>{title}</h2>
        </PromoteCardHeader>
        <p>{maintext}</p>
      </PromoteCardBody>
    </>
  );
};
