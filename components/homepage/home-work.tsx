"use client";
import React from "react";
import styled from "styled-components";

const HomeWork = () => {
  return (
    <Wrapper>
      <Name>Home Work</Name>
      <TableData>
        <Subject>Computer (1001)</Subject>
        <Dates>
          <Date>HomeWork Date: 03/24/2026</Date>
          <Date>Submission Date: 03/24/2026</Date>
        </Dates>
        <Button>
          <Status>submitted</Status>
        </Button>
      </TableData>
      <TableData>
        <Subject>Social Studies (1001)</Subject>
        <Dates>
          <Date>HomeWork Date: 03/24/2026</Date>
          <Date>Submission Date: 03/24/2026</Date>
        </Dates>
        <Button>
          <Status>submitted</Status>
        </Button>
      </TableData>
    </Wrapper>
  );
};

export default HomeWork;

const Wrapper = styled.div`
  width: 30%;
  background-color: white;
  height: 200px;
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

const TableData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
`;

const Subject = styled.div`
  font-size: 12px;
`;
const Dates = styled.div``;

const Date = styled.p`
  font-size: 11px;
  color: gray;
`;

const Button = styled.div`
  background-color: green;
  padding: 4px;
  border-radius: 12px;
`;

const Status = styled.p`
  font-size: 10px;
  color: white;
`;
