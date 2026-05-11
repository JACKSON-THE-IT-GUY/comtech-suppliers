import React from "react";

const categories = [{
        name: "Computing Solutions",
        description: "High-performance workstations and enterprise mobility hardware.",
        tag: "Enterprise Hardware",
    },
    {
        name: "Imaging & Printing",
        description: "Advanced document management and industrial printing solutions.",
        tag: "Office Equipment",
    },
    {
        name: "ICT Networking",
        description: "Scalable network infrastructure and secure connectivity tools.",
        tag: "Infrastructure",
    },
    {
        name: "Corporate Stationery",
        description: "Premium consumables for streamlined business operations.",
        tag: "Supplies",
    },
];

const Home = () => {
    return ( <
        <
        div className = "bg-[#0f172a] min-h-screen text-white" > { " " } { /* Hero Section */ } { " " } <
        section className = "relative h-[85vh] flex items-center justify-center overflow-hidden" > { " " } { /* LOCAL IMAGE REFERENCE */ } { " " } <
        div className = "absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-no-repeat"
        style = {
            {
                backgroundImage: `url('/images/background.png')`,
            }
        } >
        <
        /div> { / * Gradient Overlay * / } { " " } <
        div className = "absolute inset-0 bg-gradient-to-b from-[#0f172a]/20 via-[#0f172a]/80 to-[#0f172a] z-10" > { " " } <
        /div> <
        div className = "relative z-20 text-center px-6 max-w-4xl" >
        <
        span className = "text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block" >
        Official Corporate Provider { " " } <
        /span>{" "} <
        h1 className = "text-5xl md:text-8xl font-extrabold tracking-tighter mb-6" >
        COMTECH { " " } <
        span className = "text-blue-600 font-light text-4xl md:text-7xl block md:inline" > { " " }
        SUPPLIERS { " " } <
        /span>{" "} < /
        h1 > { " " } <
        p className = "text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light" >
        Your strategic partner in ICT infrastructure, high - end computing,
        and specialized office supplies in Zambia. { " " } <
        /p>{" "} <
        div className = "flex flex-col sm:flex-row justify-center gap-6" >
        <
        a href = "/products"
        className = "bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 font-bold uppercase tracking-widest text-[10px] transition-all duration-300" >
        Explore Inventory { " " } <
        /a>{" "} <
        a href = "https://wa.me/0779495904"
        className = "border border-slate-700 hover:bg-white hover:text-black text-white px-12 py-4 font-bold uppercase tracking-widest text-[10px] transition-all duration-300" >
        Consult Sales { " " } <
        /a>{" "} < /
        div > { " " } <
        /div>{" "} < /
        section > { /* Categories Section */ } { " " } <
        section className = "max-w-7xl mx-auto px-6 py-20" >
        <
        div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" > { " " } {
            categories.map((item, index) => ( <
                div key = { index }
                className = "group bg-[#1e293b]/40 backdrop-blur-sm p-10 border border-slate-800/50 hover:border-blue-600 transition-all duration-500" >
                <
                p className = "text-blue-500 text-[9px] font-black uppercase tracking-widest mb-6" > { " " } { item.tag } { " " } <
                /p>{" "} <
                h3 className = "text-xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors" > { " " } { item.name } { " " } <
                /h3>{" "} <
                p className = "text-slate-400 text-sm leading-relaxed mb-8" > { " " } { item.description } { " " } <
                /p>{" "} <
                div className = "w-8 h-[1px] bg-slate-700 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" > { " " } <
                /div>{" "} < /
                div >
            ))
        } { " " } <
        /div>{" "} < /
        section > { /* Footer Branding */ } { " " } <
        footer className = "py-12 border-t border-slate-900 text-center" >
        <
        p className = "text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em]" >
        ComTech Suppliers© 2026 | Professional ICT Solutions { " " } <
        /p>{" "} < /
        footer > { " " } <
        /div>
    );
};

export default Home;