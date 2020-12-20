import  {createContext} from 'react';


const Context = createContext({
    scoreboard: [],
    currentUser: 0,
    userPosition: 0,
})


export default Context;