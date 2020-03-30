import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';


class NewItems extends Component {
  state = {
    items: [{}],
    item: {},
    formInputs: {}
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
    .then(json => this.setState({formInput: Object.keys(this.state.items[0])}))
    .catch(error => console.error(error))
  }
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
    return (
      <div className='container'>
        <div className="contact-clean">
        <form onSubmit={this.handleSubmit}>
          <h1> New Item </h1>
          { openDoors.map((key, i) =>{
            return(
              <div key={key} className="form-group">
              <label htmlFor={key} >{key}: </label>
              <input
                type="text"
                id={key}
                placeholder={ key }
                value={this.state.formInputs.key}
                onChange={this.handleChange}
              />
              </div>
          )}) }
          <div className="form-group">
              <input type="submit" className="submit btn btn-warning" />
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default NewItems;
