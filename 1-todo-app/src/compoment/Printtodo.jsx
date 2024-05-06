import style from "./printtodo.module.css";
function Printtodo(props) {
  function click(e) {
    console.log(e);
    console.log(`${props.item} button is clicked`);
    props.handlebuyButton();
  }
  return (
    <>
      <div classNameName="container">
        <div classNameName="row item-row">
          <div classNameName={`${style[props.brought && "active"]} col-6`}>
            {props.item}
          </div>
          <div classNameName="col-4">{props.dates}</div>
          <div classNameName="col-2">
            <button
              type="button"
              classNameName="btn btn-danger"
              onClick={click}
            >
              Delete
            </button>
          </div>
          <div classNameName="col-4">{props.newi}</div>
        </div>
      </div>
    </>
  );
}
export default Printtodo;
