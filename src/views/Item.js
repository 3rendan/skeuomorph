import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HalfImage from "../components/HalfImage.js";
import Metadata from "../components/Metadata.js";
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


export default class Item extends Component{
  state = {
    item: {}
  }
  componentDidMount (){
    this.getItem();
  }
  getItem = () =>{
    fetch('http://localhost:2222/items/' + this.props.match.params.id)
    .then(response => response.json())
    .then(json =>{
      this.setState({item: json})
      console.log(json)})
    .catch(error => console.error(error))
  }
  getItems = () =>{
    fetch('http://localhost:2222/items')
    .then(response => response.json())
    .then(json => this.setState({items: json}))
    .catch(error => console.error(error))
  }
  deleteItem = (id) =>{
    fetch("http://localhost:2222/items/" + id,
      {
        method: "DELETE"
      })
      .then(() => {
        fetch('http://localhost:2222/items')
          .then(response => response.json())
          .then(window.location.replace('/'))
      })
    }
  render (){
  return (
    <div className='container'>
    <div key={this.state.item.id} className="items">
    <div className='row'>
      <h3>{ this.state.item.title }</h3>
    </div>
    <div className='row'>
      <Metadata item={this.state.item}/>
      <HalfImage item={ this.state.item }/>
    </div>
    <div className="row">
      <div className="col-sm-7">
        <div className="col-sm-12 license">
          <p>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a> Please credit the Providence Athenæum when using this content.</p>
        </div>
      </div>
      <div className='col-sm-5 take-action'>
        <button style={green} className="btn-large btn-warning"><Link to={() =>`/update/${this.state.item.id}`}> UPDATE </Link></button>
        <button style={purp} className="btn-large btn-danger" onClick={() => this.deleteItem(this.state.item.id)}> DELETE </button>
      </div>
    </div>
  </div>
  </div>
  )
}
}
