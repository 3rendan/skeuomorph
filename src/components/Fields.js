import React from 'react'


function Fields (props) {
  return (
      <div key={props.value} className="form-group">
      <label htmlFor={props.value} >{props.value}: </label>
      <input
        type="text"
        id={props.value}
        placeholder={ props.value }
        
      />
      </div>

  )
}


export default Fields;
