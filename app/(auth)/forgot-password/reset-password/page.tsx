"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setError("");

    // 🔒 Frontend restriction
    if (!code.trim()) {
      setError("Please enter the verification code");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();
      setLoading(false);

      if (!data.success) {
        // ❌ Wrong code → stay on page
        setError(data.message || "Invalid verification code");
        return;
      }

      // ✅ Correct code → proceed
      router.push("../forgot-password/reset-password/new-password");
    } catch (err) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#020c2a] to-[#071a3d] px-4">

      {/* Logo */}
      <div className="mb-8 text-white flex items-center gap-2">
        <img
          src="https://rocksontech.com/wp-content/uploads/2024/12/RS_LOGO_LANDSCAPE_WHITE.svg"
          alt="Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#1b2b4a] to-[#0f1f3a] shadow-2xl p-8 text-white">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-center mb-2">
          Reset password
        </h1>

        <p className="text-center text-sm text-slate-300 mb-6">
          Please enter the verification code sent to your email.
        </p>

        {/* Input */}
        <div className="mb-4">
          <label className="block text-sm text-slate-300 mb-1">
            Enter Code
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your verification code"
            className="text-white w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Error message */}
        {error && (
          <p className="mb-4 text-sm text-red-400 text-center">
            {error}
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify Code"}
        </button>
      </div>
    </div>
  );
}
