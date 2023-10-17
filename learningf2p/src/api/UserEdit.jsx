import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const UserEdit = () => {
  const id = useParams().id;
  var navigate = useNavigate();

  var cardStyle = {
    margin: "0 auto",
    height: "400px",
    width: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkGray",
    borderRadius: "10px",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const res = await axios.get(`https://node5.onrender.com/user/user/${id}`);
      return {
        name: res.data.data.name,
        email: res.data.data.email,
        age: res.data.data.age,
      };
    },
  });

  const submitHandler = async (data) => {
    const res = await axios.put(
      `https://node5.onrender.com/user/user/${id}`,
      data
    );
    console.log(res.data);
    if (res.status === 200) {
      // navigate("/apidemo2")
      navigate("/user/detail/" + id);
    }
  };

  return (
    <div>
      <div style={cardStyle}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>ENTER NAME</label>
            <input type="text" {...register("name")} />
          </div>
          <div>
            <label>ENTER EMAIL</label>
            <input type="text" {...register("email")} />
          </div>
          <div>
            <label>ENTER AGE</label>
            <input type="text" {...register("age")} />
          </div>
          <div>
            <input type="submit" value="UPDATE" />
          </div>
        </form>
      </div>
    </div>
  );
};
