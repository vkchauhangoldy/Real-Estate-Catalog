import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Signin from './components/signin/Signin';
import Signup from "./components/signup/Signup";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Signin />} />
    <Route path='/signup' element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;