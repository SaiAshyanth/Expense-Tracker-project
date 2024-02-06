import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './login';
import Home from './home';
import Signup from './signup';
import Tracker from './tracker';
class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/tracker' element={<Tracker/>}/>
                <Route path='/signup' element={<Signup/>}/>

                
            </Routes>
        </Router>
            </div>
        );
    }
}

export default Routing;