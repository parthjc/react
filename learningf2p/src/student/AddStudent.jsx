import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "./context";

export const AddStudent = () => {
  const { studentDistpacther } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    studentDistpacther("ADD_STUDENT", data);
  };

  return (
    <div>
      <h1>STUDENT - AddStudent</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
      <table>
        <tbody>
          <tr>
            <td>
              <label>ID</label>
            </td>
            <td>
              <input type="text" {...register("id")} />
            </td>
          </tr>
          <tr>
            <td>
              <label>NAME</label>
            </td>
            <td>
              <input type="text" {...register("name")} />
            </td>
          </tr>
          <tr>
            <td>
              <label>AGE</label>
            </td>
            <td>
              <input type="text" {...register("age")} />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input type="submit" value="ADD STUDENT" />
            </td>
          </tr>
        </tbody>
      </table>
      </form>
    </div>
  );
};
