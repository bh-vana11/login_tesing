
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<SignUp />} />
        <Route path="/login" element ={ <Login />} />
        <Route path="/home" element ={<Home />} />
      </Routes>
    </Router>
    
    
   
  );
};

export default App
