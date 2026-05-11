import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Import your components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';

function App() {
    return ( <
        Router >
        <
        div className = "flex flex-col min-h-screen" > { /* The Navbar stays at the top of every page */ } <
        Navbar / >

        { /* The main content area that changes based on the URL */ } <
        main className = "flex-grow" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/products"
        element = { < Products / > }
        /> <
        Route path = "/admin/login"
        element = { < Login / > }
        /> <
        Route path = "/admin"
        element = { < Dashboard / > }
        /> <
        /Routes> <
        /main>

        { /* The Footer stays at the bottom of every page */ } <
        Footer / >
        <
        /div> <
        /Router>
    );
}

export default App;