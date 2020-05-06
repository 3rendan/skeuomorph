import React, { useEffect } from 'react';import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Fitem() {
  useEffect(() =>{
    fetch('http://localhost:2222/items')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }, [])
  return (
    <div>
      <h1> {data.creator} </h1>
    </div>
  )
}
export default Fitem;
