import React from "react";
import Router from "./Router";
import '../App.scss';
import {ContextContainer}  from "../context";
const App = () => {
  return (
    <ContextContainer>
      <Router />
    </ContextContainer>
  );
};
export default App;
