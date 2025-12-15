export default function PayrollInfo() {
  return (
    <div className="border-2 border-cyan-400 rounded-lg p-6 bg-[#020617]">

      {/* HEADER */}
      <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <i className="bi bi-cash-stack"></i>
        Payroll
      </h2>

      {/* GOVERNMENT IDS */}
      <Section title="Government IDs">
        <Grid>
          <Input label="GSIS Number" value="N/A" />
          <Input label="SSS Number" value="N/A" />
          <Input label="SSS Add-on" value="0.00" />
          <Checkbox label="SSS Gross Salary" />

          <Input label="HDMF Number" value="N/A" />
          <Select label="HDMF Type" value="Value" />
          <Input label="HDMF Add-on" value="0.00" />
          <Input label="PHIC Number" value="N/A" />

          <Input label="TIN" value="N/A" />
          <Select label="Tax Code" value="Z" />
          <Select label="Tax Table" value="Semi-Monthly" />
        </Grid>
      </Section>

      {/* COMPANY ASSIGNMENTS */}
      <Section title="Company Assignments">
        <Grid>
          <Select label="Company" value="ICONIC" />
          <Select label="Branch" value="Easyfis Corporation" />
          <Select label="Department" value="Software Development" />
          <Select label="Position" value="Software Development" />

          <Select label="Dep Branch Code" value="#Name?" />
          <Input label="ATM Account No" />
        </Grid>
      </Section>

      {/* PAYROLL SETTINGS */}
      <Section title="Payroll Settings">
        <Grid>
          <Select label="Division" value="Cebu" />
          <Select label="Payroll Group" value="Easyfis Corporation" />
          <Select label="Payroll Type" value="Variable" />
          <Select label="GL Account" value="Salaries and Wages" />

          <Select label="Shift Code" value="09:00 AM - 06:00 PM RD - Sunday" />
          <Checkbox label="Is Minimum Wage" />
        </Grid>
      </Section>

      {/* RATES */}
      <Section title="Rates and Work Setup">
        <Grid>
          <Input label="Fix No of Days" value="26" />
          <Input label="Fix No of Hrs" value="8" />
          <Input label="Monthly Rate" value="50,000.00" />
          <Input label="Payroll Rate" value="25,000.00" />

          <Input label="Daily Rate" value="1,923.08" />
          <Input label="Absent Daily Rate" value="1,923.08" />
          <Input label="Hourly Rate" value="240.38" />
          <Input label="Night Hourly Rate" value="24.04" />

          <Input label="Overtime Hourly Rate" value="300.48" />
          <Input label="Overtime Night Hourly Rate" value="30.05" />
          <Input label="Tardy Hourly Rate" value="240.38" />
        </Grid>
      </Section>

    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h3 className="text-blue-400 text-sm font-semibold mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-4 gap-4 text-sm">
      {children}
    </div>
  );
}

function Input({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        value={value}
        readOnly
        className="mt-1 w-full bg-[#050c2a] border border-white/20 rounded px-2 py-1 text-sm"
      />
    </div>
  );
}

function Select({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        defaultValue={value}
        className="mt-1 w-full bg-[#050c2a] border border-white/20 rounded px-2 py-1 text-sm"
      >
        <option>{value}</option>
      </select>
    </div>
  );
}

function Checkbox({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mt-6">
      <input
        type="checkbox"
        className="accent-blue-500 w-4 h-4"
      />
      <span className="text-sm">{label}</span>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs text-white/60">
      {children}
    </div>
  );
}
