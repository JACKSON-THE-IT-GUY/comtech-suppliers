import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page with WhatsApp links", () => {
  render(<App />);
  expect(screen.getByText(/Printers, copiers, laptops/i)).toBeInTheDocument();
  const links = screen.getAllByRole("link", { name: /whatsapp/i });
  expect(links[0].getAttribute("href")).toContain("https://wa.me/");
});
