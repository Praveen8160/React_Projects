// import "./App.css";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { login, logout } from "./store/authSlice";
import authenticate from "./appwrite/auth";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authenticate.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setloading(false));
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
          <div className="w-full block">
            <Header />
            <main>
              TODO: <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
