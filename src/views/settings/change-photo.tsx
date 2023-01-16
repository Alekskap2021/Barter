import styled from "styled-components";
import { PenSvg } from "../../components/default-svg";
import { media } from "../../global-style";
import { AliCenter } from "../../global-style/style-variables";

const Wrapper = styled(AliCenter)`
  margin-bottom: 40px;
  ${media.mobile} {
    margin-bottom: 20px;
  }
`;

const Button = styled(AliCenter)`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #868686;
  cursor: pointer;
  svg {
    margin-left: 6px;
  }
  ${media.mobile} {
    margin-left: auto;
  }
`;

const Circle = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 100px;
  background: gainsboro;
  margin-right: 20px;
  ${media.mobile} {
    width: 60px;
    height: 60px;
  }
`;

export const UserAvatar = () => {
  return (
    <Wrapper>
      <Circle></Circle>
      <Button>
        Изменить фото <PenSvg />
      </Button>
    </Wrapper>
  );
};
