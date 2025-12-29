import { payrollinformation } from "@prisma/client";

// PayrollInfo.tsx (PURE COMPONENT)
export default function PayrollInfo({
  payroll,
}: {
  payroll: payrollinformation | null;
}) {
  if (!payroll) {
    return (
      <div className="border-2 border-cyan-400 rounded-lg p-6 bg-[#020617] text-white">
        No payroll information found.
      </div>
    );
  }

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
          <Input label="GSIS Number" value={payroll.GSISNumber} />
          <Input label="SSS Number" value={payroll.SSSNumber} />
          <Input label="SSS Add-on" value={payroll.SSSAddOn?.toString()} />
          <Checkbox label="SSS Gross Salary" checked={!!payroll.SSSGrossSalary} />

          <Input label="HDMF Number" value={payroll.HDMFNumber} />
          <Input label="HDMF Type" value={payroll.HDMFType} />
          <Input label="HDMF Add-on" value={payroll.HDMFAddOn?.toString()} />
          <Input label="PHIC Number" value={payroll.PHICNumber} />

          <Input label="TIN" value={payroll.TIN} />
          <Input label="Tax Code" value={payroll.TaxCode} />
          <Input label="Tax Table" value={payroll.TaxTable} />
        </Grid>
      </Section>

      {/* COMPANY ASSIGNMENTS */}
      <Section title="Company Assignments">
        <Grid>
          <Input label="Company" value={payroll.Company} />
          <Input label="Branch" value={payroll.Branch} />
          <Input label="Department" value={payroll.Department} />
          <Input label="Position" value={payroll.Position} />

          <Input label="Dep Branch Code" value={payroll.DepBranchCode} />
          <Input label="ATM Account No" value={payroll.ATMAccountNumber} />
        </Grid>
      </Section>

      {/* PAYROLL SETTINGS */}
      <Section title="Payroll Settings">
        <Grid>
          <Input label="Division" value={payroll.Division} />
          <Input label="Payroll Group" value={payroll.PayrollGroup} />
          <Input label="Payroll Type" value={payroll.PayrollType} />
          <Input label="GL Account" value={payroll.GLAccount} />

          <Input label="Shift Code" value={payroll.ShiftCode} />
          <Checkbox
            label="Is Minimum Wage"
            checked={!!payroll.IsMinimumWage}
          />
        </Grid>
      </Section>

      {/* RATES */}
      <Section title="Rates and Work Setup">
        <Grid>
          <Input label="Fix No of Days" value={payroll.FixDays?.toString()} />
          <Input label="Fix No of Hrs" value={payroll.FixHrs?.toString()} />
          <Input label="Monthly Rate" value={payroll.MonthlyRate?.toString()} />
          <Input label="Payroll Rate" value={payroll.PayrollRate?.toString()} />

          <Input label="Daily Rate" value={payroll.DailyRate?.toString()} />
          <Input label="Absent Daily Rate" value={payroll.AbsentDailyRate?.toString()} />
          <Input label="Hourly Rate" value={payroll.HourlyRate?.toString()} />
          <Input label="Night Hourly Rate" value={payroll.NightHourlyRate?.toString()} />

          <Input label="Overtime Hourly Rate" value={payroll.OvertimeHourlyRate?.toString()} />
          <Input label="Overtime Night Hourly Rate" value={payroll.OvertimeNightHourlyRate?.toString()} />
          <Input label="Tardy Hourly Rate" value={payroll.TardyHourlyRate?.toString()} />
        </Grid>
      </Section>
    </div>
  );
}


function Input({
  label,
  value,
}: {
  label: string;
  value?: string | number | null;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        value={value ?? ""}
        readOnly
        className="mt-1 w-full bg-[#050c2a] border border-white/20 rounded px-2 py-1 text-sm"
      />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs text-white/60 mb-1">
      {children}
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

function Checkbox({
  label,
  checked = false,
}: {
  label: string;
  checked?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 mt-6">
      <input
        type="checkbox"
        checked={checked}
        readOnly
        className="accent-blue-500 w-4 h-4 cursor-not-allowed"
      />
      <span className="text-sm">{label}</span>
    </div>
  );
}


