import React from 'react';
import { Link } from "react-router-dom";
// import { initialState } from './context/GlobalState'
// import { useItems } from '../context/useItems'
import HalfImage from "../components/HalfImage.js";
import Metadata from "../components/Metadata.js";
import { useItem } from '../Effects'
import 'bootstrap/dist/css/bootstrap.css';

let purp = {
  backgroundColor: '#493843',
  border: '.5px #fff solid',
}
let green = {
  backgroundColor: '#C4D425',
  border: '.5px #fff solid',
  color: '#fff',
}

const Item = () => {
  const item = useItem();
  console.log(item)
  return (
    <div className='container'>
    <div key={item.id} className="items">
    <h3>{ item.title }</h3>
    <div className='row'>
    </div>
    <div className='row'>
      <Metadata item={ item }/>
      <HalfImage item={ item }/>
    </div>
    <div className="row">
      <div className="col-sm-7">
        <div className="col-sm-12 license">
          <p>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a> Please credit the Providence Athenæum when using this content.</p>
        </div>
      </div>
      <div className='col-sm-5 take-action'>
        <button style={green} className="btn-large btn-warning"><Link to={() =>`/update/${item.id}`}> UPDATE </Link></button>
        <button style={purp} className="btn-large btn-danger" onClick={() => this.deleteItem(item.id)}> DELETE </button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Item
