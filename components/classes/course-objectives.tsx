import React from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

const Courseobjectives = () => {
  return (
    <>
      <CourseObjectives>
        <ObjectiveTitle>Course Objective</ObjectiveTitle>
        <ObjectiveLists>
          <ObjectiveCard>
            <FaCheck size={28} />
            <ObjectiveItem>
              You will have an advanced understanding of how to set up and
              administrate an SAP Hybrids Landscape in production environment{" "}
            </ObjectiveItem>
          </ObjectiveCard>

          <ObjectiveCard>
            <FaCheck size={28} />
            <ObjectiveItem>
              You will have an advanced understanding of how to set up and
              administrate an SAP Hybrids Landscape in production environment{" "}
            </ObjectiveItem>
          </ObjectiveCard>
          <ObjectiveCard>
            <FaCheck size={28} />
            <ObjectiveItem>
              You will have an advanced understanding of how to set up and
              administrate an SAP Hybrids Landscape in production environment{" "}
            </ObjectiveItem>
          </ObjectiveCard>
          <ObjectiveCard>
            <FaCheck size={28} />
            <ObjectiveItem>
              You will have an advanced understanding of how to set up and
              administrate an SAP Hybrids Landscape in production environment{" "}
            </ObjectiveItem>
          </ObjectiveCard>
        </ObjectiveLists>
      </CourseObjectives>
    </>
  );
};

export default Courseobjectives;

const CourseObjectives = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 12px;
`;

const ObjectiveLists = styled.button`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
  }
`;

const ObjectiveCard = styled.div`
  width: 40%;
  padding: 20px 10px;
  flex-direction: "row";
  display: flex;
  gap: 12px;
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;
const ObjectiveTitle = styled.h1`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 30px;
`;

const ObjectiveItem = styled.p`
  font-size: 14px;
`;
