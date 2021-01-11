
import React from "react";
import {LangContext} from "../../context";
import {ThemeContext} from "../../context";
import {StyledTheme} from "../../components/StyledComponents";

const Settings = () => {
const LangContextx = React.useContext(LangContext);
const ThemeContextx = React.useContext(ThemeContext);

    return (
        <>
        <StyledTheme  as="h1">{LangContextx.Theme}</StyledTheme>
        <div className="Theme">
            <StyledTheme as="span" cursor="pointer" opacity={ThemeContextx.mode === "White" ? "0.5" : "" }  onClick={()=>ThemeContextx.updateTheme("Black")} >{LangContextx.Black} </StyledTheme>
            <StyledTheme as="span" cursor="pointer" opacity={ThemeContextx.mode === "Black" ? "0.5" : "" }  onClick={()=>ThemeContextx.updateTheme("White")} > {LangContextx.White}</StyledTheme>
        </div> 
        <StyledTheme as="h1">{LangContextx.Language}</StyledTheme>
        <div className="Language">
            <StyledTheme as="span" cursor={LangContextx.mode === "fr" ? "pointer" : "context-menu" } opacity={LangContextx.mode === "fr" ? "0.5" : "" } onClick={()=>LangContextx.updateTranslation("en")} >EN </StyledTheme>
            <StyledTheme as="span" cursor={LangContextx.mode === "en" ? "pointer" : "context-menu" } opacity={LangContextx.mode === "en" ? "0.5" : "" } onClick={()=>LangContextx.updateTranslation("fr")} > FR</StyledTheme>
        </div>
        </>
    );
};

export default Settings;
