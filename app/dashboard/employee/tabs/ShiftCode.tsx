export default function ShiftCode() {
  return (
    <div className="grid grid-cols-2 gap-6">

      {/* LEFT: SHIFT CODE LIST */}
      <div className="bg-[#020617] border border-white/10 rounded-lg p-4">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <input type="checkbox" className="accent-blue-500" />
          <h3 className="font-semibold text-sm">Shift Codes</h3>
        </div>

        {/* Shift Item */}
        <div className="flex items-center justify-between border border-white/20 rounded px-3 py-2 text-sm bg-[#050c2a]">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="accent-blue-500" />
            <span>09:00 AM - 06:00 PM RD - Sunday</span>
          </div>
          <button className="text-white/70 hover:text-red-400">
            <i className="bi bi-trash"></i>
          </button>
        </div>

      </div>

      {/* RIGHT: SHIFT CONFIG */}
      <div className="space-y-6">

        {/* TIME */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Time</h4>

          <div className="flex items-center gap-4">
            <TimeSelect label="AM" value="09:00" />
            <span className="text-xl">→</span>
            <TimeSelect label="PM" value="06:00" />
          </div>
        </div>

        {/* DATE */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Date</h4>
          <Calendar />
        </div>

        {/* ADD BUTTON */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-sm font-medium">
          + Add Shift Code
        </button>

      </div>
    </div>
  );
}

function TimeSelect({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-xs text-white/60 mb-1">{label}</div>
      <select
        defaultValue={value}
        className="bg-[#020617] border border-white/20 rounded px-3 py-2 text-sm w-28"
      >
        <option>06:00</option>
        <option>07:00</option>
        <option>08:00</option>
        <option>09:00</option>
        <option>10:00</option>
      </select>
    </div>
  );
}

function Calendar() {
  return (
    <div className="bg-white rounded-lg p-4 text-black w-full max-w-sm">

      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">DECEMBER</span>
        <span className="text-red-500 font-bold">2025</span>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 text-xs font-semibold text-center mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day} className={day === "Sun" || day === "Sat" ? "text-red-500" : ""}>
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 text-sm text-center gap-y-1">
        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
          <div
            key={day}
            className={`cursor-pointer ${
              [6, 7, 13, 14, 20, 21, 27, 28].includes(day)
                ? "text-red-500"
                : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
