import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
