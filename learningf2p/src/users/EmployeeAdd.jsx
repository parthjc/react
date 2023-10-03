import React from "react";
import { useForm } from "react-hook-form";

export default function EmployeeAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode:"all",
    // defaultValues: {
    //     name:"ram",
    //     age:"21",
    //     contact:"6353856759"
    // },
  });

  const submitHandler = (data) => {
    console.log(data);
  };


const validationSchema = {
    name:{
        required:{
            value: true,
            message:"Name is required"
        },
        minLength:{
            value: 6,
            message:"Name must be at least 6 characters",
        },
        maxLength:{
            value: 10,
            message:"Name must be at most 10 characters",
        }
    },
    age: {
        required:{
            value: true,
            message:"Age is required"
        },
        min:{
            value:18,
            message:"Age must be at least 18 "
        },
        max:{
            value: 50,
            message:"Age must be at most 50 "
        }
    },
    contact:{
        required:{
            value: true,
            message:"Contact is required"
        },
        pattern: {
            value: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,
            message:"enter a valid contact number"

        }
    },
    email:{
        required:{
            value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
            message:"Enter a valid email address"
        }
    }
    
}
  
  

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" {...register("name",validationSchema.name)} />
          <span className="text-danger">{errors.name?.message}</span>
        </div>
        <div className="form-group">
            <label htmlFor="age">AGE</label>
            <input type="number" className="form-control" {...register("age",validationSchema.age)} />
            <span className="text-danger">{errors.age?.message}</span>
        </div>
        <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input type="text" className="form-control" {...register("contact",validationSchema.contact)} />
            <span className="text-danger">{errors.contact?.message}</span>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" {...register("email",validationSchema.email)} />
            <span className="text-danger">{errors.email?.message}</span>
        </div>
        <div>
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
