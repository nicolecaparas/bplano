import React, { useState }from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MenuToggle } from './MenuToggle'
import { Access } from './Access'

const NavLinks = styled.div`
height: 100%;
display: flex;
align-items: center;
`;

const LinksWrapper = styled.ul`
z-index: 99;
overflow: auto;
height: 100%;
width: 100%;
margin: 0 ;
padding: 0;
display: flex;
list-style: none;
background-color: rgb(251 191 36);
width: 100%;
flex-direction: column;
top: 6rem;
position: fixed;
left: 0;
`;

const LinkItem = styled.li`
width: 100%;
padding: 0 1.5em 0 1.5em;
margin-top: 1.2em;
color: rgb(251 191 36);
font-weight: 500;
font-size: 16px;
display: flex;
color: white;
&:hover{
    color: #F7941D;
}
margin-bottom: 10px;
`;

const Marginer= styled.div`
height: 1em;
`;

export function MobileNavLinks(props){
    const [isOpen, setOpen] = useState(false);

    return (
        <NavLinks>
        <MenuToggle isOpen={isOpen} toggle={()=> setOpen(!isOpen)} />
        {isOpen && (
        <LinksWrapper>
        <LinkItem><Link to="/">HOME</Link></LinkItem>
        <LinkItem><Link to="/ourstory">OUR STORY</Link></LinkItem>
        <LinkItem><Link to="/boxplanner">BOX PLANNER</Link></LinkItem>
        <LinkItem><Link to="/contact">CONTACT</Link></LinkItem>
        <Marginer/>
        <Access />
        </LinksWrapper>
        )}
    </NavLinks>
    );
}
