import React from "react";
import { BrowserRouter , Route ,Switch} from "react-router-dom";
import * as Pages from "../pages";
import { AnimatePresence } from "framer-motion";
const Router = () => {
const routes = [
    {
    path: "/",
    component: Pages.FaceGame,
    },
    {
      path: "/FaceGame",
      component: Pages.FaceGame,
    }
  ];
  return (
    <BrowserRouter>
        {/* <Header/> */}
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter >
            <Switch location={location} key={location.pathname}>
              {routes.map((route) => (
                <Route
                exact 
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              ))}
            
            </Switch>
            </AnimatePresence>
          )}
        />
    </BrowserRouter>
  );
};
export default Router;