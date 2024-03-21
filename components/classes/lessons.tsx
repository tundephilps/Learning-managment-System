import React from "react";
import { MdArrowDropDown, MdOutlineOndemandVideo } from "react-icons/md";
import styled from "styled-components";

import { useRouter } from "next/navigation";

interface TopicsProps {}

const Lesson: React.FC<TopicsProps> = () => {
  const router = useRouter();

  const navigate = (page: string) => {
    router.push(page);
  };
  return (
    <>
      {" "}
      <Lessons>
        <RequirementTitle>Course Content</RequirementTitle>
        <Stats>1 Section * 14 Lectures * 1h 39m total length </Stats>
        <CourseTable>
          <TableHeader>
            <Outline>
              <MdArrowDropDown /> <H1>OutLine</H1>
            </Outline>
            <H1>14 Lectures * 1hr 29min</H1>
          </TableHeader>
          <CourseOutline>
            <Course onClick={() => navigate("/classes/topics/lesson")}>
              <Sides>
                <MdOutlineOndemandVideo />
                <BlueLabel>Introduction</BlueLabel>
              </Sides>

              <Sides>
                <BlueLabel> Preview</BlueLabel> <H1>4:02</H1>
              </Sides>
            </Course>
            <Course onClick={() => navigate("/classes/topics/lesson")}>
              <Sides onClick={() => navigate("/classes/topics/lesson")}>
                <MdOutlineOndemandVideo />
                <BlueLabel>Project OverView</BlueLabel>
              </Sides>

              <Sides>
                <BlueLabel> Preview</BlueLabel> <H1>3:27</H1>
              </Sides>
            </Course>
            <Course onClick={() => navigate("/classes/topics/lesson")}>
              <Sides>
                <MdOutlineOndemandVideo />
                <H1>Lesson 1</H1>
              </Sides>

              <Sides>
                <H1>3:29</H1>
              </Sides>
            </Course>
            <Course onClick={() => navigate("/classes/topics/lesson")}>
              <Sides>
                <MdOutlineOndemandVideo />
                <H1>Lesson 2</H1>
              </Sides>

              <Sides>
                <H1>47:20</H1>
              </Sides>
            </Course>
            <Course onClick={() => navigate("/classes/topics/lesson")}>
              <Sides>
                <MdOutlineOndemandVideo />
                <H1>Lesson 3</H1>
              </Sides>

              <Sides>
                <H1>2:30:27</H1>
              </Sides>
            </Course>
            <Course onClick={() => navigate("/classes/topics/lesson")}>
              <Sides>
                <MdOutlineOndemandVideo />
                <H1>Lesson 4</H1>
              </Sides>

              <Sides>
                <H1>43:00</H1>
              </Sides>
            </Course>
          </CourseOutline>
        </CourseTable>
      </Lessons>
    </>
  );
};

export default Lesson;

const RequirementTitle = styled.h1`
  font-weight: 700;
  font-size: 30px;
`;

const Lessons = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 12px;
  width: 100%;
`;
const TableHeader = styled.div`
  background-color: #e8e7e7;
  padding: 12px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;
const Stats = styled.p`
  font-size: 12px;
  font-weight: 600;
`;
const Outline = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CourseTable = styled.div`
  border-color: gray;
  height: 400px;
  width: 100%;
  border-width: 1px;
  margin-top: 10px;
  border-radius: 2px;
`;
const Sides = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BlueLabel = styled.h1`
  text-decoration-line: underline;
  color: blue;
`;

const CourseOutline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
`;

const Course = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

const H1 = styled.h1`
  font-size: 14px;
`;
