import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import style from 'style.js';

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

class Items extends Component {

  render () {
     return (
       <div>
         { this.props.items && this.props.items.map((item, i) => {
             return  (
               <div key={item.id} className="items text-center">
                   <Link to={`item/${item.id}`}><h3>{ item.title }</h3> by<h3> { item.creator }</h3></Link>
                   <Link to={`update/${item.id}`}><button style={green} className="btn-small btn-info"> UPDATE </button></Link>
                   <button className="btn-small btn-danger" style={purp} onClick={() => this.props.deleteItem(item.id, i)}> DELETE </button>
               </div>
             )
         })}
       </div>
     )
   }
 }


export default Items;
