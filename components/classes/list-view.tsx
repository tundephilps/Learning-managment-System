"use client";
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
  subject: string;
  author: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  subjectDetails: string;
  time: string;
  lessons: string;
  difficulty: string;
}

const ListView = () => {
  const router = useRouter();

  const cards: CardProps[] = [
    {
      subject: "Mathematics",
      author: "by Tim Buchalka",
      imageSrc: Maths,
      imageAlt: "maths",
      subjectDetails:
        "This Maths Course for beginners teaches you the python language Fast. Includes Python Online Training.",
      time: "42 hours",
      lessons: "31 Lessons",
      difficulty: "Medium Advance",
    },
    {
      subject: "English",
      author: "by Alexancer York",
      imageSrc: English,
      imageAlt: "maths",
      subjectDetails:
        "Dive in and Learn English the best way you can.. in this awesome detailed tutorial",
      time: "53 hours",
      lessons: "12 Lessons",
      difficulty: "All Advance",
    },
    {
      subject: "Chemistry",
      author: "by Alexancer York",
      imageSrc: Chemistry,
      imageAlt: "maths",
      subjectDetails: "Finally the comprehensive guide using",
      time: "53 hours",
      lessons: "12 Lessons",
      difficulty: "All Advance",
    },
    {
      subject: "Biology",
      author: "by Alexancer York",
      imageSrc: Biology,
      imageAlt: "maths",
      subjectDetails:
        "Finally the comprehensive guide using the best mordern approach to Chemical Science to solve real world problems",
      time: "53 hours",
      lessons: "12 Lessons",
      difficulty: "All Advance",
    },
  ];

  return (
    <ListContainer>
      {cards.map((card, index) => (
        <Card key={index} onClick={() => router.push("classes/topics")}>
          <LeftSide>
            <Image
              src={card.imageSrc}
              width={140}
              height={50}
              alt={card.imageAlt}
              objectFit="contain"
            />
            <Description>
              <SubjectTitle>{card.subject}</SubjectTitle>
              <Author>{card.author}</Author>
              <SubjectDetails>{card.subjectDetails}</SubjectDetails>
            </Description>
          </LeftSide>
          <RightSide>
            <Stats>
              <IoTimeOutline />
              <Span>{card.time}</Span>
            </Stats>
            <Stats>
              <TfiWrite />
              <Span>{card.lessons}</Span>
            </Stats>
            <Stats>
              <FaRegUser />
              <Span>{card.difficulty}</Span>
            </Stats>
          </RightSide>
        </Card>
      ))}
    </ListContainer>
  );
};

export default ListView;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 12px;
  background-color: #e8e7e7;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  border-radius: 4px;
  padding: 6px 22px;
  background-color: #ffffff;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
const LeftSide = styled.div`
  display: flex;

  gap: 18px;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Description = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const SubjectTitle = styled.h1`
  font-weight: 700;
  font-size: 18px;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Span = styled.span`
  font-weight: 700;
`;
const Author = styled.p`
  font-size: 13px;
  color: #6e798c;
`;
const SubjectDetails = styled.p`
  font-size: 15px;
  width: 50%;
  color: gray;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

const RightSide = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
  align-items: flex-start;
`;
const Stats = styled.div`
  display: flex;

  align-items: center;

  flex-direction: row;
  gap: 6px;
  width: 150px;
  @media (max-width: 768px) {
  }
`;
