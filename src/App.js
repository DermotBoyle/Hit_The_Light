import React, { useContext, useReducer} from "react";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GameWrapper from "./Components/Game/GameWrapper/index";
import ScoreBoard from "./Components/HighScore/ScoreBoard";
import { SCOREBOARD } from "./CONSTANTS";

import Context from "./Store/Context";
import Reducer from "./Store/Reducers";

import "./App.scss";

function App() {

  const initialState = useContext(Context);
	const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <header className="App-header">
          <img
            className="adidas_logo"
            alt="Adidas brand logo"
            src="/assets/adidas.svg"
          />
        </header>
        <Switch>
          <Route exact path="/">
            <GameWrapper />
          </Route>
          <Route path={SCOREBOARD}>
            <ScoreBoard />
          </Route>
        </Switch>
      </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
