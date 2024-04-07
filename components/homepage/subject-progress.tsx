"use client";
import React from "react";
import ProgressBar from "./Progressbar";
import styled from "styled-components";

const SubjectProgress = () => {
  const percentage = 50;

  return (
    <Wrapper>
      <Name>Subject Progress</Name>
      {/* Header */}
      <Header>
        <SubjectHeader>
          <HeaderText>Subject</HeaderText>
        </SubjectHeader>
        <ProgressHeader>
          <HeaderText>Progress</HeaderText>
        </ProgressHeader>
      </Header>
      <Data>
        <SubjectsContent>
          <Subject>English</Subject>
        </SubjectsContent>
        <ProgressContent>
          <ProgressBar percentage={percentage} />
        </ProgressContent>
      </Data>
    </Wrapper>
  );
};

export default SubjectProgress;

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

const Header = styled.div`
  background: #f8f8f8;
  padding: 8px;
  display: flex;
  flex-direction: row;
`;

const SubjectHeader = styled.div`
  width: 40%;
`;
const ProgressHeader = styled.div`
  width: 60%;
`;
const HeaderText = styled.p`
  font-size: 10px;
  font-weight: 600;
`;

const Data = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SubjectsContent = styled.div`
  width: 40%;
`;

const ProgressContent = styled.div`
  width: 60%;
`;

const Subject = styled.p`
  font-size: 10px;
`;
