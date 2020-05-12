import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Images from '../components/Images'
import Fields from '../components/Fields'
import {useItems} from '../Effects'

const NewItems = () => {
  useItems();
  return (
    <div className='container'>
      <div className="contact-clean">
      hello
      </div>
    </div>
  )
}
export default NewItems
