import React from "react";
import styled from "styled-components";

const background = () => {
  return <Wrapper></Wrapper>;
};

export default background;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  //background-image: url("/background.svg");
  background-size: cover;
  background-color: blue;
`;
