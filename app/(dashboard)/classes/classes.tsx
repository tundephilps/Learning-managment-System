"use client";
import React, { useState } from "react";
import styled from "styled-components";
import ListView from "@/components/classes/list-view";
import GridView from "@/components/classes/grid-view";
import Searchfilter from "@/components/classes/search-filter";

const classes = () => {
  const [isList, setIsList] = useState(true);
  return (
    <>
      <PageWrapper>
        <Searchfilter isList={isList} setIsList={setIsList} />

        {isList == false && <ListView />}
        {isList == true && <GridView />}
      </PageWrapper>
    </>
  );
};

export default classes;

const PageWrapper = styled.div`
  width: 100%;
  padding: 12px;
`;
