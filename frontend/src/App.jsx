import './App.css';
import React from "react";
import Register from './components/register/Register';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
