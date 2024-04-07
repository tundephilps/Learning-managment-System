"use client";
import Image from "next/image";
import React from "react";

import Teacher from "../../public/teacher.jpeg";
import styled from "styled-components";

const Welcome = () => {
  return (
    <Wrapper>
      <Image src={Teacher} width={100} height={100} alt="" />
      <Name>Welcome Micheal! Keep going</Name>
      <Stats>
        Your current attendance is 92.7% which is above 72%of minimum attendance
        mark
      </Stats>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  width: 50%;
  height: 200px;
  background-color: white;
  padding: 8px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Name = styled.h1`
  font-weight: 500;
`;

const Stats = styled.p`
  color: green;
  font-size: 10px;
`;
