import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import Starter from "./pages/Starter/starter";
//components
import Header from "./components/header/header";
import TodoPage from "./pages/TodoPage/TodoPage";
import TrombinoscopePage from "./pages/TrombinoscopePage/TrombinoscopePage";



function App() {

  return (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          <Switch location={location} key={location.pathname}>
            <AnimatePresence initial={false} exitBeforeEnter>
              <Route
                exact
                path="/"
                render={() => <Starter />}
              />
              <Route
              exact
              path="/TodoPage"
              render={() => <TodoPage />}
            />
            <Route
            exact
            path="/TrombinoscopePage"
            render={() => <TrombinoscopePage />}
          />
            </AnimatePresence>
          </Switch>
        )}
      />
    </Router>
  );
}

export default App;
// <AnimatePresence initial={false} exitBeforeEnter>
// <Route
//   exact
//   path="/"
//   render={() => <Home imageDetails={imageDetails} />}
// />
// <Route
//   exact
//   path="/model/:id"
//   render={() => <Model imageDetails={imageDetails} />}
// />
// </AnimatePresence>