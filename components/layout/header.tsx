"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import Profile from "../../public/images.jpeg";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";

interface MenuItemProps {
  href: string;
  text: string;
  onClick?: () => void;
}

const menuItems: MenuItemProps[] = [
  { href: "/", text: "Dashboard" },
  { href: "/classes", text: "Classes" },
  { href: "/homework", text: "Homework" },
  { href: "/mail", text: "Mail" },
  { href: "/groups", text: "Groups" },
  { href: "/exams", text: "Exams" },
  { href: "/profile", text: "Profile" },
  { href: "/news", text: "News" },
];

interface NavbarProps {}

interface DropdownMenuContentProps {
  $isOpen: boolean;
}

const Header: React.FC<NavbarProps> = () => {
  const [$isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!$isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Navbar>
      <LogoArea>
        <StyledMenuIcon onClick={toggleMenu} />
        <DropdownMenuContent $isOpen={$isOpen}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} href={item.href} onClick={closeMenu}>
              {item.text}
            </MenuItem>
          ))}
        </DropdownMenuContent>
        <Logo>Blackboard</Logo>
        <Links>
          <Link1>Dashboard</Link1>
          <Link2>Blog</Link2>
        </Links>
      </LogoArea>
      <Utils>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search..." />
          <IoIosSearch size={20} style={{ cursor: "pointer" }} />
        </SearchContainer>
        <LuMail size={20} color="white" />
        <FaRegHeart size={20} color="white" />
        <IoMdNotificationsOutline size={20} color="white" />
        <Image
          src={Profile} // Replace with your search icon image
          alt="Profile Image"
          width={25}
          height={25}
          style={{ borderRadius: 12 }}
        />
      </Utils>
    </Navbar>
  );
};
export default Header;

const DropdownMenuContent = styled.div<DropdownMenuContentProps>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  top: 12%; // Adjust as needed
  left: 0;
  background-color: #0078aa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 8px 22px;
  z-index: 1000;
`;

export const Navbar = styled.div`
  background-color: #19376d;
  padding: 12px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  z-index: 50;
  //position: fixed;
  @media (max-width: 768px) {
    background-color: #19376d;
  }
`;
export const LogoArea = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.h1`
  color: white;
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-left: 40px;
`;
export const Link1 = styled.h1`
  font-size: 16px;
  color: #fefafa;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Link2 = styled.h1`
  font-size: 16px;
  color: #fefafa;
  @media (max-width: 768px) {
    display: none;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 3px 6px;
  background-color: white;
  @media (max-width: 768px) {
    display: none;
  }
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
`;
const SearchIcon = styled.img`
  margin-right: 8px;
`;
const Utils = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;
const ProfileImage = styled.img`
  margin-right: 8px;
`;
const StyledMenuIcon = styled(BiMenu)`
  color: white;
  font-size: 40px;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuItem = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  padding: 8px 20px;
  &:hover {
    background-color: #f0f0f0;
    color: blue;
  }
`;
