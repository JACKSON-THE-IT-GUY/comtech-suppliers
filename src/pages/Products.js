import React from 'react';
import { products } from '../services/productData';

const Products = () => {
    const handleInquiry = (productName) => {
        const message = encodeURIComponent(`Hello ComTech, I am interested in the ${productName}. Please provide more details.`);
        window.open(`https://wa.me/260970000000?text=${message}`, '_blank');
    };

    return ( <
        div className = "bg-[#0f172a] min-h-screen text-white pb-20" >
        <
        div className = "max-w-7xl mx-auto px-6 py-16" > { /* Page Header */ } <
        div className = "border-l-4 border-blue-600 pl-6 mb-16" >
        <
        h1 className = "text-3xl md:text-4xl font-black uppercase tracking-tighter text-white" >
        Inventory < span className = "text-blue-600" > Catalog < /span> <
        /h1> <
        p className = "text-slate-400 mt-2 text-xs font-bold uppercase tracking-[0.3em]" >
        Premium Office Technology & Supplies <
        /p> <
        /div>

        { /* Product Grid */ } <
        div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" > {
            products.map((product) => ( <
                div key = { product.id }
                className = "group flex flex-col bg-[#1e293b] border border-slate-800 hover:border-blue-600 transition-all duration-300" > { /* Image Container */ } <
                div className = "relative aspect-square overflow-hidden bg-slate-900" >
                <
                img src = { product.image }
                alt = { product.name }
                className = "w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" /
                >
                <
                div className = "absolute top-4 left-4" >
                <
                span className = "bg-blue-600 text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest" > { product.category } <
                /span> <
                /div> <
                /div>

                { /* Content Container */ } <
                div className = "p-8 flex flex-col flex-grow" >
                <
                h2 className = "text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors" > { product.name } <
                /h2> <
                p className = "text-slate-400 text-sm mb-8 leading-relaxed font-light" > { product.description } <
                /p>

                <
                div className = "mt-auto pt-6 border-t border-slate-800 flex items-center justify-between" >
                <
                span className = "text-lg font-bold text-white tracking-tighter" > { product.price } <
                /span> <
                button onClick = {
                    () => handleInquiry(product.name) }
                className = "bg-transparent border border-slate-700 text-white text-[10px] font-bold px-6 py-3 hover:bg-white hover:text-black transition-all uppercase tracking-widest" >
                Inquiry <
                /button> <
                /div> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /div>
    );
};

export default Products;