import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className=" w-full h-full"> 
      
      <div className=" bg-slate-900 ">
        <div className=" max-w-[1100px] w-11/12 mx-auto ">
          <Navbar/>
        </div> 
      </div>
      <div className=" max-w-[1130px] w-11/12  mx-auto">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
      
      <Toaster/>
  </div>
  );
}

export default App;
