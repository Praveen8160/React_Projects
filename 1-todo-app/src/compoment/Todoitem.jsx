function Todoitem({ item, dates }) {
  return (
    <>
      <div className="container">
        <div className="row item-row">
          <div className="col-6">{item}</div>
          <div className="col-4">{dates}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todoitem;
