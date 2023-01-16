import styled from "styled-components";
import { CloseSvg, LoopSvg, MarkSvg } from "../views/main/svg";
import revertIcon from "../public/assets/images/logo/revert-logo.png";
import Image from "next/image";
import Link from "next/link";

const InputWrapper = styled.label<{ for: any; width?: any; margin?: any }>`
  padding: 14px;
  background: white;
  box-shadow: -4px 4px 16px rgba(172, 172, 172, 0.15), 4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 107px;
  display: flex;
  align-items: center;
  width: ${({ width }) => width};
  white-space: nowrap;
  cursor: pointer;
  margin-bottom: ${({ margin }) => margin};

  input {
    margin-left: 10px;
    outline: none;
    border: unset;
    width: 100%;
  }
  button {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    position: relative;
    padding: 0px 10px;
  }
  button::before {
    content: "";
    height: 4px;
    left: 0;
    width: 100%;
    position: absolute;
    background: black;
    bottom: -10px;
  }
`;

const ImgWrapper = styled.div`
  min-width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 18px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div<{ marginB?: any }>`
  display: flex;
  gap: 10px;
  margin-bottom: ${({ marginB }) => marginB};
`;

const InputPadding = styled.div`
  padding: 0px 50px;
`;

const SvgWrapper = styled.div`
  svg,
  img {
    min-width: 32px;
    height: 32px;
    margin-right: 18px;
  }
`;

export const SearchInputs = ({ not_first = true, marginB = "70px" }: any) => {
  return (
    <>
      {not_first && (
        <InputWrapper for="ryadom" width={"100%"} margin={"20px"}>
          <ImgWrapper>
            <Image alt="" src={revertIcon} />
          </ImgWrapper>

          <p>Обменяйте любую ненужную вещь на любую нужную!</p>
          <input type="text" id="ryadom" />
          <button>Подробнее</button>
          <CloseSvg style={{ margin: "0px 8px" }} size={"36px"} />
        </InputWrapper>
      )}
      <Wrapper marginB={marginB}>
        <InputWrapper for="ryadom" width={"60%"}>
          <SvgWrapper>
            <LoopSvg />
          </SvgWrapper>
          <p>
            <b>3 141 318</b> объявлений рядом
          </p>
          <input type="text" id="ryadom" />
        </InputWrapper>
        <InputWrapper for="Mir" width={"40%"}>
          <SvgWrapper>
            <MarkSvg />
          </SvgWrapper>
          <p>По всему миру</p>
          <input type="text" id="Mir" />
        </InputWrapper>
        <Link legacyBehavior href="/search">
          <InputWrapper for="Search" width={"14%"}>
            <SvgWrapper>
              <LoopSvg />
            </SvgWrapper>
            <b>Найти</b>
          </InputWrapper>
        </Link>
      </Wrapper>
    </>
  );
};
