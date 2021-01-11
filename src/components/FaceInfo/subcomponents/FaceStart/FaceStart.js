import React from "react";
import { StyledTitle } from "../../../StyledComponents";
import { motion } from "framer-motion";
import MotionFade from "../../../Motion/MotionFade";


const FaceStart = ({ Fadecontroller, action,txt ,className}) => {
  return (
    <MotionFade controller={Fadecontroller} duration={0.8}>
      <motion.div className={className}>
      <StyledTitle
        as={motion.span}
        cursor="pointer"
        onClick={() => {
          action();
        }}
      >
        {txt}
      </StyledTitle>
      </motion.div>
    </MotionFade>
  );
};

export default FaceStart;
