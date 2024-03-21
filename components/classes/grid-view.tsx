import React from "react";

import Image from "next/image";
//import { FaThList } from "react-icons/fa";
import Maths from "../../public/maths.png";

import Chemistry from "../../public/chemistry.png";
import English from "../../public/english.png";
import Biology from "../../public/biology.jpg";

import { IoTimeOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CardProps {
  src: string | StaticImageData;
  alt: string;
  subject: string;
  author: string;
  subjectDetails: string;
  time: string;
  lessons: string;
  difficulty: string;
}

const cards: CardProps[] = [
  {
    src: English,
    alt: "Eng",
    subject: "English",
    author: "By john Letterman",
    subjectDetails:
      "Fully Concrentrated topic of Magical language that got people talking for decades...",
    time: "42 hours",
    lessons: "31 Lessons",
    difficulty: "Medium Adv",
  },
  {
    src: Biology,
    alt: "Eng",
    subject: "Biology",
    author: "By john Letterman",
    subjectDetails:
      "Fully Concrentrated topic of Magical language that got people talking for decades...",
    time: "42 hours",
    lessons: "31 Lessons",
    difficulty: "Medium Adv",
  },
  {
    src: Maths,
    alt: "Eng",
    subject: "Maths",
    author: "By john Letterman",
    subjectDetails:
      "Fully Concrentrated topic of Magical language that got people talking for decades...",
    time: "42 hours",
    lessons: "31 Lessons",
    difficulty: "Medium Adv",
  },
  {
    src: Chemistry,
    alt: "Eng",
    subject: "Chemistry",
    author: "By john Letterman",
    subjectDetails:
      "Fully Concrentrated topic of Magical language that got people talking for decades...",
    time: "42 hours",
    lessons: "31 Lessons",
    difficulty: "Medium Adv",
  },
];

const GridView = () => {
  const router = useRouter();
  return (
    <GridContainer>
      {cards.map((card, index) => (
        <Card key={index} onClick={() => router.push("classes/topics")}>
          <StyledImage src={card.src} alt={card.alt} width={150} />
          <CardDetails>
            <SubjectTitle>{card.subject}</SubjectTitle>
            <Author>{card.author}</Author>
            <SubjectDetails>{card.subjectDetails}</SubjectDetails>
          </CardDetails>
          <Line></Line>
          <StatsContainer>
            <Stats>
              <IoTimeOutline />
              <StatItem>{card.time}</StatItem>
            </Stats>
            <Stats>
              <TfiWrite />
              <StatItem>{card.lessons}</StatItem>
            </Stats>
            <Stats>
              <FaRegUser />
              <StatItem>{card.difficulty}</StatItem>
            </Stats>
          </StatsContainer>
        </Card>
      ))}
    </GridContainer>
  );
};

export default GridView;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  border: 1px solid #ccc;

  justify-content: center;
  align-items: center;

  background-color: #e8e7e7;
  width: 100%;

  border-radius: 4px;
  padding: 12px 12px;
`;

const Card = styled.div`
  border-radius: 6px;
  width: 239px;
  background-color: white;
  cursor: pointer;
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CardDetails = styled.h1`
  padding: 6px;
`;

const SubjectTitle = styled.h1`
  font-weight: 700;
  font-size: 18px;
`;
const Author = styled.p`
  font-size: 13px;
  color: #6e798c;
`;
const SubjectDetails = styled.p`
  font-size: 14px;
  color: gray;
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;
  width: 150px;
  font-size: 10px;
`;
const StyledImage = styled(Image)`
  display: flex;
  align-self: center;
  min-height: 150px;
`;
const Line = styled.div`
  height: 1px;
  background-color: lightgray;
  width: 100%;
`;

const StatsContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  padding: 6px;
`;

const StatItem = styled.span`
  font-weight: 400;
  font-size: 10px;
`;
