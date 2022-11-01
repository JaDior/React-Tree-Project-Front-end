import './App.css';
import React from "react";
import Register from './components/register/Register';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import LocationNotFound from './components/LocationNotFound';


const App = () => {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/login":
      component = <Login />
      break
    case "/register":
      component = <Register />
      break
    default:
      component = <LocationNotFound />
  }
  return (
    <>
      <Navbar />
      {component}
    </>
  )
}

export default App;
