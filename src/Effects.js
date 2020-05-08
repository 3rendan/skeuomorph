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
