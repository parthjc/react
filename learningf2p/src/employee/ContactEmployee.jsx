import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactEmployee() {
  return (
    <>
     <div>
      ContactEmployee
      <ul>
        <li>
          <Link to="/contactemp/manager" className="btn btn-primary">
            MANAGER
          </Link>
        </li>
        <li>
          <Link to="/contactemp/ceo" className="btn btn-primary">
            CEO
          </Link>
        </li>
        <li>
          <Link to="/contactemp/dev" className="btn btn-primary">
            DEVELOPERS
          </Link>
        </li>
      </ul>
    </div>
    </>
   
  )
}
