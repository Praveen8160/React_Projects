import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import {logout} from '../Feature/user_info'
function Home() {
  const [user, setuser] = useState(null);
  const selec = useSelector((state) => state.user);
  const dispatch=useDispatch()
  const useremail = selec.find((user) => {
    return user.active === true;
  });
  useEffect(() => {
    if (useremail) {
      setuser(useremail.email);
    }
  }, []);
  const logoutbtn=(email)=>{
    dispatch(logout(email))
    setuser(null)
  }
  // return <div>
  //   {user?<h2>welcome {user}</h2>:<h2>please login first</h2>}
  // </div>;

  return(
    <>
      <p>hello welcome,{user?user:"please login your account"}</p>
      <button onClick={()=>logoutbtn(user)}>logout</button>
    </>
  )
}


export default Home;
