import React from 'react';
import {helpers} from "../../../../../../utils";
import { StyledTheme } from '../../../../../StyledComponents';
import "./HighscoreModal.scss"
const HighscoreModal = (array,key) => {
    const [ArrayElements, setArrayElements] = React.useState([]);
  
    React.useEffect(() => {
      const fillArray = () => {
        array.array.sort((a,b)=>b-a);
        let ObjectArray = [];
        for (let y = 0; y <= array.array.length; y++) {
          ObjectArray.push(<StyledTheme key={helpers.generateKey(key+y)}>.{array.array[y]}</StyledTheme>);
        }
        setArrayElements(ObjectArray);
      };
        fillArray();
    }, [key,array]);
    return (
      <div className="HighscoreModal">
        <StyledTheme >TOP SCORES</StyledTheme>
        <ul>
           {ArrayElements.map((item, i) => {
        return item;
        })}
        </ul>
        </div>
    );
};

export default HighscoreModal;