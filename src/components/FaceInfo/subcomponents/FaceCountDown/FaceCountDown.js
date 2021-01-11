import React from 'react';
import CountDown from "../../../ui/CountDown/CountDown";
import MotionFade from "../../../Motion/MotionFade";
import { motion } from "framer-motion";
import "./FaceCountDown.scss"
const FaceSettings = ({Fadecontroller,callback,CountdownTime,CountdownController}) => {
    return (
      <MotionFade controller={Fadecontroller} hidden={[10,0,0]}>
      <motion.div className="FaceGameCountDown">
        <CountDown
          minutes
          seconds
          millisec
          callback={callback}
          Controller={CountdownController}
          CountdownTime={CountdownTime}
          className="FaceGameCountDown"
        ></CountDown>
      </motion.div>
    </MotionFade>
    );
};

export default FaceSettings;