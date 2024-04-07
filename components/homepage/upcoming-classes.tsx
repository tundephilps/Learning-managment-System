"use client";
import Image from "next/image";
import React from "react";

import teacher from "../../public/teacher.jpeg";
import face from "../../public/images.jpeg";
import styled from "styled-components";

const UpcomingClasses = () => {
  return (
    <Container>
      <Name style={{ fontSize: "13px" }}>Upcoming Classes</Name>
      <Card>
        <RightSide>
          <Image
            src={teacher}
            height={20}
            width={20}
            alt=""
            style={{ borderRadius: "12px" }}
          />
          <Details>
            <Teacher>Jason Statham</Teacher>
            <Subject>English</Subject>
          </Details>
        </RightSide>

        <Details>
          <Room>Room Number: 120</Room>
          <Time>10am- 1pm</Time>
        </Details>
      </Card>
      <Card>
        <RightSide>
          <Image
            src={face}
            height={20}
            width={20}
            alt=""
            style={{ borderRadius: "12px" }}
          />
          <Details>
            <Teacher>Mark Twainz</Teacher>
            <Subject>English</Subject>
          </Details>
        </RightSide>

        <Details>
          <Room>Room Number: 120</Room>
          <Time>10am- 1pm</Time>
        </Details>
      </Card>
    </Container>
  );
};

export default UpcomingClasses;

const Container = styled.div`
  width: 38%;
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

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: #f8f8f8;
  margin-top: 4px;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const Details = styled.div``;
const Teacher = styled.p`
  font-size: 8px;
  font-weight: 700;
`;

const Room = styled.p`
  font-size: 8px;
  font-weight: 700;
`;

const Subject = styled.p`
  font-size: 8px;
`;

const Time = styled.p`
  font-size: 8px;
`;
