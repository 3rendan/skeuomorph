import React, { Component } from 'react';
import Items from "./views/Items.js";
// import Update from "./components/Update.js";
import 'bootstrap/dist/css/bootstrap.css';


export default class App extends Component {
  state = {
    items: false
  }
  componentDidMount() {
    this.getItems();
    console.log("got em")
  }
  getItems = () =>{
    fetch('http://localhost:2222/items')
    .then(response => response.json())
    .then(json => this.setState({items: json}))
    .catch(error => console.error(error))
  }

  deleteItem = (id, i) =>{
    fetch("http://localhost:2222/items/" + id,
      {
        method: "DELETE"
      })
      .then(data => {
        this.setState({
          items: [
            ...this.state.items.slice(0, i),
            ...this.state.items.slice(i + 1)
          ]
        })
      })
    }
  render () {
    console.log(this.state.items)
    return (
      <div className="container">
        <>
          <Items deleteItem={this.deleteItem} items={this.state.items} />
        </>
      </div>

    )
  }
}
