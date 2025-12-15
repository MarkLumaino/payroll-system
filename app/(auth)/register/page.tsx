"use client";

export default function RegisterPage() {
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
          <div className="text-white mb-8">
            {/* Logo */}
            <div className="relative">
                <div className="flex items-center justify-center">
                  <img src="/Images/registerlogo.png" alt="Logo" className="w-70 h-70 ml-12" />
                </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 max-w-2xl mr-20">
          <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-700/50">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Create Account</h2>
            
            <div className="space-y-5">
              {/* Name*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Middle Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
              </div>

              {/* id and email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">ID Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Contact and Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Contact Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Register btn */}
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1] active:scale-[0.50] shadow-lg hover:shadow-blue-800/30 mt-6"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}