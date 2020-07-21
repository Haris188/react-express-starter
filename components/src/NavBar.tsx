import React from "react";
import styled from "styled-components";

import { Logo } from "./Logo";
import { MarginedContainer } from './MarginedContainer';
import DefaultMenu from "./NavBar/DefaultMenu";

const NavDiv = styled.div`
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

export const NavBar = () => (
  <NavDiv>
    <MarginedContainer>
      <NavContainer>
        <Logo />
        <DefaultMenu />
      </NavContainer>
    </MarginedContainer>
  </NavDiv>
);
