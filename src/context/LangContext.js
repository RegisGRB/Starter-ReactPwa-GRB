import React, { useState } from "react";
import * as TranslationJson from "../translations";

const LangContext = React.createContext();
const LangProvider = ({ children, LangSelected = "en" }) => {
  const [Translation, setTranslation] = useState(TranslationJson[LangSelected]);
  const updateTranslation = (x) => {
    if (TranslationJson[x]) {
      setTranslation(TranslationJson[x]);
    } else {
      throw new Error("this langage doesn't exist");
    }
  };
  const getTranslation = () => {
   return LangSelected;
  };

  return (
    <LangContext.Provider value={{ ...Translation, updateTranslation,getTranslation }}>
      {children}
    </LangContext.Provider>
  );
};
export  { LangProvider, LangContext as default };;
