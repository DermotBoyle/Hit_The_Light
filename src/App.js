import React, { useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./StyledComponents/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GameWrapper from "./Components/Game/GameWrapper/index";
import ScoreBoard from "./Components/HighScore/ScoreBoard";
import { SCOREBOARD } from "./CONSTANTS";

import Context from "./Store/Context";
import Reducer from "./Store/Reducers";

import { BrandLogo, NavItems } from "./StyledComponents/index";

import "./App.scss";

function App() {
  
  const history = useHistory();

  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(Reducer, initialState);

  function goTo(url){
    history.push(url)
  }

  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <div className="App">
          <Header>
            <BrandLogo
              className="adidas_logo"
              alt="Adidas brand logo"
              src="/assets/adidas.svg"
              onClick={() => goTo('/')}
            />
            <nav>
              <NavItems>
                <li onClick={() => goTo("/")}>Home</li>
                <li onClick={() => goTo("/about")}>About</li>
              </NavItems>
            </nav>
          </Header>
          <Switch>
            <Route exact path="/">
              <GameWrapper />
            </Route>
            <Route
              path={`${SCOREBOARD}/:score`}
              render={(props) => {
                return <ScoreBoard {...props} />;
              }}
            ></Route>
          </Switch>
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
