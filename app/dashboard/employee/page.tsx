"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EmployeeList() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050c2a] to-[#020617] p-6 text-white">

      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="text-xl">
            <i className="bi bi-arrow-left"></i>
          </button>

          <select className="bg-[#020617] border border-cyan-100 text-sm px-3 py-2 rounded w-48">
            <option>Payroll Group</option>
          </select>

          <select className="bg-[#020617] border border-cyan-100 text-sm px-3 py-2 rounded w-48">
            <option>Company</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
            LOCK
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm">
            UNLOCK
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="border-1 border-cyan-60 rounded-lg overflow-hidden">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-[1fr_2fr_2fr_2fr_1.5fr_1.5fr_1fr]
                        bg-[#020617] border-b border-cyan-100 text-sm font-semibold">
          <HeaderCell>ID no</HeaderCell>
          <HeaderCell>Name</HeaderCell>
          <HeaderCell>
            Position <i className="bi bi-filter text-xs ml-1"></i>
          </HeaderCell>
          <HeaderCell>
            Branch <i className="bi bi-filter text-xs ml-1"></i>
          </HeaderCell>
          <HeaderCell>
            Department <i className="bi bi-filter text-xs ml-1"></i>
          </HeaderCell>
          <HeaderCell>
            Division <i className="bi bi-filter text-xs ml-1"></i>
          </HeaderCell>
          <HeaderCell className="text-center">L</HeaderCell>
        </div>

        {/* ROW 1 */}
        <EmployeeRow
          id="17-50"
          name="Maika, Erika"
          position="Admin Head"
          branch="Easyfis Corporation"
          department="Admin"
          division="Cebu"
        />

        {/* ROW 2 */}
        <EmployeeRow
          id="17-51"
          name="Maika, Erika Second"
          position="Admin Head"
          branch="Easyfis Corporation"
          department="Admin"
          division="Cebu"
        />

      </div>
    </div>
  );
}
function HeaderCell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-3 ${className}`}>{children}</div>;
}

function EmployeeRow({
  id,
  name,
  position,
  branch,
  department,
  division,
}: {
  id: string;
  name: string;
  position: string;
  branch: string;
  department: string;
  division: string;
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/dashboard/employee/EmployeeDetails?id=${id}`)}
      className="
        grid grid-cols-[1fr_2fr_2fr_2fr_1.5fr_1.5fr_1fr]
        border-b border-cyan-60
        text-sm
        items-center
        cursor-pointer
        hover:bg-[#0a1a40]
        active:bg-[#112255]
        transition
      "
    >
      <Cell>{id}</Cell>
      <Cell>{name}</Cell>
      <Cell>{position}</Cell>
      <Cell>{branch}</Cell>
      <Cell>{department}</Cell>
      <Cell>{division}</Cell>

   <Cell className="flex justify-center gap-3 text-lg">
  <div onClick={(e) => e.stopPropagation()} className="flex gap-3">
    <i className="bi bi-check-square cursor-pointer"></i>
    <i className="bi bi-pencil-square cursor-pointer"></i>
    <i className="bi bi-trash cursor-pointer"></i>
  </div>
</Cell>

    </div>
  );
}

function Cell({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div onClick={onClick} className={`p-3 ${className}`}>
      {children}
    </div>
  );
}
