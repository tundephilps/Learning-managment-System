"use client";
import React from "react";
import styled from "styled-components";

interface TableData {
  subjects: string;
  topics: string;
  lessons: number;
  lastOpenedDate: string;
}

const RecentLesson: React.FC = () => {
  // Sample data
  const data: TableData[] = [
    {
      subjects: "Math",
      topics: "Algebra",
      lessons: 10,
      lastOpenedDate: "2024-01-17",
    },
    {
      subjects: "Science",
      topics: "Biology",
      lessons: 8,
      lastOpenedDate: "2024-01-16",
    },
    {
      subjects: "Math",
      topics: "Algebra",
      lessons: 10,
      lastOpenedDate: "2024-01-17",
    },
    {
      subjects: "Science",
      topics: "Biology",
      lessons: 8,
      lastOpenedDate: "2024-01-16",
    },
    // Add more data as needed
  ];

  return (
    <Wrapper>
      <Container>
        <Name>Recently Opened Lessons</Name>
        <Table>
          <thead>
            <tr>
              <TableHeader>Subjects</TableHeader>
              <TableHeader>Topics</TableHeader>
              <TableHeader>Lessons</TableHeader>
              <TableHeader>Last Opened Date</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <TableRow key={index} isEven={index % 2 === 1}>
                <TableCell>{row.subjects}</TableCell>
                <TableCell>{row.topics}</TableCell>
                <TableCell>{row.lessons}</TableCell>
                <TableCell>{row.lastOpenedDate}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Container>
    </Wrapper>
  );
};

export default RecentLesson;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: #f8f8f8;
  padding: 10px;
  text-align: left;
  font-size: 10px;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr<{ isEven: boolean }>`
  background-color: ${({ isEven }) => (isEven ? "#f8f8f8" : "transparent")};
  font-size: 10px;
`;

const Name = styled.h1`
  font-weight: 500;
`;

const Wrapper = styled.div`
  gap: 12px;
  margin-top: 12px;
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
`;

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  padding: 8px;
`;
