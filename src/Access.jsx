import React from "react";
import styled from "styled-components";

const AccessContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 8px;
  background-color: #F7941D;
  cursor: pointer;
  &:hover {
    background-color: #EF5687;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 8px;
  background-color: transparent;
  border: 2px solid #F7941D;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #EF5687;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Access(props){
return <AccessContainer>
    <RegisterButton>REGISTER</RegisterButton>
      <LoginButton>LOGIN</LoginButton>
</AccessContainer>
}