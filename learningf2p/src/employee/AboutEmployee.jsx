import React from 'react'
import { Link } from 'react-router-dom'


export default function AboutEmployee() {
  var data = [
    {
      id:1,
      name:"ROYAL"
    },
    {
      id:2,
      name:"JAVA"
    }
  ]
  return (
    <div>AboutEmployee
    <ul>
      <li>
        <Link to ="/aboutcompany/TATA">TATA</Link>
      </li>
      <li>
        <Link to ="/aboutcompany/INFO">INFO</Link>
      </li>
    </ul>

    <ul>
        {
          data?.map((d)=>{
            return(
              <li>
                <Link to ={`/aboutcompany/${d.id}`}>{d.name}</Link>
              </li>
            )
          })
        }
    </ul>
  </div>
  )
}
