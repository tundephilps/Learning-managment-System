"use client";
import React from "react";

import { FaInbox, FaMailchimp } from "react-icons/fa";
import styled from "styled-components";
const NoticeBoard = () => {
  return (
    <Wrapper>
      <Name>Notice Board</Name>
      <NoticeList>
        <NoticeItem>
          <FaInbox style={{ color: "green" }} />
          <Notice>Notice for New Book Collection</Notice>
          <DateBox>
            <Date> 03/01/2023</Date>
          </DateBox>
        </NoticeItem>
        <NoticeItem>
          <FaInbox style={{ color: "green" }} />
          <Notice>Exams preparation Notification</Notice>
        </NoticeItem>{" "}
        <NoticeItem>
          <FaInbox style={{ color: "green" }} />
          <Notice>Parents Teachers Meetings!!!</Notice>
        </NoticeItem>{" "}
        <NoticeItem>
          <FaInbox style={{ color: "green" }} />
          <Notice>Fee Reminder</Notice>
        </NoticeItem>
        <NoticeItem>
          <FaInbox style={{ color: "green" }} />
          <Notice>Course Form Submission</Notice>
          <DateBox>
            <Date> 03/01/2023</Date>
          </DateBox>
        </NoticeItem>
      </NoticeList>
    </Wrapper>
  );
};

export default NoticeBoard;

const Wrapper = styled.div`
  width: 50%;
  height: 200px;
  background-color: white;
  padding: 8px;
  overflow-y: auto; /* Use auto to only show scrollbar when needed */
  scrollbar-width: thin; /* Reduce the width of the scrollbar */
  scrollbar-color: gray transparent; /* Change the color of the scrollbar */
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #666; /* Change the color of the thumb */
    border-radius: 12px; /* Round the corners of the thumb */
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Name = styled.h1`
  font-weight: 500;
`;

const NoticeList = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding-top: 12px;
`;

const NoticeItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
const Notice = styled.p`
  font-size: 10px;
`;
const DateBox = styled.div`
  background-color: cyan;
  padding: 4px;
  border-radius: 12px;
`;

const Date = styled.p`
  font-size: 8px;
  font-weight: 700;
`;
