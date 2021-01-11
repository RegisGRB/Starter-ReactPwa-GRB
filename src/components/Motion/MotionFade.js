import React from "react";
import MotionBox from "./MotionBox";

const MotionFade = ({ controller, children,show=[0,0,1],hidden=[-10,0,0],duration=1.6 ,exitbeforeenter=false}) => {
  const transition = { duration: duration, ease: [0.6, 0.01, -0.05, 0.9] };
  const variants = {
    show: { y: show[0], x: show[1], opacity: show[2], transition },
    hidden: { y: hidden[0],x:hidden[1], opacity: hidden[2], transition },
  };
  return (
    <MotionBox controller={controller} variants={variants} exitbeforeenter={exitbeforeenter}>
      {children}
    </MotionBox>
  );
};

export default MotionFade;
