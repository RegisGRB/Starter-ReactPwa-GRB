import React from "react";
import FaceStart from "./subcomponents/FaceStart/FaceStart";
import FaceModalSettings from "./subcomponents/FaceModalSettings/FaceModalSettings";
import FaceCountDown from "./subcomponents/FaceCountDown/FaceCountDown";
import FaceStats from "./subcomponents/FaceStats/FaceStats";
import FaceModalHighscore from "./subcomponents/FaceModalHighscore/FaceModalHighscore";
import "./FaceInfo.scss";
import FaceBranding from "./subcomponents/FaceBranding/FaceBranding";
const FaceInfo = ({
  item,
  level,
  fakeElement,
  ShowSus,
  CountdownTime,
  StartGame,
  Highscore,
  setSettings,
  ModeSelected
}) => {
  return (
    <>
      <FaceBranding Fadecontroller={fakeElement} Highscore={Highscore} ModeSelected={ModeSelected} item={item}></FaceBranding>
      <FaceModalSettings Fadecontroller={fakeElement} setSettings={setSettings} ModeSelected={ModeSelected} />
      <div className="UserController">
        <FaceStart Fadecontroller={fakeElement} action={StartGame} txt="Start" className="StartTrigger"/>
        <FaceModalHighscore Fadecontroller={fakeElement} Highscore={Highscore}></FaceModalHighscore>
      </div>
      <FaceCountDown Fadecontroller={null} CountdownController={fakeElement} hidden={[10,0,0]} CountdownTime={CountdownTime}  callback={ShowSus}/>
      <FaceStats item={item} level={level} ></FaceStats>
    </>
  );
};
  
export default FaceInfo;
