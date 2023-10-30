import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddApiUser = () => {
  // const addUser = async () => {

  //     var user = {
  //         name: "ram",
  //         age: 22,
  //         email : "ram@gmail.com",
  //         isACTIVE : true

  //     }

  //     const res =  await axios.post("https://node5.onrender.com/user/user", user)
  //     console.log(res)

  // }

  var navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    console.log("data...", data);
    var userObj = {
      name: data.name,
      email: data.email,
      age: data.age,
      isACTIVE: data.isActive === "true", // Convert to boolean
    };
    console.log("userObj:", userObj);
    const res = await axios.post(
      "https://node5.onrender.com/user/user",
      userObj
    );
    console.log(res);
    console.log(res.data);
    if (res.status === 201) {
      toast.success("🦄 SUCCESSFULLY ADDED!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setTimeout(function () {
      navigate("/apidemo2");
    }, 3000);
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
      <form onSubmit={handleSubmit(submitHandler)}>
        <table>
 <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name")}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            {...register("email")}
          ></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="text" name="age" id="age" {...register("age")}></input>
        </div>
        <div>
          <label>Status:</label>
          <label>
            TRUE:
            <input
              type="radio"
              name="isActive"
              value="true"
              {...register("isActive")}
            />
            Active
          </label>
          <label>
            FALSE:
            <input
              type="radio"
              name="isActive"
              value="false"
              {...register("isActive")}
            />
            Not Active
          </label>
        </div>

        <div>
          <input type="submit" value="Add User" />
        </div>
        </table>
       
      </form>
    </div>
  );
};
