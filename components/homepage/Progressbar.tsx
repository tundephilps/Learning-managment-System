"use client";
// ProgressBar.tsx
import React from "react";
import styled from "styled-components";

// Styled components
const Wrapper = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  position: relative;
`;

const Progress = styled.div<{ $percentage: number }>`
  height: 100%;
  background-color: #007bff;
  border-radius: 4px;
  width: ${({ $percentage }) => `${$percentage}%`};
`;

const ProgressText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  font-size: 8px;
  font-weight: 600;
`;

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <Wrapper>
      <ProgressText>{percentage}%</ProgressText>
      <Progress $percentage={percentage} />
    </Wrapper>
  );
};

export default ProgressBar;
