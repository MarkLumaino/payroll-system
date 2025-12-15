"use client";

import Image from "next/image";

export default function Navbar() {
  return (
<nav className="
  h-20 w-full
  bg-gradient-to-r from-[#050c2a] to-[#020617]
  border-b border-white/10
  flex items-center
  px-8 py-4
">
    <div className="flex items-center gap-3">
    <Image
      src="https://rocksontech.com/wp-content/uploads/2024/12/RS_LOGO_LANDSCAPE_WHITE.svg"
      alt="Rockson"
      width={180}
      height={40}
      priority
    />
  </div>

      {/* CENTER: BREADCRUMB */}
      <div className="ml-8 text-sm text-white/70">

      </div>

  {/* CENTER */}
  <div className="flex-1 flex justify-center text-sm text-white/70">
    Admin <span className="mx-2">/</span> Dashboard
  </div>

  {/* RIGHT */}
  <div className="flex items-center gap-4">
    <Icon>🔍</Icon>
    <Icon>🔔</Icon>
    <div className="h-8 w-8 rounded-full bg-white/20" />
  </div>
</nav>
  );
}

/* ICON WRAPPER */
const Icon = ({ children }: { children: React.ReactNode }) => (
  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer">
    {children}
  </div>
);
