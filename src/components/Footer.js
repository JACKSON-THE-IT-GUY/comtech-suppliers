import React from "react";
import { Link } from "react-router-dom";
import { SHOP_NAME, generalEnquiryLink } from "../config";
import WhatsAppButton from "./WhatsAppButton";

const Footer = () => (
  <footer className="bg-[#0f172a] border-t border-slate-800 py-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <span className="text-white font-black text-xl tracking-tighter uppercase">{SHOP_NAME}</span>
        <p className="text-slate-400 text-sm mt-1">
          Quality products, reliable services, affordable prices.
        </p>
      </div>
      <div className="text-slate-300 text-sm text-center space-y-1">
        <p>Call: 0966353101 / 0977722773 / 0779495904</p>
        <p>
          Find us: Lusaka (opposite Town Centre) · Kaoma (Bus Terminus) · Mongu (Bus Terminus &amp; Town) · Senanga
        </p>
      </div>
      <WhatsAppButton href={generalEnquiryLink()}>Order via WhatsApp</WhatsAppButton>
    </div>
    <p className="text-center text-slate-500 text-xs mt-8">
      © {new Date().getFullYear()} {SHOP_NAME}. All rights reserved. <Link to="/credits" className="underline">Image credits</Link>
    </p>
  </footer>
);

export default Footer;
