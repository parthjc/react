import React, { useState } from "react";
import axios from "axios";

export const ApiDemo1 = () => {
  const [users, setusers] = useState([]);

  const getUserData = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res);
        console.log(res.status);
        console.log(res.data);
        console.log(res.data.data);
        setusers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={() => getUserData()}>Get User Data</button>
      <table border="1" className="table table-dark">
        <thead>
          <tr>
            <td scope="col">Id</td>
            <td scope="col">FirstName</td>
            <td scope="col">LastName</td>
            <td scope="col">Email</td>
            <td scope="col">Avatar</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt="avatar" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
