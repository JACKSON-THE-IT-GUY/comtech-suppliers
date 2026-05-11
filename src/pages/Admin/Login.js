import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // For now, we will bypass with a mock check
    if (email === "admin@comtech.com") {
      navigate('/admin');
    } else {
      alert("Invalid credentials for ComTech Admin Portal");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md w-full bg-white border border-slate-200 p-10 shadow-sm">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tighter">
            Admin Portal
          </h2>
          <p className="text-slate-500 text-xs mt-2 uppercase tracking-[0.2em]">
            Authorized Personnel Only
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
              Business Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 focus:border-blue-600 focus:ring-0 outline-none transition-colors text-sm"
              placeholder="admin@comtech.com"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
              Secure Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 focus:border-blue-600 focus:ring-0 outline-none transition-colors text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-bold py-4 hover:bg-blue-600 transition-colors uppercase tracking-[0.2em] text-xs"
          >
            Authenticate
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <a
            href="/"
            className="text-slate-400 hover:text-slate-600 text-[10px] uppercase tracking-widest transition-colors"
          >
            Return to Public Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
