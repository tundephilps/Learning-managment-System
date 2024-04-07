"use client";
import Welcome from "@/components/homepage/Welcome";
import NoticeBoard from "@/components/homepage/notice-board";
import SubjectProgress from "@/components/homepage/subject-progress";
import UpcomingClasses from "@/components/homepage/upcoming-classes";
import HomeWork from "@/components/homepage/home-work";
import RecentLesson from "@/components/homepage/recent-lessons";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <FirstGrid>
          <Welcome />
          <NoticeBoard />
        </FirstGrid>

        <SecondGrid>
          <SubjectProgress />

          <UpcomingClasses />

          <HomeWork />
        </SecondGrid>
        <RecentLesson />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  align-items: center;
  background-color: #f8f8f8;
  width: 100%;
`;
const FirstGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const SecondGrid = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;
