import logo from './logo.svg';
//import './App.css';
import React ,{useState} from 'react';
//import {BrowserRouter as Router ,Route, Routes } from "react-router-dom" ;
import MainTodo from './MainTodo';
import Movies from './Movies';
import 'bootstrap/dist/css/bootstrap.min.css';

//import FoodOrder from './FoodOrder';
// import NavBar from './NavBar'
// import Gallery from './Gallery';
// import FormValidation from './FormValidation'
// import Footer from './Footer';


function App() {
  return (
    <div className="App">
    
      <Movies/>
    </div>
  );
}

export default App;
