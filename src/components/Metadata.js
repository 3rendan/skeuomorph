import React from 'react';
import { useItem } from '../Effects'
import Item from '../views/Item'

let tombstone = {
  // backgroundColor: '#b6b6b6',
  // color: 'white',
  minHeight: '200px',
  padding: "5px",
}

const Metadata = (item) =>{
  return (
      <div className='col-sm-7' style={tombstone} >
        <ul className="nav nav-tabs nav-justified">
            <li className='nav-item'><a href="#info" data-toggle="tab" className="nav-link active">INFO</a></li>
            <li className='nav-item'><a href="#story" data-toggle="tab" className="nav-link">STORY</a></li>
            <li className='nav-item' id='cpu'><a href="#resources" data-toggle="tab" className="nav-link">RESOURCES</a></li>
        </ul>
      <div className="tab-content">
          <div role="tabpanel"  className="tab-pane active"  id='info'>
            <p> {item.title} </p>


          </div>
          <div role="tabpanel" className="tab-pane" id="story" hidden>
            <p>{ item.description }</p>
          </div>
          <div role="tabpanel" className="tab-pane" id="resources" hidden>
          </div>
      </div>
      </div>
  )
}
export default Metadata
