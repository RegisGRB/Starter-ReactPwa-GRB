import React from "react";
import { AnimatePresence } from "framer-motion";
const MotionBox = ({ controller, variants,exitbeforeenter=false, ...props }) => {
  return (
    <AnimatePresence exitBeforeEnter={exitbeforeenter}>
      {controller === null && (
          React.cloneElement(props.children, {
            initial: "hidden",
            animate: controller != null ? "hidden" : "show",
            exit: "hidden",
            variants: variants,
          })
      )}
    </AnimatePresence>
  );
};

export default MotionBox;
