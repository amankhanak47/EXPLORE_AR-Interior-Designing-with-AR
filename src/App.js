import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Fun from "./pages/Fun";
import Interior from "./pages/Interior";
import Biology from "./pages/Education/Biology";
import Furniture from "./pages/Interior/Furniture";
import Marvel from "./pages/Fun/Marvel";
import Dc from "./pages/Fun/Dc";
import Physics from "./pages/Education/Physics";
import Chemistry from "./pages/Education/Chemistry";
import Animals from "./pages/Education/Animals";
import Monument from "./pages/Education/Monument";
import Vehicle from "./pages/Education/Vehicle";
import Electronics from "./pages/Interior/Electronics";
import Rooms from "./pages/Interior/Rooms";
import Decor from "./pages/Interior/Decor";
import Wallart from "./pages/Interior/Wallart";

function App() {
  return (
      <div className="App">
       <BrowserRouter>
       
        <Routes>
          {/* <Route path="/signup" element={<Signup showalert={showalert}/>}/> */}
          <Route path="/" element={<Home />} />
         
          <Route path="/education" element={<Education />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/biology" element={<Biology />} />
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/dc" element={<Dc />} />
          <Route path="/physics" element={<Physics />} />
          <Route path="/chemistry" element={<Chemistry />} />
          <Route path="/animal" element={<Animals />} />
          <Route path="/monument" element={<Monument />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/electronics" element={<Electronics/>} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/decor" element={<Decor />} />
          <Route path="/wallart" element={<Wallart />} />
         

         
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//http://192.168.0.100:3000   