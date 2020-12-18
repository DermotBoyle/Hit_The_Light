import styled from 'styled-components';


export const Wrapper = styled.div`
margin: auto;
display: grid;
max-width: calc(100% - 25em);
grid-template-columns: repeat(${props => props.templateSize}, 1fr);
grid-template-rows: auto;
background-color: lightgrey;
column-gap: 6px;
row-gap: 6px;
`

export const PlayBox = styled.div`
height: 8em;
width: 100%;
background-color: hsl(${props => props.color}, ${props => props.saturate}, 50%);
cursor: pointer;
`

export const ScoreButton = styled.button`
display: block;
height: 3em;
border-radius: 18px;
width: calc(100% - 6em);
oultine: none;
border: none;
background-color: #4c8bf5;
color: white;
margin: auto;
font-size: 16px;
font-weight: 600;
letter-spacing: 1.2px;
`
