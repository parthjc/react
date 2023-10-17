import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

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

  const deleteUserData = async (id) => {
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    ); // new
    // const res = await axios.delete("https://node5.onrender.com/user/user/"+id)// old
    console.log(res);

    if (res.status === 204) {
      toast("🦄 Record Delete Successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      getUserData();
    } else {
      toast("🦄 Record Not Delete!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
            <th scope="col">Action</th>
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
              <td>
                <button
                  onClick={() => deleteUserData(user._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <Link to={`/user/detail/${user._id}`} className="btn btn-info">
                  Detail
                </Link>
                <Link to={`/user/edit/${user._id}`} className="btn btn-primary">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
