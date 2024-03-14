import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Dashboard from '../src/pages/Dashboard'
import SignUp from '../src/pages/SignUp'
import SignIn from '../src/pages/SignIn'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/dashboard'  element={<Dashboard/>}/>
        <Route path='/signup'  element={<SignUp/>}/>
        <Route path='/signin'  element={<SignIn/>}/>
        <Route path='/about'  element={<About/>}/>
      </Routes>
    </Router>
  )
}

