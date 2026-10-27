import React from "react";
import { Link } from "react-router-dom";
import { SHOP_NAME, generalEnquiryLink } from "../config";
import WhatsAppButton from "./WhatsAppButton";

const Navbar = () => (
  <nav className="bg-[#0f172a] sticky top-0 z-50 border-b border-slate-800">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <Link to="/" aria-label={SHOP_NAME} className="bg-white rounded-lg px-2 py-1">
        <img src="/images/logo.png" alt={SHOP_NAME} className="h-10 w-auto" />
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/" className="text-slate-300 hover:text-white hidden sm:block">Home</Link>
        <Link to="/products" className="text-slate-300 hover:text-white">Products</Link>
        <WhatsAppButton href={generalEnquiryLink()}>WhatsApp Us</WhatsAppButton>
      </div>
    </div>
  </nav>
);

export default Navbar;
