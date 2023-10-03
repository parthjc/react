import React from 'react'
import "./Styles.css"

export const Header = (props) => {
  return (
    <div className="header">
        <h1>Header</h1>
        <h3>{props.d.day}-*-{props.d.month}-*-{props.d.year}</h3>
    </div>
  )
}

