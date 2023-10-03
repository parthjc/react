import React from 'react'
import "./Styles.css"
import { Subcontent } from './Subcontent'


export const Footer = (props) => {
  return (
    <div className='footer'>
        <h1>Footer</h1>
        <h6>{props.c.copyright}</h6>
        <Subcontent c = {props.c.copyright}></Subcontent>
    </div>
  )
}
