import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  opacity: 0.1;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
`;

const AnimatedShapes = () => {
  return <Square />;
};

export default AnimatedShapes;
