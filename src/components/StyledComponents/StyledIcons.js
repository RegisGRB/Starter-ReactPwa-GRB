import React from "react";

import styled from "styled-components";
import StyledTheme from "./StyledTheme";


const StyledIcon = styled(StyledTheme)`
&path{
    stroke:${(props) => ( props.theme.colors.text )}
}
`;
const StyledIcons = ({Icon,style,action, ...props }) => {
  return (
  <StyledIcon as={Icon} style={style} onclick={()=> action()}></StyledIcon>
  );
};

export default StyledIcons;
