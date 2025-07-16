import logo from './logo.svg';
//import './App.css';
import React ,{useState} from 'react';
import {BrowserRouter as Router ,Route, Routes } from "react-router-dom" ;
import MainTodo from './MainTodo';
// import FoodOrder from './FoodOrder';
//import NavBar from './NavBar'
// import Gallery from './Gallery';
// import Movies from './Movies';
// import FormValidation from './FormValidation'
//import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <MainTodo/>
    </div>
  );
}

export default App;
