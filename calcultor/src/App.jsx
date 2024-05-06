import Buttoncontain from './container/Buttoncontain'
import style from './App.module.css'
import { useState } from 'react'
function App() {
  let [value,upvalue]=useState("");
  const onbuttonclic=(event)=>
  {
    let val=event.target.firstChild.data;
    if(val==='c')
    {
      upvalue("");
    }
    else if(val==='=')
    {
      let calcu=eval(value);
      upvalue(calcu);
    }
    else{
      let newval=value+val;
      upvalue(newval);
    }
  }
  return (
    <>
      <div className={style.container}>
        <input className={style.inputContainer} type="text" value={value} readOnly/>
        <Buttoncontain onbuttonclick={onbuttonclic}></Buttoncontain>
      </div>
    </>
  )
}

export default App
