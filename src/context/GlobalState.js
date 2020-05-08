import React, { useEffect, useState, useReducer} from 'react';
import AppReducer from './AppReducer';

// initial this.state
export const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() =>{
    fetch('http://localhost:2222/items')
    .then(response => response.json())
    .then(data => setItems(data))
    .catch(error => console.error(error))
  }, [])
  return items;
}


// create createContext
export const GlobalContext = createContext(useItems);



// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, useItems());
  // actions
  function deleteItem(id) {
    dispatch({
      type: 'DELETE_ITEM',
      payload: id
    })
  }
  function addItem(item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
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
