import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Add from './components/produto/Add';
import Edit from './components/produto/Edit';
import Users from './components/produto/Produto';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/produtos/:id" element={<Users />} />
  <Route path="/add-user" element={<Add />} />
  <Route path="/edit-user/:id" element={<Edit />} />
</Routes>

    </div>
  );
}

export default App;

