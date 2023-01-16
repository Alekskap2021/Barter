import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 0px;
`;

const NavLink = styled.button<{ isActive?: any }>`
  font-weight: ${({ isActive }) => (isActive ? "700" : "500")};
  font-size: 20px;
  line-height: 25px;
  padding: 10px;
  border-bottom: ${({ isActive }) => (isActive ? "3px solid #373538" : "")};
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const HeaderNavigation = ({ tabActive }) => {
  return (
    <Wrapper>
      <Link legacyBehavior href="/my-announcements/ads/active">
        <NavLink isActive={tabActive === "1"}>Объявления</NavLink>
      </Link>
      <Link legacyBehavior href="/my-announcements/trade">
        <NavLink isActive={tabActive === "2"} onClick={() => {}}>
          Предложения об обмене
        </NavLink>
      </Link>
      <Link legacyBehavior href="/my-announcements/chat">
        <NavLink isActive={tabActive === "3"} onClick={() => {}}>
          Сообщения
        </NavLink>
      </Link>
      <NavLink isActive={tabActive === "4"} onClick={() => {}}>
        Платежи и счёт
      </NavLink>
      <Link legacyBehavior href="/settings">
        <NavLink isActive={tabActive === "5"} onClick={() => {}}>
          Настройки
        </NavLink>
      </Link>
    </Wrapper>
  );
};
