import React from 'react';

let tombstone = {
  // backgroundColor: '#b6b6b6',
  // color: 'white',
  minHeight: '200px',
  padding: "5px",
}

export default function  (props) {
  return (

      <div className='col-sm-7' style={tombstone} >
        <ul className="nav nav-tabs nav-justified">
            <li className='nav-item'><a href="#info" data-toggle="tab" className="nav-link active">INFO</a></li>
            <li className='nav-item'><a href="#story" data-toggle="tab" className="nav-link">STORY</a></li>
            <li className='nav-item' id='cpu'><a href="#resources" data-toggle="tab" className="nav-link">RESOURCES</a></li>
        </ul>
      <div className="tab-content">
          <div role="tabpanel"  className="tab-pane active"  id='info'>
            <h3>Title: { props.item.title }</h3><br/>
            <h3>Author: { props.item.creator }</h3><br />
            <p className='text-center'>The accession number is { props.item.accession_number }</p><br />
          </div>
          <div role="tabpanel" className="tab-pane" id="story" hidden>
            <p>{ props.item.abstract }</p>
          </div>
          <div role="tabpanel" className="tab-pane" id="resources" hidden>
          </div>
      </div>
      </div>
  )
}
