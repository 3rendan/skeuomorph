import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

class NewItems extends Component {
  state = {
    items: [{}],
    item: {}
  }
  componentDidMount() {
    this.getItems();
  }
  getItems = () =>{
    fetch('http://localhost:2222/items')
    .then(response => response.json())
    .then(json => this.setState({items: json}))
    .catch(error => console.error(error))
  }
  handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
    this.setState(updateInput)
  }
  handleSubmit  = (event) =>{
    event.preventDefault();
    fetch("http://localhost:2222/items", {
      body: JSON.stringify(this.state.formInputs),
      method: "POST",
   headers: {
     "Accept": "application/json, text/plain, */*",
     "Content-Type": "application/json"
   }
 })
   .then(createdItem => createdItem.json())
   .then((data) => { window.location.replace('/')})
 }

  render () {
    const openDoors = Object.keys(this.state.items[0]);
    return (
      <div className='container'>
        <div className="contact-clean">
          <h1> New Item </h1>
          { openDoors.map((key, i) =>{
            return(
              <div>
                <h2>{ key }</h2><br/>
              </div>
          )}) }
        </div>
      </div>
    )
  }
}

export default NewItems;
