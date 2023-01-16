import styled from "styled-components";
import { media } from "../../../../global-style";
import { DefaultBtn } from "../../../../global-style/UI-kit";

const OfferDealBtns = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 35px;
  ${media.mobile} {
    flex-direction: column;
    width: 100%;
  }
  button {
    box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.25);
    padding: 10px 15px;
  }
`;

const Center = styled.div`
  margin: 0 auto;
  button {
    margin: 0px 10px;
  }
`;

export const Buttons = () => {
  return (
    <OfferDealBtns>
      <Center>
        <DefaultBtn text={"Принять"} background={"#60B56F"} color={"white"} />
        <DefaultBtn
          text={"Принять, но с другими условиями доставки"}
          border={"2px solid #60B56F"}
          background={"white"}
        />
        <DefaultBtn text={"Отклонить"} background={"#DD4756;"} color={"white"} />
      </Center>
      <DefaultBtn
        text={"Перейти в чат"}
        background={"white"}
        color={"#868686"}
        border={"2px solid #868686"}
      />
    </OfferDealBtns>
  );
};
