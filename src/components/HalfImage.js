import React from 'react'


export default function HalfImage (props) {
  return (
    <div className='col-sm-5'>
    <img className='img-fluid'
      style= {{ height: 'auto' }}
      src={ props.item.images }
      alt={ props.item.title }
      />
    </div>
  )
}
