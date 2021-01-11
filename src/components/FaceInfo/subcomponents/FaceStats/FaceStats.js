import React from 'react';
import MotionFade from "../../../Motion/MotionFade";
import { motion } from "framer-motion";
import { LangContext } from "../../../../context";
import StyledTheme from "../../../StyledComponents/StyledTheme";
import "./FaceStats.scss"
const FaceStats = ({level,item}) => {
    const LangContextx = React.useContext(LangContext);
    return (
        <MotionFade controller={null} hidden={[10,0,0]} >
        <motion.div className="FaceGameInfo">
          <StyledTheme as="li">
            <span>{level}</span> <p>{LangContextx.Level}</p>
          </StyledTheme>
          <StyledTheme as="li" >
            <span>{item}</span> <p>{LangContextx.Items}</p>
          </StyledTheme>
        </motion.div>
      </MotionFade>
    );
};

export default FaceStats;