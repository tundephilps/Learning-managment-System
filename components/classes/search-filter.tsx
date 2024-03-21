import React from "react";
import { CiGrid42 } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { TfiViewListAlt } from "react-icons/tfi";
import styled from "styled-components";

interface SearchFilterProps {
  isList: boolean;
  setIsList: React.Dispatch<React.SetStateAction<boolean>>;
}

const Searchfilter: React.FC<SearchFilterProps> = ({ isList, setIsList }) => {
  return (
    <SearchFilter>
      <Heading style={{}}>Classes</Heading>
      <SearchBox>
        <FaSearch />
        <InputWrapper style={{}} />
        {isList == true ? (
          <ViewToggle onClick={() => setIsList(false)}>
            <TfiViewListAlt />
          </ViewToggle>
        ) : (
          <ViewToggle onClick={() => setIsList(true)}>
            <CiGrid42 />
          </ViewToggle>
        )}

        <Space />
      </SearchBox>
    </SearchFilter>
  );
};

export default Searchfilter;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 16px;
`;

const InputWrapper = styled.input`
  background-color: #d6d6d6;

  border: none;
  outline: none;
`;

const Space = styled.div`
  width: 12px;
`;

const SearchBox = styled.div`
  background-color: #d6d6d6;
  width: 300px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  //padding: "0px 12px";
  height: 30px;
  justify-content: space-around;
`;
const SearchFilter = styled.div`
  display: flex;

  align-items: center;

  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ViewToggle = styled.button`
  @media (max-width: 768px) {
    display: none;
  }
`;
