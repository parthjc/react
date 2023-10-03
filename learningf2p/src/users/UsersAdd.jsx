import React from "react";
import { useForm } from "react-hook-form";

export const UsersAdd = () => {
  const { register, handleSubmit } = useForm();

  const submithander = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submithander)}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          {...register("email")}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="One"
          id="flexCheckDefault"
          {...register("checkbox")}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          One
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Two"
          id="flexCheckChecked"
          {...register("checkbox")}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Two
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value="male"
          {...register("gender")}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value="female"
          {...register("gender")}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Female
        </label>
      </div>
      <select className="form-select"  {...register("numbers")}>
        <option  >Open this select menu</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </select>
      <label htmlFor="exampleColorInput" className="form-label">
        Color picker
      </label>
      <input
        type="color"
        className="form-control form-control-color"
        id="exampleColorInput"
        title="Choose your color"
      {...register("color")}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
