import React from "react";
import MotionFade from "./MotionFade";
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledTheme from "../StyledComponents/StyledTheme";

const MotionModal = ({ controller, children ,hidden=["100vh",0,1],duration=1.6}) => {

  return (
    <MotionFade controller={controller} exitbeforeenter={true} show={[0,0,1]} hidden={hidden} duration={duration}>
      <StyledModal as={motion.div} backgroundcolor="true" >
        {children}
      </StyledModal>
    </MotionFade>
  );
};



const StyledModal = styled(StyledTheme)`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
z-index:9999
`;


export default MotionModal;
