import LoginPage from "./components/LoginPage";
import "./App.css";
import React from 'react'
import NavScrollExample from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './components/About';
import Home from './components/HomePage';
import UserProfile from './components/UserProfilePage';
import Notifications from './components/Notifications';
import ServiceDetails from './components/ServiceDetails';
import RegisterPage from './authentication/RegisterPage';
import Homepage from './components/HomePage';

function App() {
  return (
    <div className="app">
      <LoginPage />
    <div>
      <Router>
        <NavScrollExample/>
        <Routes>
          <Route path='/HomePage' element={<Homepage/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/UserProfile' element={<UserProfile/>}/>
          <Route path='/Notifications' element={<Notifications/>}/>
          <Route path='/ServiceDetails' element={<ServiceDetails/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          {/* <Route path='/user/:userId' element={<UserProfile/>}/> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
