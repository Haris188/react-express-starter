import React from "react";
import styled from "styled-components";

import { CenteredFlexDiv } from "@vetapp/components";
import {Button } from '@material-ui/core'

const RedDot = styled.div`
  height: 1em;
  width: 1em;
  border-radius: 50%;
  background-color: red;
  margin-right: 5px;
`;
const BoldP = styled.p`
  font-size: 3em;
  font-weight: bold;
`;

const handleCtaClick = () => {
  //controllers.redirect("/login");
};

export const ActionButton = () => (
  <Button color="primary" variant = "contained" onClick={handleCtaClick}>
    <div>
      <p>Our doctors are available and the are</p>
      <CenteredFlexDiv>
        <RedDot />
        <BoldP>LIVE</BoldP>
      </CenteredFlexDiv>
    </div>
  </Button>
);
