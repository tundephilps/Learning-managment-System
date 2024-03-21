import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 200px;
  background-color: #0078aa;
  border-left: 10px solid #0078aa;
  transition: 0ms.5s;
  overflow: hidden;
  padding: 22px 0px;
  color: white;
  &.active {
    width: 80px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-bottom: 30px;
`;

const UnorderedList = styled.ul`
  top: 0;
  left: 0;
  width: 100%;
  &:hover {
    color: "#0078aa";
  }
`;
const List = styled.li`
  position: relative;
  width: 100%;
  list-style: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding: 12px 0 12px 0px;
  &:hover {
    background-color: white;
    color: "#0078aa";
  }
  &.active {
    background-color: white;
  }
`;
const MenuItem = styled(Link)`
  min-height: 60px;
  padding: 0px 65px 0px 55px;
  &:hover {
    color: #0078aa;
    margin-left: 10px;
    transition: 0.5s;
  }
`;

const Sidebar = () => {
  interface MenuItemProps {
    href: string;
    text: string;
  }

  const menuItems: MenuItemProps[] = [
    { href: "/classes", text: "Classes" },
    { href: "/calendar", text: "Calendar" },
    { href: "/homework", text: "Homework" },
    { href: "/mail", text: "Mail" },
    { href: "/groups", text: "Groups" },
    { href: "/exams", text: "Exams" },
    { href: "/profile", text: "Profile" },
    { href: "/news", text: "News" },
  ];

  return (
    <Navigation>
      <Title>Dashboard</Title>

      {menuItems.map((item, index) => (
        <UnorderedList key={index}>
          <List>
            <MenuItem href={item.href}>{item.text}</MenuItem>
          </List>
        </UnorderedList>
      ))}
    </Navigation>
  );
};

export default Sidebar;
