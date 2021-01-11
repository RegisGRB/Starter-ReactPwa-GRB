import React from 'react';
import "./RotateText.scss";
import {StyledTheme} from "../../StyledComponents";
import styled from "styled-components";
function RotateText({ text, arc, radius , size="1rem",rotating=true,children,...props}) {
  const characters = text.split('');
  const degree = arc / characters.length;

  return (
    <div className="RotateTextContainer">
    <div className={`RotateText ${rotating ? "rotating" : ""}`} style={{ width:`${radius*2}px`,height:`${radius*2}px`}}>
    <StyledRotateText as="h1" size={size} {...props}>
      {characters.map((char, i) => (
        <span
          key={`heading-span-${i}`}
          style={{
            height: `${radius}px`,
            transform: `rotate(${degree * i - arc / 2}deg)`,
            transformOrigin: `0 ${radius}px 0`,
          }}>
          {char}
        </span>
      ))}
    </StyledRotateText>
    </div>
    {children}
    </div>
  );
}

const StyledRotateText = styled(StyledTheme)`
font-size: ${(props) => ( props.size )};

`;

RotateText.defaultProps = {
  arc: 360,
  radius: 400,
};

export default RotateText;
