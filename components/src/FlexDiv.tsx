import { array, element, node, oneOfType } from "prop-types";
import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
`;

export const FlexDiv = (props: any) => (
  <Flex className={props.className}>{props.children}</Flex>
);

FlexDiv.propTypes = {
  children: oneOfType([array, element, node]),
};
