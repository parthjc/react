import React, { useState } from "react";
import axios from "axios";

export const ApiDemo3 = () => {
  const [users, setUsers] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://gorest.co.in/public/v2/users");
      console.log(res.data);
      setUsers(res.data); // Assuming the user data is in res.data.data
      console.log(res.status);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <button onClick={() => getApiData()}>Get User Data</button>
      <table border="1" className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td
                style={{
                  color: user.status === "active" ? "green" : "red",
                }}
              >
                {user.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
