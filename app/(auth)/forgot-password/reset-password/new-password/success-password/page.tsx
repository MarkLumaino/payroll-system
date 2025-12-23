// app/reset-success/page.tsx
"use client";
import { useRouter } from "next/navigation";


export default function ResetSuccessPage() {
 const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#020c2a] to-[#071a3d] px-4">
      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-8 text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            <img
          src="https://rocksontech.com/wp-content/uploads/2024/12/RS_LOGO_LANDSCAPE_WHITE.svg"
          alt="Logo"
         className="h-12 w-auto"
        />
          </div>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>

          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-white mb-2">
          Successfully Changed
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-300 mb-6">
          Your password has been successfully changed.
        </p>

        {/* Button */}
        <button
         onClick={() => router.push("/login")}

          className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors py-3 text-sm font-medium text-white"
        >
          Go to login
        </button>
      </div>
    </div>
  );
}
