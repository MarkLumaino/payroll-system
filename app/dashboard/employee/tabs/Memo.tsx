export default function Memo() {
  return (
    <div className="bg-[#020617] border border-white/10 rounded-lg overflow-hidden">

      {/* TABLE HEADER */}
      <div className="grid grid-cols-[40px_1fr_2fr_2fr_40px] items-center bg-[#050c2a] border-b border-white/20 text-sm font-semibold px-4 py-3">
        <input type="checkbox" className="accent-blue-500" />
        <div>Date</div>
        <div>Subject</div>
        <div>File Path</div>
        <div></div>
      </div>

      {/* ROW */}
      <MemoRow />
      <MemoRow />

    </div>
  );
}
function MemoRow() {
  return (
    <div className="grid grid-cols-[40px_1fr_2fr_2fr_40px] items-center px-4 py-3 border-b border-white/10 text-sm">

      <input type="checkbox" className="accent-blue-500" />

      <div className="flex gap-2">
        <ActionButton label="Attach" />
        <ActionButton label="Content" />
        <ActionButton label="Print" />
      </div>

      <div></div>
      <div></div>

      <button className="text-white/70 hover:text-red-400">
        <i className="bi bi-trash"></i>
      </button>

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
