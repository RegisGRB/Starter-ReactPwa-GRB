import React from "react";
import "./FaceGame.scss";
import FaceGrid from "../../components/FaceGrid/FaceGrid";
import { helpers } from "../../utils";
import FaceInfo from "../../components/FaceInfo/FaceInfo";
import Mode from "./Mode";
const FaceGame = ({ children, ...props }) => {
  const [level, setlevel] = React.useState(1);
  const [ModeSelected, setModeSelected] = React.useState("Ranked");
  const [item, setitem] = React.useState(Mode[ModeSelected].item);
  const maxItems = 29;
  const [CountdownTime, setCountdownTime] = React.useState(Mode[ModeSelected].CountdownTime);
  const [CountdownAdd, setCountdownAdd] = React.useState(Mode[ModeSelected].CountdownAdd);
  const [itemAdd, setitemAdd] = React.useState(Mode[ModeSelected].itemAdd);
  const [Highscore, seHighscore] = React.useState(localStorage.getItem("Highscore") ? localStorage.getItem("Highscore").split(",") : []);
  const [ImageType, setImageType] = React.useState(Mode[ModeSelected].ImageType);
  const [fakeElement, setfakeElement] = React.useState(null);
  const refHideElement = React.useRef(null);

  const ShowSus = React.useCallback(() => {
    refHideElement.current.id = "sus";
  }, [refHideElement]);

  const StartGame = () => {
    setlevel(1);
    setSettings(ModeSelected);
    setfakeElement(GetFakeElement());
  };

  const GetFakeElement = React.useCallback(() => {
    let x;
    do {
      x = helpers.getrandomInt(maxItems);
    } while (x === fakeElement);
    return x;
  }, [fakeElement, maxItems]);

  const setSettings = (changeMode) => {
    setModeSelected(changeMode);
    setitem(Mode[changeMode].item);
    setCountdownAdd(Mode[changeMode].CountdownAdd);
    setCountdownTime(Mode[changeMode].CountdownTime);
    setImageType(Mode[changeMode].ImageType);
    setitemAdd(Mode[changeMode].itemAdd);
  };

  const WinAction = React.useCallback(() => {
    if (refHideElement.current.id === "sus") {
      if ((item === maxItems && CountdownAdd > 0) || (item === 0 && CountdownAdd < 0)) {
        alert("YOU BEAT FACEGAME");
        setfakeElement(null);
      } else {
        setlevel(level + 1);
        setitem(itemAdd + item);
        setCountdownTime(Number((Math.round((CountdownAdd + CountdownTime) * 100) / 100).toFixed(2)));
        setfakeElement(GetFakeElement());
      }
    }
  }, [level,item,CountdownTime,CountdownAdd,refHideElement,maxItems,itemAdd,GetFakeElement]);

  const loseAction = () => {
    if (refHideElement.current.id === "sus") {
      if (ModeSelected === "Ranked") {
        seHighscore([...Highscore,item
          // (level + item - (CountdownAdd + CountdownTime)) * 1000,
        ]);
        localStorage.setItem("Highscore", Highscore);
      }
      setfakeElement(null);
    }
  };

  return (
    <div className="FaceContainer">
      <FaceGrid
        item={item}
        maxItems={maxItems}
        fakeElement={fakeElement}
        WinAction={WinAction}
        loseAction={loseAction}
        refHideElement={refHideElement}
        ImageType={ImageType}
      ></FaceGrid>
      <FaceInfo
        level={level}
        item={item}
        fakeElement={fakeElement}
        CountdownTime={CountdownTime}
        ShowSus={ShowSus}
        StartGame={StartGame}
        Highscore={Highscore}
        setSettings={setSettings}
        ModeSelected={ModeSelected}
      ></FaceInfo>
    </div>
  );
};

export default FaceGame;
