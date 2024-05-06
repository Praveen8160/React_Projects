import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const user = useLoaderData();
  // const [user, setuser] = useState(20);
  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const signal = abortController.signal;
  //   fetch("https://api.github.com/users/Praveen8160", { signal })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log("hello");
  //       setuser(data);
  //     });
  //   return () => {
  //     abortController.abort();
  //     console.log("ended");
  //   };
  // }, []);
  return (
    <>
      <h1 className="text-center p-4 m-3 text-5xl">
        Github followers:{user.followers}
      </h1>
      <img src={user.avatar_url} alt="github" />
    </>
  );
}
export default Github;

export const githubloader = async () => {
  const res = await fetch("https://api.github.com/users/Praveen8160");
  const data = await res.json();
  console.log("hello");
  return data;
};
