"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "@/components/homework/modal";
import { TableRow } from "@/components/homework/table-row";
import { homeworkData } from "../mock-data";

interface DataItem {
  id: number;
  class: string;
  section: string;
  subjects: string;
  homeworkDate: string;
  submissionDate: string;
  evaluationDate: string;
  maxMarks: number;
  marksObtained: number;
  note: string;
  status: string;
}

const homework: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<DataItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleRowClick = (data: DataItem) => {
    setSelectedRow(data);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (formData: {
    message: string;
    file: File | null;
  }) => {
    console.log("Submitted Data:", formData);
    // Perform API call to submit formData to the backend
  };
  return (
    <Wrapper>
      <TableContainer>
        <thead>
          <tr>
            <th>Class</th>
            <th>Section</th>
            <th>Subjects</th>
            <th>Homework Date</th>
            <th>Submission Date</th>
            <th>Evaluation Date</th>
            <th>Max Marks</th>
            <th>Marks Obtained</th>
            <th>Note</th>
            <th>Status</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {homeworkData.map((item) => (
            <TableRow key={item.id} data={item} onRowClick={handleRowClick} />
          ))}
        </tbody>
      </TableContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </Wrapper>
  );
};

export default homework;

const Wrapper = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    overflow: scroll;
    overscroll-behavior: initial;
  }
`;
// Styles for the table
const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border-bottom: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    white-space: nowrap;
  }

  th {
    background-color: #f2f2f2;
    font-weight: 700;
    font-size: 10px;
  }

  tbody tr {
    cursor: pointer;

    font-size: 10px;
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }
`;
