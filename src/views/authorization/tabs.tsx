import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background: var(--default-yellow);
  box-shadow: 0px 6px 18px 8px rgba(156, 156, 156, 0.25), -4px 4px 16px rgba(172, 172, 172, 0.15),
    4px 4px 16px rgba(172, 172, 172, 0.15);
  border-radius: 28px;
  margin: 0 auto;
  width: fit-content;
  padding: 2px;
  margin-bottom: 20px;
  hr {
    background: #868686;
    outline: unset;
    border: unset;
    width: 1px;
    margin: 3px 8px;
  }
`;

const TabButton = styled.button<{ Active?: any }>`
  padding: 4px 24px;
  font-weight: ${({ Active }) => (Active ? 600 : 500)};
  font-size: 14px;
  line-height: 20px;
  border-radius: 28px;
  background: ${({ Active }) => (Active ? "white" : "transparent")};
`;

const Tab = ({ id, text, activeTab, toggleTab, setActiveTab }: any) => {
  toggleTab = () => {
    setActiveTab(id);
  };
  return (
    <TabButton onClick={toggleTab} Active={activeTab === id} id={id}>
      {text}
    </TabButton>
  );
};

export const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <Wrapper>
      <Tab setActiveTab={setActiveTab} activeTab={activeTab} text={"Вход"} id={1} />
      <hr></hr>
      <Tab setActiveTab={setActiveTab} activeTab={activeTab} text={"Регистрация"} id={2} />
    </Wrapper>
  );
};
