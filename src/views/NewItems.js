import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const formInputs = [];

class NewItems extends Component {
  state = {
    items: [{}],
    item: {},
    formInputs: [],
    formInput: {}
  }
  componentDidMount() {
    this.getItems();
    this.getInputs();
  }
  getItems = () =>{
    fetch('http://localhost:2222/items')
    .then(response => response.json())
    .then(json => this.setState({items: json}))
    .catch(error => console.error(error))
  }
  getInputs = () =>{
    fetch('http://localhost:2222/items')
    .then(response => response.json())
    .then(data => data.filter(formInput => {
      (formInput.typeof === "string") && formInputs.push(formInput);
    })
    .then(formInput => this.setState({formInput: Object.keys(this.state.items[0])}))
    .catch(error => console.error(error))
  )}
  handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
    this.setState(updateInput)
  }
  handleSubmit  = (event) =>{
    // event.preventDefault();
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
    const fieldsToEnter = openDoors.filter(openDoor =>{
      return openDoor.typeof === "string";
    });
    return (
      <div className='container'>
      {console.log(formInputs)}
    </div>
    )
  }
}

export default NewItems;
