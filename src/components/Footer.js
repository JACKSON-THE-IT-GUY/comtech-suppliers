import React from 'react';

const Footer = () => {
    return ( <
        footer className = "bg-[#0f172a] border-t border-slate-800 pt-16 pb-8" >
        <
        div className = "max-w-7xl mx-auto px-6" >
        <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-12 mb-12" > { /* Branding Section */ } <
        div className = "flex flex-col" >
        <
        span className = "text-white font-black text-2xl tracking-tighter uppercase" >
        COMTECH <
        /span> <
        span className = "text-blue-600 text-xs font-bold uppercase tracking-[0.4em] mb-6" >
        Suppliers <
        /span> <
        p className = "text-slate-400 text-sm leading-relaxed max-w-xs font-light" >
        Zambia 's premier partner for corporate ICT infrastructure, high-end computing solutions, and professional office stationery. <
        /p> <
        /div>

        { /* Locations Section */ } <
        div >
        <
        h4 className = "text-white text-xs font-bold uppercase tracking-widest mb-6 border-l-2 border-blue-600 pl-4" >
        Our Locations <
        /h4> <
        div className = "space-y-4" >
        <
        div >
        <
        p className = "text-blue-500 text-[10px] font-bold uppercase tracking-widest" > Head Office < /p> <
        p className = "text-slate-300 text-sm" > Lusaka, Zambia < /p> <
        /div> <
        div >
        <
        p className = "text-blue-500 text-[10px] font-bold uppercase tracking-widest" > Operations Center < /p> <
        p className = "text-slate-300 text-sm" > Riverside, Kitwe < /p> <
        /div> <
        /div> <
        /div>

        { /* Contact Section */ } <
        div >
        <
        h4 className = "text-white text-xs font-bold uppercase tracking-widest mb-6 border-l-2 border-blue-600 pl-4" >
        Direct Contact <
        /h4> <
        div className = "space-y-4" >
        <
        a href = "mailto:info@comtechsuppliers.com"
        className = "block text-slate-300 hover:text-white text-sm transition-colors" >
        info @comtechsuppliers.com <
        /a> <
        a href = "https://wa.me/260970000000"
        className = "block text-slate-300 hover:text-white text-sm transition-colors" >
        +260 970 000 000 <
        /a> <
        /div> <
        /div> <
        /div>

        { /* Bottom Bar */ } <
        div className = "border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" >
        <
        p className = "text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]" > ©2026 ComTech Suppliers.All Rights Reserved. <
        /p> <
        div className = "flex gap-6" >
        <
        span className = "text-slate-600 text-[10px] font-bold uppercase tracking-widest" >
        Terms of Service <
        /span> <
        span className = "text-slate-600 text-[10px] font-bold uppercase tracking-widest" >
        Privacy Policy <
        /span> <
        /div> <
        /div> <
        /div> <
        /footer>
    );
};

export default Footer;