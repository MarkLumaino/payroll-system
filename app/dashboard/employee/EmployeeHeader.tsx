"use client"

import { useRouter } from "next/navigation"; 

export default function EmployeeHeader() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between mb-6">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">

        {/* Back Button */}
       <button
          onClick={() => router.push("/dashboard/employee")}
          className="cursor-pointer hover:text-blue-400"
        >
          <i className="bi bi-arrow-left text-xl"></i>
        </button>

        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
          <i className="bi bi-person-fill text-xl"></i>
        </div>

        {/* Name + Status */}
        <div>
          <div className="font-semibold leading-tight">Erika Maika</div>
          <span className="inline-block bg-blue-600 text-xs px-2 py-0.5 rounded">
            Active
          </span>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-white/30 mx-2" />

        {/* Employee ID */}
        <div>
          <div className="text-xs text-white/60">Employee ID</div>
          <div className="text-sm font-medium">17-50</div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex gap-3">
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
          LOCK
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm">
          UNLOCK
        </button>
      </div>
    </div>
  );
}
