import React from 'react'
import styled from 'styled-components'

const Container = styled.div`jk
    height: 50px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

`;

const left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
`;

const Logo = styled.h1`
    font-weight : bold;
    text-decoration: underlined crimson 
`
const Menu = styled.ul`
    display: flex;
    list-style: none;
`;

const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;    
`;

const Button = styled.button`
    border: 2px solid black;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <span>
                    <Logo>Agency</Logo>
                </span>
                <Menu>
                    <MenuItem>HOME</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
                <button>Join Now</button>
            </Wrapper>
        </Container>
    )
}

export default Navbar
