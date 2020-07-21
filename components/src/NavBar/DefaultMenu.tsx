import React from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core'

const FlexUl = styled.ul`
  display: flex;
  list-style-type:none;
  align-items: center;
  margin: 0;
  padding: 0;
`
const Li = styled.li`
  margin-left: 1em;
`

const DefaultMenu = ()=>(
  <FlexUl>
    <Li><Button>About</Button></Li>
    <Li><Button>Contact</Button></Li>
  </FlexUl>
);

export default DefaultMenu;
