import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";
import { useDispatch } from "react-redux";
import { getAllContact } from "./Redux/Action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  dispatch(getAllContact());
  return (
    <div className="app">
      <ToastContainer />
      <Home />
    </div>
  );
}

export default App;
