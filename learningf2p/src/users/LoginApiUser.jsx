import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginUser = () => {

const [token, settoken] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginHandler = async (data) => {
    try {
      const res = await axios.post("http://localhost:3001/api/login", data);
      //var token = "smlkjsasjlsjaakaosaoskosakskaoospkopsa"
      console.log(res.data);
      //localStorage.setItem("token", res.data.token);
      sessionStorage.setItem("token", res.data.token);
      toast("Login succssful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
        toast("Login failed", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

    }
  };

  const fetchDataFomStorage = () => {

    const tokenFromStorage = sessionStorage.getItem("token");
    console.log("token from storage...",tokenFromStorage);
    settoken(tokenFromStorage)

  }
  const logout = () => {

    sessionStorage.removeItem("token");
    //localStorage.removeItem("token");
    // localStorage.clear();
    // sessionStorage.clear();
    settoken("")
  }


  return (
    <div>
        {
            token
        }
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <h1>Login User</h1>
      <form onSubmit={handleSubmit(loginHandler)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
      <button onClick={()=>{fetchDataFomStorage()}}>Fetch data from storage</button>
      <button onClick={()=>{logout()}}>logout</button>
    </div>
  );
};