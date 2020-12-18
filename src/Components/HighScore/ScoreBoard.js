import React from 'react'
import {useContext} from 'react';
import Context from '../../Store/Context';
import { Wrapper } from '../../StyledComponents'


export default function ScoreBoard() {

const {state, dispatch} = useContext(Context);

    return (
        <Wrapper>
           {state.scoreboard.length < 1 && <h1>No Entries yet</h1>}
        </Wrapper>
    )
}
