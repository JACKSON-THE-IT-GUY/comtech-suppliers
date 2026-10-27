import React from "react";
import { Link } from "react-router-dom";
import { SHOP_NAME, asset, generalEnquiryLink } from "../config";
import WhatsAppButton from "./WhatsAppButton";

const Navbar = () => (
  <nav className="fixed top-3 inset-x-3 sm:inset-x-6 z-50 max-w-7xl mx-auto rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 shadow-lg">
    <div className="px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
      <Link to="/" aria-label={SHOP_NAME} className="shrink-0 bg-white rounded-lg px-2 py-1">
        <img src={asset("/images/logo.png")} alt={SHOP_NAME} className="w-20 h-6 object-contain sm:h-10 sm:w-auto" />
      </Link>
      <div className="flex items-center gap-2 sm:gap-6">
        <Link to="/" className="text-slate-800 font-semibold hover:text-slate-950 hidden sm:block">Home</Link>
        <Link to="/products" className="shrink-0 text-slate-800 font-semibold hover:text-slate-950">Products</Link>
        <WhatsAppButton
          href={generalEnquiryLink()}
          className="shrink-0 whitespace-nowrap !px-2 !py-2 text-xs sm:!px-4 sm:!py-2 sm:text-base"
        >
          <span className="sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">WhatsApp Us</span>
        </WhatsAppButton>
      </div>
    </div>
  </nav>
);

export default Navbar;
