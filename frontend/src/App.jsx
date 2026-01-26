import React from 'react'
import NavScrollExample from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './components/About';
import Home from './components/HomePage';
import UserProfile from './components/UserProfilePage';
import Notifications from './components/Notifications';
import ServiceDetails from './components/ServiceDetails';
const App = () => {
  return (
    <div>
      <Router>
        <NavScrollExample/>
        <Routes>
          <Route path='/HomePage' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/userprofilePage' element={<UserProfile/>}/>
          <Route path='/Notifications' element={<Notifications/>}/>
          <Route path='/ServiceDetails' element={<ServiceDetails/>}/>
          {/* <Route path='/user/:userId' element={<UserProfile/>}/> */}

        </Routes>
      </Router>
    
    </div>
  )
}

export default App
