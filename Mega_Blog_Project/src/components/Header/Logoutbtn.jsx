import React from "react";
import { useDispatch } from "react-redux";
import authenticate from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
function Logoutbtn() {
  const dispatch = useDispatch();
  function BtnHandler() {
    authenticate
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch(() => {
        console.log("hyyy");
      });
  }
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={BtnHandler}
    >
      Logout
    </button>
  );
}
export default Logoutbtn;
