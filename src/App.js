import React from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Wrapper from "./components/wrapper/Wrapper";
import Tools from "./components/tools/Tools";
import Brands from "./components/companies /Brands";
import NewComerTools from "./components/newComerTools/NewComerTools";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Wrapper/>
      <Tools/>
      <Brands/>
      <NewComerTools/>
    </div>
  );
}

export default App;
