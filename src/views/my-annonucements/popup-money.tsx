import styled from "styled-components";
import { media } from "../../global-style";
import { AliCenter, JC_SB } from "../../global-style/style-variables";
import { DefaultCheckBox } from "../../global-style/UI-kit";

const Title = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 30px;
  line-height: 35px;
  ${media.mobile} {
    font-size: 14px;
    line-height: 18px;
  }
`;

const Wrapper = styled.div`
  padding: 40px;
`;

const SummPay = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #e7e7e7;
  p {
    font-weight: 600;
    margin-right: 30px;
    font-size: 20px;
    line-height: 25px;
  }
  b {
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
  }
`;

const PayMethodWrapper = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #e7e7e7;
  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }
`;

const Flex = styled(AliCenter)`
  p {
    margin-left: 8px;
  }
`;

export const PopUpMoney = () => {
  return (
    <>
      <Wrapper>
        <Title>Пополнить счет</Title>
        <SummPay>
          <p>Итого к оплате:</p>
          <b>900 ₸</b>
        </SummPay>
        <PayMethodWrapper>
          <h2>Выберите способ оплаты:</h2>
          <JC_SB>
            <DefaultCheckBox labelText={" "}>
              <Flex>
                <svg width="99" height="16" viewBox="0 0 99 16" fill="none">
                  <path
                    d="M21.3801 15.7333H17.3558L19.8709 0.276197H23.8956L21.3801 15.7333ZM13.9703 0.276197L10.1337 10.9077L9.67972 8.61834L9.68013 8.61917L8.32602 1.66793C8.32602 1.66793 8.16228 0.276197 6.41703 0.276197H0.0744245L0 0.537922C0 0.537922 1.93958 0.941467 4.20952 2.30467L7.70582 15.7337H11.8988L18.3014 0.276197H13.9703ZM45.6234 15.7333H49.3185L46.0968 0.275784H42.8618C41.368 0.275784 41.0041 1.42771 41.0041 1.42771L35.0022 15.7333H39.1972L40.0362 13.4373H45.152L45.6234 15.7333ZM41.1951 10.2656L43.3096 4.48117L44.4991 10.2656H41.1951ZM35.3168 3.99328L35.8911 0.673953C35.8911 0.673953 34.119 0 32.2716 0C30.2746 0 25.5321 0.872832 25.5321 5.11709C25.5321 9.11037 31.0982 9.15999 31.0982 11.2575C31.0982 13.355 26.1056 12.9792 24.4579 11.6565L23.8596 15.1272C23.8596 15.1272 25.6566 16 28.402 16C31.1482 16 35.2912 14.5781 35.2912 10.708C35.2912 6.6891 29.6751 6.31491 29.6751 4.56759C29.6755 2.81986 33.5947 3.04437 35.3168 3.99328Z"
                    fill="#373538"
                  />
                  <path
                    d="M57.4624 13.64L61.9424 1.16H63.5904L59.1104 13.64H57.4624Z"
                    fill="#373538"
                  />
                  <path d="M88.7456 1.71289H81.7441V14.2902H88.7456V1.71289Z" fill="#FF5A00" />
                  <path
                    d="M82.2094 8C82.2094 5.44466 83.4108 3.1767 85.2544 1.71133C83.8976 0.64466 82.1861 0 80.3192 0C75.8967 0 72.3184 3.57799 72.3184 8C72.3184 12.422 75.8967 16 80.3192 16C82.1861 16 83.8976 15.3553 85.2544 14.2887C83.4082 12.844 82.2094 10.5553 82.2094 8Z"
                    fill="#EB001B"
                  />
                  <path
                    d="M98.1899 8C98.1899 12.422 94.6116 16 90.1891 16C88.3222 16 86.6107 15.3553 85.2539 14.2887C87.1208 12.8207 88.2989 10.5553 88.2989 8C88.2989 5.44466 87.0975 3.1767 85.2539 1.71133C86.6081 0.64466 88.3196 0 90.1865 0C94.6116 0 98.1899 3.60129 98.1899 8Z"
                    fill="#F79E1B"
                  />
                </svg>
                <p>Оплата картой</p>
              </Flex>
            </DefaultCheckBox>
            <DefaultCheckBox labelText={"  "}>123 </DefaultCheckBox>
          </JC_SB>
        </PayMethodWrapper>
      </Wrapper>
    </>
  );
};
