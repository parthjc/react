import React from 'react'
import "./Styles.css"


export const Content = (props) => {
  return (
    <div className='content'>
        <h1>Content</h1>
        <h2>{props.d.data}</h2>
    </div>
  )
}
