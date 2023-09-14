import React from 'react';
import './App.css';
import ADD from './add';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CRUD from './crud';
import EDIT from './edit';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<CRUD/>}/> 
      <Route path="/add" element={<ADD/>}/> 
      <Route path="/crud" element={<CRUD/>}/> 
      <Route path="/edit" element={<EDIT/>}/> 
      </Routes>
    </BrowserRouter>   
    </div>
  );
}

export default App;
