import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/header.js";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Cont';


function App() {
  
  return (
   <>
       <Header />
    
    
       
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/Contacts" element={<Contacts />} />
          </Routes>
        
        </>
  );
}

export default App;
