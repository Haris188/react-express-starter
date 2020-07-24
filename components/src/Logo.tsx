import React from "react";
import styled from 'styled-components'

const Text = styled.p`
  font-size: 1.3em;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Logo = () => <Text>app</Text>;
