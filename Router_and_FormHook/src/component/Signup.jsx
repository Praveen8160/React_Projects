import style from "../style/signup.module.css";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../Feature/user_info";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValues:{
    email:"defultv@gmail.com",
    password:"12345",
    repassword:"12345",
    number:["123","456"],
    address:{
      flatno:"202",
      city:"surat"
    }
  }});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = (data) => {
    // localStorage.setItem("userdata", JSON.stringify(data));
    // dispatch(adduser(data));
    // navigate("/SignIn");
    console.log(data)
  };
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit(signup)}
        style={{ border: "1px solid #ccc" }}
      >
        <div className={style.container}>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            {...register("email", {
              required: "required field",
              validate: {
                notadmin: (fieldvalue) => {
                  return (
                    fieldvalue !== "admin@gmail.com" ||  // custom validation
                    "enter different email address"
                  );
                },
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            {...register("password", {
              required: true,
              maxLength: {
                value: 5,
                message: "length should be less than 5",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            {...register("repassword", {
              required: "required field",
              maxLength: {
                value: 5,
                message: "length should be less than 5",
              },
            })}
          />
          {errors.repassword && <p>{errors.repassword.message}</p>}

          <label htmlFor="primaryphone">
            <b>Primary phone</b>
          </label>
          <input
            type="text"
            placeholder="Enter phone"
            name="primaryphone"
            {...register("number[0]", {
              required: "required field"})
            }
          />
          <label htmlFor="secondaryphone">
            <b>secondary phone</b>
          </label>
          <input
            type="text"
            placeholder="Enter second phone"
            name="secondaryphone"
            {...register("number[1]", {
              required: "required field"})
            }
          />
          <label htmlFor="flatno">
            <b>Flat No.</b>
          </label>
          <input
            type="text"
            placeholder="Enter Flat No."
            name="flatno"
            {...register("address.flatno", {
              required: "required field"})
            }
          />
          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
            .
          </p>

          <div className={style.clearfix}>
            <button type="button" className={style.cancelbtn}>
              Cancel
            </button>
            <button type="submit" className={style.signupbtn}>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
