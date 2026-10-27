import React from "react";
import { imageCredits } from "../services/imageCredits";

const Credits = () => (
  <div className="max-w-4xl mx-auto px-6 py-12">
    <h1 className="text-3xl font-black text-slate-900 mb-2">Image credits</h1>
    <p className="text-slate-600 mb-6">Some product photos are from Wikimedia Commons, used under their free licences. The rest are the shop's own.</p>
    <ul className="space-y-2 text-sm text-slate-700">
      {imageCredits.map((c) => (
        <li key={c.key}>
          <a href={c.url} target="_blank" rel="noopener noreferrer" className="underline">{c.title}</a>
          {" "}by {c.author} ({c.license})
        </li>
      ))}
    </ul>
  </div>
);

export default Credits;
