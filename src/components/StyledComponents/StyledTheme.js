import styled from "styled-components";
// i DON't know if it's a good practice bUTTTTT YOlO

const StyledTheme = styled.div`
color: ${(props) => (props.fontcolor ? props.theme.colors.text : "")};
color: ${(props) => (props.fontcolorinvert ? props.theme.colors.background : "")};
background-color: ${(props) => props.backgroundcolor ? props.theme.colors.background : ""};
background-color: ${(props) => props.backgroundcolorinvert ? props.theme.colors.text : ""};
border-color:${(props) => (props.bordercolor ? props.theme.colors.text : "")};

filter:${(props) => (props.shadow ? `drop-shadow(2px 4px 6px ${props.theme.colors.text} )` : "")};
filter:${(props) => (props.shadowinvert ? `drop-shadow(2px 4px 6px ${props.theme.colors.background} )` : "")};

margin: ${(props) => (props.margin ? props.margin : "")};
margin-right: ${(props) => (props.marginright ? props.marginright : "")};
margin-left: ${(props) => (props.marginleft ? props.marginleft : "")};
margin-top: ${(props) => (props.margintop ? props.margintop : "")};
margin-bottom: ${(props) => (props.marginbottom ? props.marginbottom : "")};

padding: ${(props) => (props.padding ? props.padding : "")};
padding-right: ${(props) => (props.paddingright ? props.paddingright : "")};
padding-left: ${(props) => (props.paddingleft ? props.paddingleft : "")};
padding-top: ${(props) => (props.paddingtop ? props.paddingtop : "")};
padding-bottom: ${(props) => (props.paddingbottom ? props.paddingbottom : "")};

display:${(props) => (props.flex ? "flex" : "")};
position:${(props) => (props.absolute ? "absolute" : "")};
position:${(props) => (props.relative ? "relative" : "")};

right: ${(props) => (props.right ? props.right : "")};
left: ${(props) => (props.left ? props.left : "")};
top: ${(props) => (props.top ? props.top : "")};
bottom: ${(props) => (props.bottom ? props.bottom : "")};

font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
font-weight: ${(props) => (props.fontweight ? props.fontweight : "")};
letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : "")};

opacity: ${(props) => (props.opacity ? props.opacity : "")};
cursor: ${(props) => (props.cursor ? props.cursor : "")};
&:hover {
  color:  ${(props) => (props.hoverfontcolor ? props.theme.colors.background : "")};
  color: ${(props) => (props.hoverfontcolorinvert ? props.theme.colors.text : "")};
  background-color:  ${(props) =>props.hoverbackgroundcolor ? props.theme.colors.text : ""};
  border-color:${(props) => props.hoverbordercolor ? props.theme.colors.background : ""};

  margin: ${(props) => (props.hovermargin ? props.hovermargin : "")};
  margin-right: ${(props) => (props.hovermarginright ? props.hovermarginright : "")};
  margin-left: ${(props) => (props.hovermarginleft ? props.hovermarginleft : "")};
  margin-top: ${(props) => (props.hovermargintop ? props.hovermargintop : "")};
  margin-bottom: ${(props) => (props.hovermarginbottom ? props.hovermarginbottom : "")};

  padding: ${(props) => (props.hoverpadding ? props.hoverpadding : "")};
  padding-right: ${(props) => (props.hoverpaddingright ? props.hoverpaddingright : "")};
  padding-left: ${(props) => (props.hoverpaddingleft ? props.hoverpaddingleft : "")};
  padding-top: ${(props) => (props.hoverpaddingtop ? props.hoverpaddingtop : "")};
  padding-bottom: ${(props) => (props.hoverpaddingbottom ? props.hoverpaddingbottom : "")};

  display:${(props) => (props.hoverflex ? "flex" : "")};
  display:${(props) => (props.hoverAbsolute ? "absolute" : "")};
  display:${(props) => (props.hoverrelative ? "relative" : "")};

  font-size: ${(props) => (props.hoverfontSize ? props.hoverfontSize : "")};
  font-weight: ${(props) => (props.hoverfontweight ? props.hoverfontweight : "")};
  letter-spacing: ${(props) => (props.hoverletterSpacing ? props.hoverletterSpacing : "")};



  cursor: ${(props) => (props.hovercursor ? props.hovercursor : "")};
}
& path{
  stroke: ${(props) => (props.strokecolor ? props.theme.colors.text : "")};
  stroke: ${(props) => (props.strokecolorinvert ? props.theme.colors.background : "")};
}
transition:color 1s,background-color 1s,border-color 1s;
`;

export default StyledTheme;







