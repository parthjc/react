import axios from "axios";
import React, { useEffect, useState } from "react";

export const ApiDemo2 = () => {
  const [users, setUsers] = useState([]);
  const [loader, setloader] = useState(true);

  const getUserData = async () => {
    try {
      const res = await axios.get("https://node5.onrender.com/user/user");
      setloader(true);
      // console.log(loader);
      console.log(res);
      console.log(res.status);
      console.log(res.data.data);
      setUsers(res.data.data);
      setloader(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      {loader === true ? <h1>Loading..</h1> : null}
      {/* <button onClick={() => getUserData()}>Get User Data</button> */}
      <table border="1" className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                {user.isActive === true ? (
                  <p style={{ color: "green" }}>ACTIVE</p>
                ) : (
                  <p style={{ color: "red" }}>NOT ACTIVE</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
