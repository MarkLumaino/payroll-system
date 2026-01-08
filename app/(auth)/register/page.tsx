"use client";

import { useState } from "react";
import api from "@/lib/api";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError(null);

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
  const res = await api.post("/users", {
    name: form.name,
    email: form.email,
    password: form.password,
  });

  setSuccess(true);
  setForm({ name: "", email: "", password: "", confirmPassword: "" });

  window.location.href = '/login';
} catch (err: any) {
  if (err.response?.data?.message) {
    setError(err.response.data.message);
  } else {
    setError("Registration failed");
  }
} finally {
  setLoading(false);
}
};

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/Images/bgStatic.png"
      >
        <source src="/Videos/Background.mp4" type="video/mp4" />
      </video>

      <div className="container mx-auto px-4 py-8 flex items-center justify-between max-w-7xl relative z-10">
        <div className="hidden lg:flex flex-col items-center justify-center w-1/2 pr-12">
          <img
            src="/Images/registerlogo.png"
            alt="Logo"
            className="w-70 h-70 ml-12"
          />
        </div>

        <div className="w-full lg:w-1/2 max-w-2xl mr-20">
          <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-700/50">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Create Account
            </h2>

            <div className="space-y-5">
              {error && (
                <p className="text-red-500 text-center font-medium">{error}</p>
              )}
              {success && (
                <p className="text-green-500 text-center font-medium">
                  Registration successful!
                </p>
              )}

              <div>
                <label className="block text-gray-300 text-sm mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl mt-6 disabled:opacity-50"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
