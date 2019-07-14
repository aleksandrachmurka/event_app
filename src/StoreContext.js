import React, { useEffect, useReducer, createContext } from 'react';
import { initialState, reducer } from './reducer.js';
import useActions from './customHooks.js';

const StoreContext = createContext(initialState);

const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = useActions(state, dispatch);

    useEffect(()=> {console.log(state)}, [state]);

    return (
        <StoreContext.Provider value={{ state, dispatch, actions}}>
            {children}
        </StoreContext.Provider>
    )
}


export { StoreContext, StoreProvider }