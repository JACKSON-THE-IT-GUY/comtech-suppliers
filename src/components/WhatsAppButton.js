import React from "react";

const WhatsAppButton = ({ href, children = "Chat on WhatsApp", className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`btn-whatsapp ${className}`}
  >
    {children}
  </a>
);

export default WhatsAppButton;
