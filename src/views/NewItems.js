import React, { Component } from "react";
import useForm from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.css';
import Images from '../components/Images'
import Fields from '../components/Fields'


class NewItems extends React.Component {

  render () {
    console.log(this.props);
    const openDoors = Object.keys(this.props.items[0]);
    console.log(openDoors)
    const dcKeys = openDoors.filter(openDoor => (!openDoor.endsWith('d') && !openDoor.includes('_')))
    console.log(dcKeys);

    return (
      <div className='container'>
        <div className="contact-clean">
        <form onSubmit={this.handleSubmit}>
          <h1> New Item </h1>
          { dcKeys.map(key =>{
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
