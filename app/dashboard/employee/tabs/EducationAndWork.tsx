export default function EducationWork() {
  return (
    <div className="bg-[#020617] border border-white/10 rounded-lg overflow-hidden">

      {/* TABLE HEADER */}
      <div
        className="grid grid-cols-[40px_3fr_2.5fr_2fr_2fr_2fr]
                   bg-[#050c2a] border-b border-white/20
                   text-sm font-semibold px-4 py-3"
      >
        <input type="checkbox" className="accent-blue-500" />
        <div>Institution / Company Address</div>
        <div>Course / Position</div>
        <div>Contact Number</div>
        <div>Date From - To</div>
        <div>Remarks</div>
      </div>

      {/* ROWS */}
      <EducationWorkRow
        institution="University of San Jose–Recoletos, Cebu City"
        role="Bachelor of Science in Information Technology"
        contact="(032) 253-7900"
        date="2014 - 2018"
        remarks="Graduated"
      />

      <EducationWorkRow
        institution="Easyfis Corporation, Cebu City"
        role="Software Developer"
        contact="0917 888 2345"
        date="2019 - 2023"
        remarks="Regular Employee"
      />

    </div>
  );
}
function EducationWorkRow({
  institution,
  role,
  contact,
  date,
  remarks,
}: {
  institution: string;
  role: string;
  contact: string;
  date: string;
  remarks: string;
}) {
  return (
    <div
      className="grid grid-cols-[40px_3fr_2.5fr_2fr_2fr_2fr]
                 items-center px-4 py-3 text-sm
                 border-b border-white/10"
    >
      <input type="checkbox" className="accent-blue-500" />

      <div className="flex gap-2">
        <ActionButton label="Attach" />
        <ActionButton label="View" />
        <span className="ml-3">{institution}</span>
      </div>

      <div>{role}</div>
      <div>{contact}</div>
      <div>{date}</div>
      <div>{remarks}</div>
    </div>
  );
}
function ActionButton({ label }: { label: string }) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-xs px-3 py-1 rounded">
      {label}
    </button>
  );
}
