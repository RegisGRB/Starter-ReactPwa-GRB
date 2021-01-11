import React from "react";
import FaceFill from "./subcomponents/FaceFill";
import "./FaceGrid.scss"
const FaceGrid = ({item,maxItems,fakeElement,WinAction,loseAction,refHideElement,ImageType}) => {

  return (
    <div className="FaceGridContainer">
      <FaceFill item={item} maxItems={maxItems} fakeElement={fakeElement} className={"top"} refHideElement={refHideElement} ImageType={ImageType}></FaceFill>
     <FaceFill item={item} maxItems={maxItems} fakeElement={fakeElement} className={"bottom"} WinAction={WinAction} loseAction={loseAction} ImageType={ImageType}></FaceFill>
    </div>
  );
};

export default FaceGrid;
