import styled from "styled-components";
import StyledTheme from "./StyledTheme";


const StyledTitle = styled(StyledTheme)`
text-shadow:${(props) => ( props.theme.colors.text )} 0px 0px 30px ;
text-transform: uppercase;
letterSpacing:"5px";

`;
StyledTitle.defaultProps={
    fontSize:"2rem"
}

export default StyledTitle;







