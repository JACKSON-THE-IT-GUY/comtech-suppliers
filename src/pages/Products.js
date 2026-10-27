import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productEnquiryLink } from "../config";
import { categories, products } from "../services/productData";

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
        <div className="space-y-12">
          {categories
            .filter((cat) => visible.some((p) => p.category === cat.id))
            .map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-2 border-b-2 border-slate-200">
                  {cat.name}
                  <span className="ml-2 text-sm font-semibold text-slate-400">
                    {visible.filter((p) => p.category === cat.id).length}
                  </span>
                </h2>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {visible.filter((p) => p.category === cat.id).map((p) => {
            return (
              <div
                key={p.id}
                className="group bg-white border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-200"
              >
                {p.image ? (
                  <img src={p.image} alt={p.name} loading="lazy" className="w-full aspect-square object-cover bg-slate-100" />
                ) : (
                  <div className="w-full aspect-square bg-slate-100 flex items-center justify-center text-slate-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-1/3 h-1/3" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                  </div>
                )}
                <div className="p-2 sm:p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-xs sm:text-lg text-slate-900 leading-snug">{p.name}</h3>
                  <div className="mt-1 sm:mt-2 flex-1">
                    <span className="text-sm sm:text-xl font-black text-[#0f172a]">{p.price}</span>
                    {p.note && <span className="text-slate-500 text-[10px] sm:text-sm ml-1 sm:ml-2">({p.note})</span>}
                  </div>
                  <a
                    href={productEnquiryLink(p)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 sm:mt-4 inline-flex items-center justify-center gap-1 sm:gap-2 rounded-full border-2 border-[#25D366] text-[#128C7E] text-xs sm:text-base font-bold py-1 sm:py-2 px-2 sm:px-4 hover:bg-[#25D366] hover:text-white transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true">
                      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.300 1.700 2.100 1.200 1 2.200 1.400 2.500 1.500.3.2.5.100.7-.1l.9-1.100c.2-.3.4-.2.6-.1l1.900.9c.3.1.5.2.5.3.1.2.1.8-.1 1.500Z" />
                    </svg>
                    <span className="sm:hidden">Ask</span>
                    <span className="hidden sm:inline">Ask on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
                </div>
              </section>
            ))}
        </div>
      )}
    </div>
  );
};

export default Products;
