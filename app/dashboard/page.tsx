export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-[#000F33] text-white">

   

      {/* CONTENT */}
      <div className="p-6">

        <h1 className="text-2xl font-semibold mb-8">Dashboard</h1>

        {/* SETUP */}
        <Section title="Setup">
          {[
            ["User", "person"],
            ["Employee", "people"],
            ["Company", "building"],
            ["Mandatory", "list-check"],
            ["Shift Code", "calendar2-range"],
            ["Day Type", "brightness-high"],
            ["Other Income", "plus-circle"],
            ["Other Deduction", "dash-circle"],
            ["System Tables", "table"],
          ]}
        </Section>

        {/* ACTIVITIES */}
        <Section title="Activities">
          {[
            ["DTR", "fingerprint"],
            ["Leave Application", "calendar-x"],
            ["Overtime Application", "clock-history"],
            ["Loans", "cash-stack"],
            ["Payroll Other Income", "plus-circle"],
            ["Payroll Other Deduction", "dash-circle"],
            ["Last Withholding", "receipt"],
            ["Payroll", "currency-dollar"],
            ["Change Shift", "arrow-repeat"],
          ]}
        </Section>

        {/* REPORTS */}
        <Section title="Reports">
          {[
            ["DTR Reports", "file-earmark-bar-graph"],
            ["Payroll Reports", "file-earmark-text"],
            ["Mandatory Reports", "file-earmark-check"],
            ["Withholding Tax Reports", "file-earmark-ruled"],
            ["Leave Reports", "file-earmark-break"],
            ["Loan Reports", "file-earmark-spreadsheet"],
            ["Accounting Reports", "file-earmark-plus"],
            ["ATM/Bank", "credit-card"],
            ["Demographics", "bar-chart"],
          ]}
        </Section>

      </div>
    </div>
  );
}


function Section({ title, children }) {
  return (
    <div className="mb-12">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {children.map(([text, icon]) => (
          <MenuCard key={text} title={text} icon={icon} />
        ))}
      </div>
    </div>
  );
}

function MenuCard({ title, icon }) {
  return (
    <div className="bg-[#0A1A40] p-4 rounded-2xl flex flex-col items-center justify-center shadow hover:bg-[#112255] transition cursor-pointer">
      <i className={`bi bi-${icon} text-white text-4xl mb-3 opacity-90`}></i>
      <p className="text-sm text-center font-medium">{title}</p>
    </div>
  );
}
