import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { Access } from './Access'
import { DeviceSize } from './responsive'
import { useMediaQuery } from 'react-responsive'
import { MobileNavLinks } from './MobileNav'

const HeaderContainer = styled.div`
width: 100%;
height: 6rem; 
background-color: rgb(251 191 36);
box-shadow: 0 0px 2px rgba(15, 15,0.13);
display: flex;
align-items: center;
padding: 0 1.5em;
`;

const LeftSection = styled.div`
display: flex;
`;

const MiddleSection = styled.div`
display: flex;
flex: 2;
height:100%;
justify-content: center;
`;

const RightSection= styled.div`
display: flex;
`;

export function Header(props){
    const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile})
    return (
        <HeaderContainer>
        <LeftSection>
            <Link to="/">
            <Logo/>
            </Link>
        </LeftSection>

        <MiddleSection>
            {!isMobile && <Nav />}
        </MiddleSection>

        <RightSection>
            {!isMobile && <Access />}
            {isMobile && <MobileNavLinks />}
        </RightSection>
    </HeaderContainer>
    );
}

export default Header
