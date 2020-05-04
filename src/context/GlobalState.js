import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// initial this.state
const initialState = {
  items: []
}

// create createContext
export const GlobalContext = createContext(initialState);


// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // actions
  function deleteItem(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  function addItem(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }
  return (<GlobalContext.Provider value={{
    items: state.items,
    deleteItem,
    addItem
  }}>
    {children}
    </GlobalContext.Provider>);
}
