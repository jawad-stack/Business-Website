import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;

  animation: square 9s linear alternate infinite;
  @keyframes square {
    to {
      transform: translate(50vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #ff97af;
  opacity: 0.7;
  position: absolute;
  top: 200px;
  left: -10px;
  z-index: -1;

  animation: circle 9s linear alternate infinite;
  @keyframes circle {
    to {
      transform: translate(50vw, -30vh);
    }
  }
`;

const Rect = styled.div`
  width: 50px;
  height: 70px;
  background-color: #669966;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;

  animation: rect 9s linear alternate infinite;

  @keyframes rect {
    to {
      transform: translate(50vw, -50vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      <Rect />
    </>
  );
};

export default AnimatedShapes;
