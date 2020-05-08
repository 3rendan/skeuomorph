import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Images from '../components/Images'
import Fields from '../components/Fields'

const NewItems = () => {
  const [item, setItem] = useState([]);
    useEffect(() =>{
      fetch('http://localhost:2222/items')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
    }, [])
  return (
    <div className='container'>
      <div className="contact-clean">
      hello
      </div>
      </div>
  )
}
export default NewItems
