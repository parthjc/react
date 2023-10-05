import React from "react";
import { Link } from "react-router-dom";

export const AboutEmployee = () => {
  var data = [
    {
      id: 1,
      name: "ROYAL",
    },
    {
      id: 2,
      name: "JAVA",
    },
  ];

  return (
    <div>
      <h2>About Employee</h2>
      <ul>
        <li>
          <Link to="/aboutcompany/TATA" className="btn btn-primary">
            TATA
          </Link>
        </li>
        <li>
          <Link to="/aboutcompany/INFO" className="btn btn-primary">
            INFO
          </Link>
        </li>
      </ul>

      <h3>Employee List</h3>
      <ul>
        {data?.map((d) => (
          <li key={d.id}>
            <Link className="btn btn-primary" to={`/aboutcompany/${d.id}`}>
              {d.name}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
