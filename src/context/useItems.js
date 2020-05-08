import { useEffect, useState } from 'react'

export const useItems = () => {
  const items = useEffect(() =>{
    fetch('http://localhost:2222/items')
    .then(response => response.json())
    .then(data => this.setState({items: data}))
    .catch(error => console.error(error))
  }, [])
  return items;
}
