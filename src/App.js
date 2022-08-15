import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Login from './pages/login'
import Support from './pages/support'
import Home from './pages/home'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/support" element={<Support/>}/>
        <Route exact path="/pages/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
