import React from 'react'
import styled from 'styled-components'
import BPLogo  from './images/BPlano_Logo.png'

const LogoWrapper = styled.div`
display: flex;
align-items: center;
`;

const LogoImg= styled.div`
margin: 0;
img{
    width: 70%;
    height: 70%;
}
`;

export function Logo(props){
    return <LogoWrapper>
        <LogoImg><img src={ BPLogo } alt="BPlano Logo"/></LogoImg>
    </LogoWrapper>

}