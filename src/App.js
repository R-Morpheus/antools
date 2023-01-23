import React from "react";
import Navbar from "./components/navbar/Navbar";
import Wrapper from "./components/wrapper/Wrapper";
import Tools from "./components/tools/Tools";
import Brands from "./components/companies /Brands";
import NewComerTools from "./components/newComerTools/NewComerTools";
import Slider from "./components/slider/Slider";
import Contributor from "./components/contributor/Contributor";
import Footer from "./components/footer/Footer";
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Wrapper/>
      <Tools/>
      <Brands/>
      <NewComerTools/>
      <Slider/>
      <Contributor/>
      <Footer/>
    </div>
  );
}

export default App;
