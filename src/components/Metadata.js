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
            <ul>
              <li>Author: { props.item.creator }</li>
              <li>The accession number is { props.item.identifier }</li>
              <li>Contributor: { props.item.contributor }</li>
              <li>Coverage: { props.item.coverage }</li>
              <li>Date: { props.item.date }</li>
              <li>Format: { props.item.format }</li>
              <li>Language: { props.item.language }</li>
              <li>Publisher: { props.item.publisher }</li>
              <li>Relation: { props.item.relation }</li>
              <li>Rights: { props.item.rights }</li>
              <li>Source: { props.item.source }</li>
              <li>Subject: { props.item.subject }</li>
              <li>Type: { props.item.item_type }</li>
            </ul>

          </div>
          <div role="tabpanel" className="tab-pane" id="story" hidden>
            <p>{ props.item.description }</p>
          </div>
          <div role="tabpanel" className="tab-pane" id="resources" hidden>
          </div>
      </div>
      </div>
  )
}
