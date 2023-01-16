import styled from "styled-components";
import { UIContentWrapper } from "../../global-style/UI-kit";
import { TabContentActive } from "./ads-tab-content/active";

export const TabNavigationLink = styled.button<{ isActive?: any }>`
  font-weight: ${({ isActive }) => (isActive ? "700" : "500")};
  font-size: 16px;
  line-height: 20px;
  padding: 10px;
  border-bottom: ${({ isActive }) => (isActive ? "3px solid var(--default-yellow)" : "")};
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const TabNavigation = styled.div`
  margin-bottom: 20px;
`;

const TabContent = styled.div``;

export const TabNav = ({ tabActive }: any) => {
  return (
    <TabNavigation>
      <TabNavigationLink isActive={tabActive === "1"}>Активные</TabNavigationLink>
      <TabNavigationLink isActive={tabActive === "2"}>Ожидающие</TabNavigationLink>
      <TabNavigationLink isActive={tabActive === "3"}>Неоплаченные</TabNavigationLink>
      <TabNavigationLink isActive={tabActive === "4"}>Неактивные</TabNavigationLink>
      <TabNavigationLink isActive={tabActive === "5"}>Отклоненные</TabNavigationLink>
    </TabNavigation>
  );
};

export const TabBlock = ({ deviceType, tabContent }: any) => {
  return (
    <>
      {" "}
      <UIContentWrapper>
        <TabContent>{tabContent}</TabContent>
      </UIContentWrapper>{" "}
    </>
  );
};
