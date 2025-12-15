export default function LoginPage() {
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

        {/* Title */}
      <div className="mt-18 w-full max-w-md rounded-2xl p-8 bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-700/50"> 
        <h1 className="mb-6 text-center text-2xl font-semibold text-white">
          Welcome
        </h1>
        <p className="mb-8 text-center text-sm text-white">
          Please sign in to your account
        </p>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Username" 
              className="text-white w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            /> 
          </div>

          {/* Password */}
          <div className="relative">
            <i className="bi bi-eye text-white absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer"></i>
            <input
             type="password"
              placeholder="••••••••" 
              className="text-white w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 "
            />                   
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-white focus:ring-blue-500"
              />
              Remember me
            </label>

            <a
              href="/forgot-password"
              className="text-white hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700 cursor-pointer"
          >
            LOGIN
          </button>
        </form>

        {/* Footer */}
       { /*<p className="mt-8 text-center text-sm text-gray-500">
          © 2025 Your Company
        </p>*/}

      </div>
    </div>
  )
}
