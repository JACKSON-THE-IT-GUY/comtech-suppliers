import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productEnquiryLink } from "../config";
import { categories, products } from "../services/productData";
import WhatsAppButton from "../components/WhatsAppButton";

const Products = () => {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const active = params.get("category") || "all";

  const visible = products.filter((p) => {
    const q = search.trim().toLowerCase();
    return (
      (active === "all" || p.category === active) &&
      (!q || `${p.name} ${p.price}`.toLowerCase().includes(q))
    );
  });

  const select = (id) => (id === "all" ? setParams({}) : setParams({ category: id }));
  const chip = (isActive) =>
    `px-4 py-2 rounded-full text-sm font-bold border ${
      isActive ? "bg-[#0f172a] text-white border-[#0f172a]" : "bg-white text-slate-700 border-slate-300"
    }`;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-black text-slate-900 mb-6">Products</h1>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products…"
        className="w-full md:w-96 border border-slate-300 rounded-xl px-4 py-2 mb-4"
      />
      <div className="flex flex-wrap gap-2 mb-8">
        <button className={chip(active === "all")} onClick={() => select("all")}>All</button>
        {categories.map((c) => (
          <button key={c.id} className={chip(active === c.id)} onClick={() => select(c.id)}>
            {c.name}
          </button>
        ))}
      </div>

      <p className="text-slate-500 text-sm mb-6">
        All prices are retail prices, in Kwacha. Printers, photocopiers, laptops, Riso master &amp; ink and inkjet ink are also
        available: ask us on WhatsApp.
      </p>

      {visible.length === 0 ? (
        <p className="text-slate-500">No products found. Message us on WhatsApp, we may still have it.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => {
            const cat = categories.find((c) => c.id === p.category);
            return (
              <div key={p.id} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col">
                {p.image ? (
                  <img src={p.image} alt={p.name} loading="lazy" className="h-40 w-full object-contain mb-3" />
                ) : (
                  <div className="h-40 flex items-center justify-center text-6xl mb-3">{cat?.icon}</div>
                )}
                <span className="text-xs font-bold uppercase text-slate-500">{cat?.name}</span>
                <h3 className="font-bold text-lg text-slate-900">{p.name}</h3>
                <div className="mt-2 flex-1">
                  <span className="text-xl font-black text-[#0f172a]">{p.price}</span>
                  {p.note && <span className="text-slate-500 text-sm ml-2">({p.note})</span>}
                </div>
                <WhatsAppButton href={productEnquiryLink(p)} className="mt-4">
                  Ask on WhatsApp
                </WhatsAppButton>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
