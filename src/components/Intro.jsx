import React from "react";
import styled from "styled-components";

const Container = styled.div`
  // height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;
const Left = styled.div`
  height: calc(100vh - 50px);
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;
const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;
const Info = styled.div`
  width: 60%;
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px:
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
`;

const Right = styled.div`
  // height: calc(100vh - 50px);
  width: 40%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in Creative age</Title>
        <Desc>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it o ver 2000 years old.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us (+92) 314 - 9622724</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right></Right>
    </Container>
  );
};

export default Intro;
