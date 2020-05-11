import React, { useEffect, useState } from 'react';

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
export const useItem = (param) => {
  const [item, setItem] = useState([]);
  useEffect(() =>{
    fetch('http://localhost:2222/item/' + param)
    .then(response => response.json())
    .then(data => setItem(data))
    .catch(error => console.error(error))
  }, [])
  return item;
}
