import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

class NewItems extends Component {
  state = {
    items: [{}],
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
    return (
      <div className='container'>
          { Object.keys(this.state.items[0])).map((key, i) =>
            return (
              <div key={key.id} className="items text-center">
                <h1>{ key.value }</h1>
              </div>
            )
          })}
      </div>
    )
  }
}

export default NewItems;
