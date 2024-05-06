function Todoinput({ keydownevent }) {
  return (
    <div classNameName="container">
      <div classNameName="row item-row">
        <div classNameName="col-6">
          <input
            type="text"
            placeholder="enter here"
            onKeyDown={keydownevent}
          />
        </div>
        <div classNameName="col-4">
          <input type="date" name="" id="" />
        </div>
        <div classNameName="col-2">
          <button type="button" classNameName="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoinput;
