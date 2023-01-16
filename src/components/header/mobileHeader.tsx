import styled from "styled-components";
import { LoopSvg } from "../../views/main/svg";
import { MobileWrapper, InputWrapper, Input, Button, Padding } from "./style";

import Link from "next/link";

export const MobileSearch = ({ children }: any) => {
  return (
    <>
      <MobileWrapper>
        <InputWrapper>
          <Input type="text" placeholder="Что ищите?" />
          <Link href={"/search"}>
            <Button
              onClick={() => {
                console.log("321");
              }}
            >
              <LoopSvg fill={"white"} />
            </Button>
          </Link>
        </InputWrapper>
        {children}
      </MobileWrapper>
      <Padding></Padding>
    </>
  );
};

const UIMobileWrapperTitleS = styled.h2`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 16px;
`;

export const UIMobileWrapperTitle = ({ text }) => {
  return <UIMobileWrapperTitleS>{text}</UIMobileWrapperTitleS>;
};
