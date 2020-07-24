import {
    MarginedContainer,
    NavBar,
  } from "@app/components";
  import {
    ActionButton,
    GraphicText,
  } from './Home/index'
  import React from "react";
  import styled from "styled-components";
  
  const Container = styled.div`
  background: rgb(255,232,55);
  background: radial-gradient(circle, rgba(255,232,55,1) 51%, rgba(254,228,32,1) 100%);
  height: 100vh;
  `;
  const CenterContainer = styled(MarginedContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
  `;
  
  const Index = () => {
    return (
      <Container>
        <NavBar />
        <CenterContainer>
          <GraphicText />
          <ActionButton />
        </CenterContainer>
      </Container>
    );
  }
  
  export default Index;
  