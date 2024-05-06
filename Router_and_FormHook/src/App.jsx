import Header from "./component/Header";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <Outlet></Outlet>
    </Provider>
  );
}
export default App;
