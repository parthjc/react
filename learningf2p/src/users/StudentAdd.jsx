import React from "react";
import { useForm } from "react-hook-form";

export const StudentAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("error....", errors);

  const validationSchema = {
  name:{required:{
    value:true,
    message:"name is required"    
    }
 },
 email:{
    required:{
        value:true,
        message:"email is required"
    }
 }
   
}

  const submithandlers = (data)=>{
    console.log("user data...", data);  
}
  return (
    <>
    <h1>ADD DATA</h1>
    <form onSubmit={handleSubmit(submithandlers)}>
      <div>
        <input
          type="text"
          {
            ...register("name",validationSchema.name)
          }
        //   {...register("name", {required:{value:true,message:"Name is required !!"}})}
          className="form-control"
          placeholder="NAME"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <input
          type="email"
          {
            ...register("email",validationSchema.email)
          }
          className="form-control"
          placeholder="EMAIL"
        />
        {<p>{errors?.email?.message}</p>}
      </div>
      <div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      </div>
    </form>
    </>
    
  );
};
