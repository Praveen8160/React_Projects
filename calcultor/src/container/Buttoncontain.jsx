import style from "./buttoncontainer.module.css";
function Buttoncontain({onbuttonclick}) {
  const btn = ["c",1, 2,"+", 3, 4,"-", 5, 6,"*", 7, 8,"/", 9, 0, ".","="];
  return (
    <>
      <div className={style.btn}>
        {btn.map((item) => (
          <button key={item} className={style.buttons} onClick={onbuttonclick}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
export default Buttoncontain;
