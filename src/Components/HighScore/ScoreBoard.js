import React from "react";
import { useContext, useState, useEffect } from "react";
import { cloneDeep } from "lodash";
import { useHistory } from "react-router-dom";
import Context from "../../Store/Context";
import {
  CelebrateEmoji,
  Wrapper,
  ScoreBoardTitle,
  NameContainer,
  NameInput,
  ScoreButton,
} from "../../StyledComponents";

export default function ScoreBoard() {
  const { state, dispatch } = useContext(Context);
  const history = useHistory();

  const [name, setName] = useState("");
  const [scoreboard, setScoreboard] = useState([]);
  const [userPosition,setUserPosition]  = useState([]);

  useEffect(() => {
    let scoreboardCopy = cloneDeep(state.scoreboard);
    setScoreboard(scoreboardCopy);
    interpretPosition(state.userPosition);
  }, []);

 function handleNameSubmit (){
   let updateInfo = scoreboard[userPosition];
   updateInfo.name = name;
   dispatch({type: 'UPDATE_SCOREBOARD', payload: scoreboard})
   history.push('/');
 }

 function interpretPosition(position){
     debugger;
    if(position === false) return setUserPosition(false);
    return setUserPosition(position);
 }

  return (
    <Wrapper>
      {scoreboard.length === 1 && (
        <>
          <ScoreBoardTitle>
            Looks like you're first on the board !{" "}
            <CelebrateEmoji
              alt="celebrate emoji"
              src={"/assets/celebrate.svg"}
            />
          </ScoreBoardTitle>
        </>
      )}
      <NameContainer>
        <ul>
          {scoreboard.length >= 1 &&
            scoreboard.map((user, index) =>
              index !== userPosition ? (
                <li key={index}>
                  <p>
                    {index+1}. {user.name}
                  </p>
                  <p>{user.score} </p>
                </li>
              ) : (
               <p>{index+1}. <NameInput
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Enter you name here"
                />
                {user.score}
                </p> 
              )
            )}
          <label>Write your name</label>
        </ul>
      </NameContainer>
      {userPosition !== false ? (
        <ScoreButton onClick={() => handleNameSubmit()}>
          {" "}
          Submit score
        </ScoreButton>
      ) : (
        <ScoreButton onClick={() => history.push("/")}> Play again</ScoreButton>
      )}
    </Wrapper>
  );
}
