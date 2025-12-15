"use client";

export default function UserDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050c2a] to-[#020617] text-white p-10">

      {/* HEADER */}
      <div className="flex items-center gap-6 mb-8">
        <button className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
          ←
        </button>

        <Input label="Full Name" />
        <Input label="Username" />
        <Input label="Password" />

        <div className="ml-auto flex gap-3">
          <button className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-500">
            LOCK
          </button>
          <button className="px-6 py-2 rounded bg-blue-500 hover:bg-blue-400">
            UNLOCK
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-6 mb-4 text-sm">
        <button className="flex items-center gap-2 border-b-2 border-blue-500 pb-2">
          👤 Forms
        </button>
        <button className="flex items-center gap-2 text-white/60">
          📁 Payroll Group
        </button>
      </div>

      {/* TABLE */}
<div className="m-6 rounded-xl border border-blue-500/30 overflow-hidden bg-[#020617]/40">
        <table className="w-full text-sm">
          <thead className="bg-[#020617]">
            <tr className="border-b border-white/10">
              <th className="p-3 text-left">
                <Checkbox />
              </th>
              <th className="p-3 text-left">Form</th>
              {HEADERS.map(h => (
                <th key={h} className="p-3 text-center">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {ROWS.map((row) => (
              <tr
                key={row}
                className="
                  border-b border-white/10
                  transition
                  hover:bg-white/10
                  hover:outline
                  hover:outline-1
                  hover:outline-white/30
                "
              >
        <td className="p-3 text-center">
  <div className="flex justify-center">
    <Checkbox />
  </div>
</td>


                <td className="p-3 font-medium">{row}</td>

                {HEADERS.map((_, i) => (
                  <td key={i} className="p-3 text-center">
                    <Checkbox />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

/* INPUT */
const Input = ({ label }: { label: string }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs text-white/70">{label}</label>
    <input
      className="
        w-52 px-3 py-2 rounded
        bg-white/10 border border-white/30
        focus:outline-none focus:ring-1 focus:ring-blue-500
      "
    />
  </div>
);

const Checkbox = () => (
  <span
    className="
      inline-flex
      h-5 w-5
      items-center
      justify-center
      rounded-md
      border border-white
      text-white
    "
  >
    ✓
  </span>
);





/* CONSTANTS */
const HEADERS = [
  "Add",
  "Edit",
  "Delete",
  "Lock",
  "Unlock",
  "Preview",
  "Print",
  "View",
];

const ROWS = [
  "Shift Code List",
  "Shift Code Detail",
  "Menu",
  "Employee List",
  "Employee Detail",
  "Day Type List",
  "Day Type Detail",
  "Leave Application List",
  "Leave Application Detail",
  "Over Time List",
  "Over Time Detail",
  "Change Shift List",
  "Change Shift Detail",
  "DTR List",
  "DTR Detail",
  "Other Income Setup",
  "Other Deduction Setup",
  "Mandatory Deduction Table",
  "Payroll Other Income List",
];
