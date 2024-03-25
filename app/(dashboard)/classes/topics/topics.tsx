"use client";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import Headercard from "@/components/classes/header-card";
import Courseobjectives from "@/components/classes/course-objectives";
import Lesson from "@/components/classes/lessons";
import CourseRequirment from "@/components/classes/course-requirements";

interface TopicsProps {}

const topics: React.FC<TopicsProps> = () => {
  const router = useRouter();

  const navigate = (page: string) => {
    router.push(page);
  };

  return (
    <Container>
      <Headercard />
      <Courseobjectives />
      <Lesson />
      <CourseRequirment />
    </Container>
  );
};

export default topics;

const Container = styled.div`
  background-color: #e8e7e7;
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`;
