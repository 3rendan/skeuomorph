import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default class Update extends Component{
  state = {
    item: {},
    formInputs: {
      title: "",
      author: "",
      accession_number: "",
      images: "",
      abstract: ""
    }
  }
  componentDidMount (){
    this.getItem();
  }
  getItem = () =>{
    fetch('https://lit-reef-53457.herokuapp.com/items/' + this.props.match.params.id)
    .then(response => response.json())
    .then(json =>{
      this.setState({item: json})
    })
  }
  handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
    this.setState(updateInput)
  }
  updateItem = (e) => {
    e.preventDefault();
    const myObj = {...this.state.formInputs}
    const formData = {}
    for (let input in myObj){
      if (myObj[input]){
        formData[input] = myObj[input]
      }
    }
    if(formData === null){
      window.location.replace('/items');
    } else {
      fetch(`https://lit-reef-53457.herokuapp.com/items/` + this.state.item.id, {
        body: JSON.stringify(formData),
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(updatedItem => updatedItem.json())
      .then((data) => { window.location.replace('/items')})
    }
  }


  render (){
    return (
      <nav>
        <h3>Update { this.state.item.title } </h3>
          <form onSubmit={this.updateItem}>
            <label htmlFor="title" >Title: </label>
            <input
              type="text"
              id="title"
              value={this.state.formInputs.title}
              placeholder={this.state.item.title}
              onChange={this.handleChange}
            /><br/>
            <label htmlFor="author">Author: </label>
            <input
              type="text"
              id="author"
              placeholder={this.state.item.author}
              onChange={this.handleChange}
            /><br/>
            <label htmlFor="accession_number">Accession Number: </label>
            <input
              type="text"
              id="accession_number"
              placeholder={this.state.item.accession_number}
              onChange={this.handleChange}
            /><br/>
            <label htmlFor="author">Abstract: </label>
            <input
              type="text"
              id="abstract"
              placeholder={this.state.item.abstract}
              onChange={this.handleChange}
            /><br/>
            <label htmlFor="author">Images: </label>
            <input
              type="text"
              id="images"
              placeholder={this.state.item.images}
              onChange={this.handleChange}
            /><br/>
            <input type="submit" className="submit btn btn-warning" />
          </form>
        </nav>
    )
  }
}
