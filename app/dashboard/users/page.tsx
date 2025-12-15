"use client";

import { useRouter } from "next/navigation"; 


export default function UserPage() {
   const router = useRouter();
  return (
    <div className="p-6 text-white">

      {/* HEADER + BUTTONS */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">

      {/* BACK BUTTON */}
          <button
            onClick={() => router.push("/dashboard")}
            className="cursor-pointer hover:text-blue-400"
          >
            <i className="bi bi-arrow-left text-xl"></i>
          </button>


          <h1 className="text-2xl font-semibold">User List</h1>
        </div>

        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm">
            ADD
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm">
            CLOSE
          </button>
        </div>
      </div>

      {/* TABLE CONTAINER */}
      <div className="bg-[#010A1F] rounded-xl overflow-hidden border border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#020B28]">
            <tr className="border-b border-slate-700">
              <th className="px-4 py-3">
                <input type="checkbox" className="accent-blue-500" />
              </th>
              <th className="px-4 py-3 text-slate-300 font-medium">User</th>
              <th className="px-4 py-3 text-slate-300 font-medium">Full Name</th>
              <th className="px-4 py-3 text-slate-300 font-medium flex items-center gap-1">
                L <i className="bi bi-check2-square text-xs"></i>
              </th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {/* ROW 1 */}
            <tr className="border-b border-slate-800 hover:bg-[#0A1A40] transition">
              <td className="px-4 py-3">
                <input type="checkbox" className="accent-blue-500" />
              </td>
              <td className="px-4 py-3">Admin</td>
              <td className="px-4 py-3">Admin</td>
              <td className="px-4 py-3">
                <i className="bi bi-check2-square"></i>
              </td>
              <td className="px-4 py-3 flex gap-4">
                <i className="bi bi-pencil text-lg cursor-pointer hover:text-blue-400"></i>
                <i className="bi bi-trash text-lg cursor-pointer hover:text-red-400"></i>
              </td>
            </tr>

            {/* ROW 2 */}
            <tr className="hover:bg-[#0A1A40] transition">
              <td className="px-4 py-3">
                <input type="checkbox" className="accent-blue-500" />
              </td>
              <td className="px-4 py-3">Ventura</td>
              <td className="px-4 py-3">Ventura</td>
              <td className="px-4 py-3">
                <i className="bi bi-check2-square"></i>
              </td>
              <td className="px-4 py-3 flex gap-4">
                <i className="bi bi-pencil text-lg cursor-pointer hover:text-blue-400"></i>
                <i className="bi bi-trash text-lg cursor-pointer hover:text-red-400"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
