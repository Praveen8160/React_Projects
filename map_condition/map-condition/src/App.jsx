import Mapexample from './component/Mapexample'
import Condition from './component/Condition'
function App() {
  let student=["praveen","raj","jay","het"]
  let food=[]
  return (
    <> 
    <p>hello</p>
     <Mapexample student={student}/>
     <Condition food={food}/>
    </>
  )
}

export default App
