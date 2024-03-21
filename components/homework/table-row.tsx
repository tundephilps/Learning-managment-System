import { IoIosMenu } from "react-icons/io";
import styled from "styled-components";

const getStatusColor = (status: string): string => {
  switch (status) {
    case "Submitted":
      return "orange";
    case "Evaluated":
      return "green";
    case "Pending":
      return "red";
    default:
      return "white";
  }
};

interface TableRowProps {
  data: {
    class: string;
    section: string;
    subjects: string;
    homeworkDate: string;
    submissionDate: string;
    evaluationDate: string;
    maxMarks: string;
    marksObtained: string;
    note: string;
    status: string;
  };
  onRowClick: (data: any) => void;
}

export const TableRow: React.FC<TableRowProps> = ({ data, onRowClick }) => {
  return (
    <tr onClick={() => onRowClick(data)}>
      <td>{data.class}</td>
      <td>{data.section}</td>
      <td>{data.subjects}</td>
      <td>{data.homeworkDate}</td>
      <td>{data.submissionDate}</td>
      <td>{data.evaluationDate}</td>
      <td>{data.maxMarks}</td>
      <td>{data.marksObtained}</td>
      <td>{data.note}</td>
      <td>
        <StatusButton status={data.status}>{data.status}</StatusButton>
      </td>
      <td>
        <IoIosMenu />
      </td>
    </tr>
  );
};

const StatusButton = styled.button<{ status: string }>`
  background-color: ${(props) => getStatusColor(props.status)};
  color: #fff;
  // padding: 4px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 55px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
