import Image from "next/image";
import React from "react";
import styled from "styled-components";

import Maths from "../../public/maths.png";

import Teacher from "../../public/teacher.jpeg";

const Headercard = () => {
  return (
    <>
      <HeaderCard>
        <Image height={150} width={150} src={Maths} alt="Maths" />
        <CardDetails>
          <BreadCrumb>Subjects - Maths 12 (sy23-math12)</BreadCrumb>
          <SubjectTitle>Math 12</SubjectTitle>
          <SubjectDetails>
            Maths class of hight school class 12 Taught in class online and
            study self at home. Home works group works. This is a good stuff by
            seasoned professionals....
          </SubjectDetails>
          <AuthorDetails>
            <Image src={Teacher} width={20} height={20} alt="" />
            <Author>Glenn Williams</Author>
          </AuthorDetails>
        </CardDetails>
      </HeaderCard>
    </>
  );
};

export default Headercard;

const HeaderCard = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 12px;
  min-width: 50%;
  border-radius: 8px;
`;

const CardDetails = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const SubjectTitle = styled.h1`
  font-weight: 700;
  font-size: 18px;
`;
const SubjectDetails = styled.p`
  font-size: 15px;

  color: gray;
  min-height: 50px;
`;
const Author = styled.p`
  font-size: 13px;
  color: #0760fa;
`;
const AuthorDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const BreadCrumb = styled.p`
  color: #0760fa;
  font-size: 10px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
