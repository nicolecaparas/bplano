import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavLinksContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
`;

const LinksWrapper = styled.ul`
margin: 0;
padding: 0;
display: flex;
height: 100%;
list-style: none;
`;

const LinkItem = styled.li`
height: 100%;
padding: 0 1.1em;
color: #ffffff;
font-weight: 500;
font-size: 16px;
align-items: center;
justify-content: center;
display: flex;

&:hover{
    color: #F7941D;
}
`;

export function Nav(props){
    return <NavLinksContainer>
        <LinksWrapper>
        <LinkItem><Link to="/">HOME</Link></LinkItem>
        <LinkItem><Link to="/ourstory">OUR STORY</Link></LinkItem>
        <LinkItem><Link to="/boxplanner">BOX PLANNER</Link></LinkItem>
        <LinkItem><Link to="/contact">CONTACT</Link></LinkItem>
        
        </LinksWrapper>
    </NavLinksContainer>
}
