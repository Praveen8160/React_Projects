let Realtime = () => {
  let time = new Date();
  return (<>
  <p>today date is : {time.toDateString()} and time is :{time.toLocaleTimeString()}</p>
   </>);
};
export default Realtime;
