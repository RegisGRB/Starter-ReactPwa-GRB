import React from 'react';
import MotionFade from "../../Motion/MotionFade";
import { motion } from "framer-motion";
import {GrClose} from "react-icons/gr";
import MotionModal from "../../Motion/MotionModal";
import { StyledTheme } from '../../StyledComponents';
const Modal = ({Fadecontroller,ModalContent,triggerClassName,ModalContentAnimation,ModalContentduration,ModaltriggerAnimation,Modaltriggerduration,...props}) => {
const [openSettings,setopenSettings] = React.useState(false);

    return (
        <>
        <MotionFade controller={Fadecontroller} hidden={ModaltriggerAnimation} duration={Modaltriggerduration}>
            <motion.div className={triggerClassName} onClick={() => {setopenSettings(null)}}>
                {props.children}
            </motion.div>
      </MotionFade>
        <MotionModal controller={openSettings} hidden={ModalContentAnimation} duration={ModalContentduration}>
            {ModalContent}
            <StyledTheme as={GrClose} strokecolor="true" onClick={()=>setopenSettings(false)} cursor="pointer" absolute="true" top="10%" right="10%" ></StyledTheme>
        </MotionModal>
    </>
    );
};

export default Modal;