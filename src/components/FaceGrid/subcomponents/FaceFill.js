import React from "react";
import { helpers } from "../../../utils";
import styled from "styled-components";
import { StyledTheme } from "../../StyledComponents";

const FaceFill = ({
  item,
  maxItems,
  fakeElement,
  loseAction,
  WinAction,
  refHideElement,
  className,
  ImageType = "x",
}) => {
  const [ArrayElements, setArrayElements] = React.useState([]);
  // const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  React.useEffect(() => {
    setArrayElements([]);
    const fillArray = () => {
      let inArray = [fakeElement];
      let ObjectArray = [];
      let x = 0;
      ObjectArray.push(
        <StyledImg
          key={helpers.generateKey(fakeElement + className)}
          onClick={() => (WinAction ? WinAction() : () => {})}
          ref={refHideElement}
          id={`${ImageType}${fakeElement + 1}`}
        ></StyledImg>
      );

      for (let y = 1; y <= item - 1; y++) {
        do {
          x = helpers.getrandomInt(maxItems);
        } while (inArray.includes(x));

        ObjectArray.push(
          <StyledImg
            key={helpers.generateKey(x + className)}
            onClick={() => (loseAction ? loseAction() : () => {})}
            ref={null}
            id={`${ImageType}${x + 1}`}
          ></StyledImg>
        );
        inArray.push(x);
      }
      ObjectArray = helpers.randomizeArray(ObjectArray);
      for (let z = 1; z <= maxItems - item; z++) {
        ObjectArray.push(
          <div
            key={helpers.generateKey(`placeholder${z}`)}
            className="placeholder"
          ></div>
        );
      }
      setArrayElements(ObjectArray);
    };
    if (fakeElement != null) {
      fillArray();
    } else {
      setArrayElements([]);
    }
  }, [
    fakeElement,
    refHideElement,
    loseAction,
    WinAction,
    maxItems,
    className,
    ImageType,
    item
  ]);

  return (
    <div className={`FaceGameGrid ${className}`}>
      {ArrayElements.map((item, i) => {
        return item;
      })}
    </div>
  );
};

const StyledImg = styled(StyledTheme)`
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  &#sus:after {
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    height: 100%;
    background-color: ${(props) => props.theme.colors.text};
  }
`;

export default FaceFill;
