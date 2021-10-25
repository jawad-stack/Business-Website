import React from "react";
import styled from "styled-components";
import Phone from "../img/app.png";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 35%;
  height: 80%;
  margin-left: 35%;
  margin-top: 5%;
`;
const Features = () => {
  return (
    <Container>
      <Left>
        <Image src={Phone} />
      </Left>
      <Right></Right>
    </Container>
  );
};

export default Features;
