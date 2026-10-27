import React from "react";
import { Link } from "react-router-dom";
import { SHOP_NAME, TAGLINE, generalEnquiryLink, whatsappLink } from "../config";
import { categories, services } from "../services/productData";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => (
  <div>
    <section className="relative overflow-hidden bg-white text-slate-900 py-20 px-6">
      <img
        src="/images/hero-copier.png"
        alt=""
        aria-hidden="true"
        className="absolute right-4 md:right-16 top-0 h-full w-auto opacity-20 md:opacity-100 pointer-events-none select-none"
      />
      <div className="relative max-w-7xl mx-auto">
        <p className="text-red-600 font-bold uppercase tracking-widest mb-4">{TAGLINE}</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl">
          Printers, copiers, laptops &amp; supplies for your office.
        </h1>
        <p className="text-slate-700 mt-6 max-w-xl text-lg">
          {SHOP_NAME} stocks Canon, HP and Samsung machines, toner, drums, Riso master &amp; ink,
          and inkjet ink. Message us on WhatsApp for prices and availability.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <WhatsAppButton href={generalEnquiryLink()} className="!px-6 !py-3">
            Chat on WhatsApp
          </WhatsAppButton>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-400 font-bold hover:bg-slate-100"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 pt-12">
      <img
        src="/images/products.png"
        alt="Stationery, toner, printers and photocopiers"
        className="w-full rounded-2xl"
      />
    </section>

    <section className="max-w-7xl mx-auto px-6 pt-16">
      <h2 className="text-2xl font-black text-slate-900 mb-8">Visit our shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((n) => (
          <img
            key={n}
            src={`/images/shop-${n}.png`}
            alt={`Inside the ${SHOP_NAME} shop`}
            className="w-full h-72 object-cover rounded-2xl border border-slate-200"
          />
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-black text-slate-900 mb-8">What we sell</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((c) => (
          <Link
            key={c.id}
            to={`/products?category=${c.id}`}
            className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-3">{c.icon}</div>
            <div className="font-bold text-slate-800">{c.name}</div>
          </Link>
        ))}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 pb-16">
      <h2 className="text-2xl font-black text-slate-900 mb-8">Our services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <a
            key={s.name}
            href={whatsappLink(`Hello ${SHOP_NAME}, I need help with: ${s.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition"
          >
            <div className="text-3xl mb-2">{s.icon}</div>
            <div className="font-bold text-slate-900">{s.name}</div>
            <p className="text-slate-600 text-sm mt-1">{s.detail}</p>
          </a>
        ))}
      </div>
    </section>
  </div>
);

export default Home;
