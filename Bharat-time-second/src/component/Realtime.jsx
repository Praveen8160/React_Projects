import { useEffect, useState } from "react";

let Realtime = () => {
  const [time, settime] = useState(new Date());
  useEffect(() => {
    console.log("interval setup");
    const intervalid = setInterval(() => {
      settime(new Date());
    }, 1000);

    return ()=>{
      clearInterval(intervalid);
      console.log("interval canclled");
    }
  },[]);
  return (
    <>
      <p>
        today date is : {time.toDateString()} and time is :
        {time.toLocaleTimeString()}
      </p>
    </>
  );
};
export default Realtime;
