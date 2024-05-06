import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [NumberAllowe, SetNumberAllowe] = useState(false);
  const [CharAllowe, SetCharAllowe] = useState(false);
  const [Password, SetPassword] = useState("");
  const passwordRef = useRef(null);

  const PassworGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (NumberAllowe) str += "0123456789";
    if (CharAllowe) str += "$%^&*()@#!{}><?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    SetPassword(pass);
  }, [length, CharAllowe, NumberAllowe, SetPassword]);

  useEffect(() => {
    PassworGenerator();
  }, [length, CharAllowe, NumberAllowe, SetPassword]);

  const CopyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(1, 9);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button
            className="outline-none bg-red-70 text-white px-3 py-0.5 shrink-0"
            onClick={CopyPassword}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={0}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={NumberAllowe}
              id="numberInput"
              onChange={() => {
                SetNumberAllowe((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={CharAllowe}
              id="CharInput"
              onChange={() => {
                SetCharAllowe((prev) => !prev);
              }}
            />
            <label htmlFor="CharInput">Numbers</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
