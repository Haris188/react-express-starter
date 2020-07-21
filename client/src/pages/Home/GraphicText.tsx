import React, {useContext, useEffect} from "react";
import styled from "styled-components";

import {DimensionContext} from '../../App'

import {  MarginedContainer } from "@vetapp/components";

import dogImage from '../../assets/dog.png'
import ModalImage from '../../assets/home-heading.svg'

const BlackText = styled.h1`
  font-size: 4em;
  text-shadow: 2px 2px 21px rgba(150, 150, 150, 0.8);
  text-align: center;
  @media only screen and (min-width:600px){
    font-size: 6em;
  }
`;
const WhiteText = styled(BlackText)`
  color: white;
`;
const Image = styled.img`
  width: 9em;
  @media only screen and (min-width:600px){
    width: 12em;
  }
`;
const DeskImg = styled.img`
  width: 60em;
  font-family: 'Montserrat', sans-serif;
  `
const CenteredMarginContainer = styled(MarginedContainer)`
  display:flex;
  flex-direction: column;
  align-items:center;
`

const DesktopModal = ()=>(
  <DeskImg src={ModalImage} alt="Online vet"/>
)

const MobileModal =()=>(
  <>
    <Image src={dogImage} />,
    <BlackText>ONLINE</BlackText>,
    <WhiteText>VET</WhiteText>,
  </>
)

export const GraphicText = () => {
  const dim = useContext(DimensionContext)

  useEffect(()=>{
    console.log(dim)
  },[dim])

  return (
    <CenteredMarginContainer>
      {(dim.onMobile || dim.onTablet) && <MobileModal />}
      {dim.onDesktop && <DesktopModal />}
    </CenteredMarginContainer>
  );
};
