import React from 'react';
import styled from 'styled-components';

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
`
const Desc = styled.p`
    width: 40%;
    margin-top: 20px;
`
const Right = styled.div`
    height: calc(100vh - 50px);
    width: 40%;
`;
const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Adventures in Creative age</Title>
                <Desc>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, making it o
                    ver 2000 years old. </Desc>
            </Left>
            <Right></Right>
        </Container>
    )
};

export default Intro;
