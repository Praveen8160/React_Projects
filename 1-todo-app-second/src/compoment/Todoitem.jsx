function Todoitem({item,dates}) {
  return (<>
    <div class="container">
      <div class="row item-row">
        <div class="col-6">{item}</div>
        <div class="col-4">{dates}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
      </div> 
      </> );
}
export default Todoitem
