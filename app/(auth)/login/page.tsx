'use client';

import { use, useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

async function handleLogin() {
  setLoading(true);
  setError('');

  try {
    const res = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // ✅ allow cookie
      body: JSON.stringify({
        email: username, 
        password,
      }),
    });

    if (!res.ok) {
      throw new Error('Invalid email or password');
    }

 

    window.location.href = '/dashboard';
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}

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

      {/* Logo */}
      <div className="absolute inset-x-0 top-16 flex justify-center z-10">
        <img
          src="https://rocksontech.com/wp-content/uploads/2024/12/RS_LOGO_LANDSCAPE_WHITE.svg"
          alt="Logo"
          className="h-12 w-auto"
        />
      </div>

      <div className="mt-18 w-full max-w-md bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-700/50 z-10">
        <h1 className="mb-6 text-center text-2xl font-semibold text-white">
          Welcome
        </h1>
        <p className="mb-8 text-center text-sm text-white">
          Please sign in to your account
        </p>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-white w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-transparent"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-white w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-transparent"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-400 text-center">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'LOGGING IN…' : 'LOGIN'}
          </button>
        </form>
      </div>
    </div>
  );
}
