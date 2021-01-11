import React from "react";
import RotateText from "../../../ui/RotateText/RotateText";
import { AiOutlineSetting } from "react-icons/ai";
import { LangContext } from "../../../../context";
import Settings from "../../../Settings/Settings";
import Modal from "../../../ui/Modal/Modal";
import "./FaceModalSettings.scss";
import Form from "../../../ui/Form/Form";
import Mode from "../../../../pages/FaceGame/Mode";
import { StyledTheme } from "../../../StyledComponents";
const FaceModalSettings = ({ Fadecontroller,setSettings,ModeSelected }) => {
  
  const LangContextx = React.useContext(LangContext);
  return (
    <>
      <Modal
        Fadecontroller={Fadecontroller}
        ModalContent={<ModalContent setSettings={setSettings} ModeSelected={ModeSelected}></ModalContent>}
        ModalContentAnimation={[0, "-100vh", 1]}
        triggerClassName="FaceSettings"
        Modaltriggerduration={0.8}
        ModaltriggerAnimation={["-20vh", "20vh", 1]}
      >
        <RotateText
          text={`${LangContextx.Settings} - ${LangContextx.Settings} - ${LangContextx.Settings} - ${LangContextx.Settings} - `}
          arc={360}
          radius={40}
          size="0.5rem"
          cursor="pointer"
        >
          <AiOutlineSetting style={{ fontSize: "1.5rem" }} />
        </RotateText>
      </Modal>
    </>
  );
};
const ModalContent = ({setSettings,ModeSelected}) =>{
const [fielx,setfielx] = React.useState([])

const GetFields= () =>{
  let field = []
  for(let x in Mode){
    field[x] =  {
      checked: ModeSelected === x ? true : false,
      name:"Radio",
      label: x,
      type: "Radio",
      placeholder: "",
      value:x,
      Change:setSettings
    }
  }
  setfielx(field);
}
React.useEffect(()=>{
 GetFields(); 
},[ModeSelected]);
  return (
    <div className="ModalSettings">
      <div className="defaultFields">
      <Settings></Settings>
      </div>
      <div className="ModeFields">
      <StyledTheme as="h1">Mode de jeux</StyledTheme>
      <Form Fields={fielx} Action={setSettings} className="ModeSelector"></Form>
      <ul className="ModeShow">
        <li><span>Item de depart: </span>{Mode[ModeSelected].item}</li>
        <li><span>Item a chaque manche: </span>{Mode[ModeSelected].itemAdd}</li>
        <li><span>temps de depart: </span>{Mode[ModeSelected].CountdownTime}</li>
        <li><span>temps a chaque manche: </span>{Mode[ModeSelected].CountdownAdd}</li>
        <li><span>type d'image: </span>{Mode[ModeSelected].ImageType}</li>
      </ul>
      </div>
    </div>
  )
}
export default FaceModalSettings;
