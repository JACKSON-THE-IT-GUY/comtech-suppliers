// WhatsApp number: country code + number, digits only (no + or spaces)
export const WHATSAPP_NUMBER = "260779495904";
export const SHOP_NAME = "ComTech Suppliers";
export const TAGLINE = "Your One Stop Tech & Stationery Shop";

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const productEnquiryLink = (product) =>
  whatsappLink(`Hello ${SHOP_NAME}, I'm interested in: ${product.name} (${product.price}). Is it available?`);

export const generalEnquiryLink = () =>
  whatsappLink(`Hello ${SHOP_NAME}, I would like to make an enquiry.`);
