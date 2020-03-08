import React from 'react'
let style = {
  fontFamily: `'Zilla Slab', serif`,
  fontSize: `1.25rem`,
  paddingTop: '60px',
}
export default function About (props) {
  return (
    <div className='container'>
      <p className='col-sm-12' style={style}>
      This is a React on Rails desktop app using Electron.js. It is designed to organize and catalog information about collections. Eventually, users will be able to export collections cataloged with this app to a publically accessible website.

      </p>
    </div>
  )
}
