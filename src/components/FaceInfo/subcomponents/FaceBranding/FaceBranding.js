import React from "react";
import { StyledTheme } from "../../../StyledComponents";
import { motion } from "framer-motion";
import Mode from "../../../../pages/FaceGame/Mode";
import MotionFade from "../../../Motion/MotionFade";
import "./FaceBranding.scss";
import PwaInstall from "../../../ui/PWAInstall/PwaInstall";
const FaceBranding = ({ Fadecontroller, Highscore,ModeSelected,item }) => {
  return (
    <MotionFade controller={Fadecontroller} duration={0.8}>
      <motion.div className="FaceBranding">
        <StyledTheme as="h1" fontSize="1.5rem">
          FACEGAME<br></br>
          <span>GRB-GAME 2019 | {new Date().getFullYear()}</span>
          <br></br>
          <PwaInstall></PwaInstall>
        </StyledTheme>
       
        <div className="Highscore">
           {(item !== Mode[ModeSelected].item ) && (
            <>
              <StyledTheme fontSize="2rem" opacity="0.5">{ModeSelected} Score</StyledTheme>
              <StyledTheme fontSize="2rem">
                {ModeSelected !=="Ranked" ? item : Highscore[Highscore.length - 1]}
              </StyledTheme>
              
            </>
          )}
        </div>
      </motion.div>
    </MotionFade>
  );
};

export default FaceBranding;
