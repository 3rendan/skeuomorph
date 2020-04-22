import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';


class NewItems extends Component {
  state = {
    items: [{}],
    item: {},
    formInputs: [],
    formInput: {}
  }
  componentDidMount() {
    this.getItems();
    // this.getInputs();
  }
  getItems = () =>{
    fetch('http://localhost:2222/items')
    .then(response => response.json())
    .then(json => this.setState({items: json}))
    .catch(error => console.error(error))
  }
  // getInputs = () =>{
  //   fetch('http://localhost:2222/items')
  //   .then(response => response.json())
  //   .then(formInput => this.setState({formInput: Object.keys(this.state.items[0])}))
  //   .catch(error => console.error(error))
  // }
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
    const openDoors = this.state.items[0].title;
    // var dcKeys = openDoors.filter(openDoor => (openDoor.value === typeof ))
    // console.log(dcKeys);
    console.log(openDoors)
    return (
      <div className='container'>
        <div className="contact-clean">
        <form onSubmit={this.handleSubmit}>
          <h1> New Item </h1>

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
