import React from 'react';
// import { useItem } from '../Effects'

let tombstone = {
  // backgroundColor: '#b6b6b6',
  // color: 'white',
  minHeight: '200px',
  padding: "5px",
}

const Metadata = (item) =>{
  // const item = useItem();
  return (
      <div className='col-sm-7' style={tombstone} >
        <ul className="nav nav-tabs nav-justified">
            <li className='nav-item'><a href="#info" data-toggle="tab" className="nav-link active">INFO</a></li>
            <li className='nav-item'><a href="#story" data-toggle="tab" className="nav-link">STORY</a></li>
            <li className='nav-item' id='cpu'><a href="#resources" data-toggle="tab" className="nav-link">RESOURCES</a></li>
        </ul>
      <div className="tab-content">
          <div role="tabpanel"  className="tab-pane active"  id='info'>
            <ul>
              <li>Author: { item.creator }</li>
              <li>The accession number is { item.identifier }</li>
              <li>Contributor: { item.contributor }</li>
              <li>Coverage: { item.coverage }</li>
              <li>Date: { item.date }</li>
              <li>Format: { item.format }</li>
              <li>Language: { item.language }</li>
              <li>Publisher: { item.publisher }</li>
              <li>Relation: { item.relation }</li>
              <li>Rights: { item.rights }</li>
              <li>Source: { item.source }</li>
              <li>Subject: { item.subject }</li>
              <li>Type: { item.item_type }</li>
            </ul>

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
