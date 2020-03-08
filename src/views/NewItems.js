import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

class NewItems extends Component {
  state = {
    Items : [],
    formInputs: {
      title: "",
      author: "",
      accession_number: "",
      images: "",
      abstract: ""
    }
  }
  componentDidMount() {
    this.getItems();
  }
  getItems = () =>{
    fetch('https://lit-reef-53457.herokuapp.com/items')
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
    fetch("https://lit-reef-53457.herokuapp.com/items", {
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
        <div className="contact-clean">
          <form onSubmit={this.handleSubmit}>
              <h2 className="text-center">New Items?</h2>
              <div className="form-group">
              <label htmlFor="title" >Title: </label>
              <input
                type="text"
                id="title"
                value={this.state.formInputs.title}
                onChange={this.handleChange}
              /></div>
              <div className="form-group">
                <label htmlFor="author">Author: </label>
                <input
                  type="text"
                  id="author"
                  value={this.state.formInputs.author}
                  onChange={this.handleChange}
                /></div>
              <div className="form-group">
                <label htmlFor="accession_number">Accession Number: </label>
                  <input
                    type="text"
                    id="accession_number"
                    value={this.state.formInputs.accession_number}
                    onChange={this.handleChange}
                  />
              </div>
              <div className="form-group">
              <label htmlFor="author">Abstract: </label>
              <input
                type="text"
                id="abstract"
                value={this.state.formInputs.abstract}
                onChange={this.handleChange}
              /><br/>
              </div>
              <div className="form-group">
              <label htmlFor="author">Images: </label>
              <input
                type="text"
                id="images"
                value={this.state.formInputs.images}
                onChange={this.handleChange}
              />
              </div>
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
