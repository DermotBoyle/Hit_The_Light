import {useContext} from "react";
import Context from "../../../Store/Context";



function useUpdateScoreboard() {

    const {dispatch} = useContext(Context);

    function addUserToBoard(score, scoreboard){
    let data = {name : '', score};

    let res = Array.from(scoreboard, (user) => user.score);
    let isTop10 = res.findIndex((topResult) => topResult < score);

    if(isTop10 === -1 && scoreboard.length >= 10) return dispatch({type: 'UPDATE_USER_POSITION', payload: false});
    
    if(isTop10 === -1){
        scoreboard.push(data)
        isTop10 = scoreboard.length -1;
    } else{
        scoreboard.splice(isTop10, 0, data)
        if(scoreboard.length > 10)scoreboard.length = 10;
    }
    dispatch({type: 'UPDATE_SCOREBOARD', payload: scoreboard});
    dispatch({type: 'UPDATE_USER_POSITION', payload: isTop10})
    }
    return{addUserToBoard}
}

export default useUpdateScoreboard;