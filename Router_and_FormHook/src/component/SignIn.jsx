import React, { useEffect, useState } from "react";
import style from "../style/SignIn.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateuser } from "../Feature/user_info";
function SignIn() {
  // const [userdata, setuserdata] = useState([]);
  const user_info = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValues:{
    
  }});
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("userdata"));
  //   setuserdata(user);
  // }, []);
  const regi = (data) => {
    const authenticate = user_info.find(function (u) {return u.email === data.email && u.password === data.password});
      // if (u.email === data.email && u.password === data.password) return true;
      // return false;
    if(authenticate)
    {
      dispatch(updateuser(authenticate.email))
      navigate("/")
    }
    else{
      alert("email and password combination not match")
    }


    // if (userdata.email === data.email) {
    //   navigate("/");
    // } else {
    //   alert("enter valid user detail");
    // }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(regi)} method="">
        <div className={style.imgcontainer}>
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </div>

        <div className={style.container}>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            {...register("email", { required: "required field" })}
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

          <button type="submit">Login</button>
        </div>

        <div className={style.container} style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className={style.cancelbtn}>
            Cancel
          </button>
          <span className={style.psw}>
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
