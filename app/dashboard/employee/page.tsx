import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

// app/dashboard/employee/[id]/page.tsx
import PayrollInfo from "./tabs/PayrollInfo";




type EmployeeRowProps = {
  id: number;
  name: string;
  position: string;
  branch: string;
  department: string;
  division: string | null;
};

type CellProps = {
  children: React.ReactNode;
  className?: string;
};


type HeaderCellProps = {
  children: React.ReactNode;
  className?: string;
};


export default async function EmployeeList() {
  const employees = await prisma.employees.findMany({
    orderBy: { ID: "asc" },
  });

  return (

    <div className="min-h-screen bg-gradient-to-b from-[#050c2a] to-[#020617] p-6 text-white">

 
      {/* TABLE */}
      <div className="border-2 border-cyan-400 rounded-lg overflow-hidden">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-[1fr_2fr_2fr_2fr_1.5fr_1.5fr_1fr]
                        bg-[#020617] border-b border-cyan-400 text-sm font-semibold">
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

        {/* ROWS FROM DATABASE */}
        {employees.map((emp) => (
 <Link
    key={emp.ID}
    href={`/dashboard/employee/${emp.ID}`}
    className="block hover:bg-white/5"
  >

          <EmployeeRow
            id={emp.IDNumber}
            name={emp.FullName}
            position={emp.Position}
            branch={emp.Branch}
            department={emp.Department}
            division={emp.Division}
          />
          </Link>
        ))}
      </div>
    </div>
  );
}

function HeaderCell({ children, className = "" }: HeaderCellProps) {
  return <div className={`p-3 ${className}`}>{children}</div>;
}


function EmployeeRow({
  id,
  name,
  position,
  branch,
  department,
  division,
}: EmployeeRowProps) {
  return (
    <div className="grid grid-cols-[1fr_2fr_2fr_2fr_1.5fr_1.5fr_1fr]
                    border-b border-cyan-400 text-sm items-center">

      <Cell>{id}</Cell>
      <Cell>{name}</Cell>
      <Cell>{position}</Cell>
      <Cell>{branch}</Cell>
      <Cell>{department}</Cell>
      <Cell>{division}</Cell>

      <Cell className="flex justify-center gap-3 text-lg">
        <i className="bi bi-check-square cursor-pointer"></i>
        <i className="bi bi-pencil-square cursor-pointer"></i>
        <i className="bi bi-trash cursor-pointer"></i>
      </Cell>
    </div>
  );
}



function Cell({ children, className = "" }: CellProps) {
  return <div className={`p-3 ${className}`}>{children}</div>;
}
