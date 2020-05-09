import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
// import { initialState } from './context/GlobalState'
import { useItems } from '../Effects'
import 'bootstrap/dist/css/bootstrap.css';

let purp = {
  backgroundColor: '#493843',
  border: '.5px #fff solid',
  marginBottom: '40px',
}
let green = {
  backgroundColor: '#C4D425',
  border: '.5px #fff solid',
  marginBottom: '40px',
}
const Items =() => {
  const items = useItems();
  return (
    <div>
    { items.map(item => {
        return  (
          <div key={item.id} className="items text-center">
              <Link to={`item/${item.id}`}><h3>{ item.title }</h3> by<h3> { item.creator }</h3></Link>
              <Link to={`update/${item.id}`}><button style={green} className="btn-small btn-info"> UPDATE </button></Link>
              <button className="btn-small btn-danger" style={purp} onClick={() => this.props.deleteItem(item.id)}> DELETE </button>
          </div>
        )
    })}
    </div>
  )
}
export default Items;
