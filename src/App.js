import React, { useContext, useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./StyledComponents/index";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GameWrapper from "./Components/Game/GameWrapper/index";
import ScoreBoard from "./Components/HighScore/ScoreBoard";
import MobileMenu from "./Components/MobileMenu/index";

import { ABOUT, HOME, SCOREBOARD } from "./CONSTANTS";

import Context from "./Store/Context";
import Reducer from "./Store/Reducers";

import { BrandLogo, NavItems } from "./StyledComponents/index";

import "./App.scss";

function App() {
  const history = useHistory();

  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);

  function goTo(url) {
    history.push(url);
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
              onClick={() => goTo("/")}
            />
            <nav>
              <NavItems>
                <li>
                  <Link className="nav_item" to={HOME}>Home</Link>
                </li>
                <li>
                  <Link className="nav_item" to={ABOUT}>About</Link>
                </li>
                <li>
                  <Link className="nav_item" to={`${SCOREBOARD}/_`}>Scoreboard</Link>
                </li>
                <button onClick={() => setIsOpen(!isOpen)}><img alt="menu button" src="/assets/burger__icon.svg" /></button>
              </NavItems>
              <MobileMenu modalIsOpen={isOpen} closeModal={setIsOpen} />
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
