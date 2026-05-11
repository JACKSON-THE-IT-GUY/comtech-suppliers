import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( <
        nav className = "bg-[#0f172a] border-b border-slate-800 px-6 py-4 sticky top-0 z-50" >
        <
        div className = "max-w-7xl mx-auto flex items-center justify-between" > { /* Branding */ } <
        Link to = "/"
        className = "flex flex-col" >
        <
        span className = "text-white font-black text-xl tracking-tighter leading-none" >
        COMTECH <
        /span> <
        span className = "text-blue-600 text-[10px] font-bold uppercase tracking-[0.3em]" >
        Suppliers <
        /span> <
        /Link>

        { /* Navigation Links */ } <
        div className = "hidden md:flex items-center gap-8" >
        <
        Link to = "/"
        className = "text-slate-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors" >
        Home <
        /Link> <
        Link to = "/products"
        className = "text-slate-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors" >
        Inventory <
        /Link> <
        Link to = "/admin/login"
        className = "text-slate-500 hover:text-blue-500 text-xs font-bold uppercase tracking-widest transition-colors border-l border-slate-800 pl-8" >
        Staff Portal <
        /Link> <
        /div>

        { /* Mobile Contact Button */ } <
        div className = "md:hidden" >
        <
        Link to = "/products"
        className = "text-blue-500 text-[10px] font-bold uppercase" >
        Catalog <
        /Link> <
        /div> <
        /div> <
        /nav>
    );
};

export default Navbar;