"use client";


import Section from "../components/Section";

export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-[#000F33] text-white">
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-8">Dashboard</h1>

        {/* SETUP */}
        <Section
          title="Setup"
          items={[
            { title: "User", icon: "person", path: "/dashboard/users" },
            { title: "Employee", icon: "people", path: "/dashboard/employee" },
            { title: "Company", icon: "building", path: "/dashboard/company" },
            { title: "Mandatory", icon: "list-check", path: "/dashboard/mandatory" },
            { title: "Shift Code", icon: "calendar2-range", path: "/dashboard/shift-code" },
            { title: "Day Type", icon: "brightness-high", path: "/dashboard/day-type" },
            { title: "Other Income", icon: "plus-circle", path: "/dashboard/other-income" },
            { title: "Other Deduction", icon: "dash-circle", path: "/dashboard/other-deduction" },
            { title: "System Tables", icon: "table", path: "/dashboard/system-tables" },
          ]}
        />

        {/* ACTIVITIES */}
        <Section
          title="Activities"
          items={[
            { title: "DTR", icon: "fingerprint", path: "/dashboard/dtr" },
            { title: "Leave Application", icon: "calendar-x", path: "/dashboard/leave" },
            { title: "Overtime Application", icon: "clock-history", path: "/dashboard/overtime" },
            { title: "Loans", icon: "cash-stack", path: "/dashboard/loans" },
            { title: "Payroll", icon: "currency-dollar", path: "/dashboard/payroll" },
            { title: "Change Shift", icon: "arrow-repeat", path: "/dashboard/change-shift" },
          ]}
        />

        {/* REPORTS */}
        <Section
          title="Reports"
          items={[
            { title: "DTR Reports", icon: "file-earmark-bar-graph", path: "/dashboard/reports/dtr" },
            { title: "Payroll Reports", icon: "file-earmark-text", path: "/dashboard/reports/payroll" },
            { title: "Mandatory Reports", icon: "file-earmark-check", path: "/dashboard/reports/mandatory" },
            { title: "Withholding Tax Reports", icon: "file-earmark-ruled", path: "/dashboard/reports/withholding-tax" },
            { title: "Leave Reports", icon: "printer", path: "/dashboard/reports/leave" },
            { title: "Loan Reports", icon: "file-earmark-spreadsheet", path: "/dashboard/reports/loans" },
            { title: "Accounting Reports", icon: "file-earmark-plus", path: "/dashboard/reports/accounting" },
            { title: "ATM/Bank", icon: "credit-card", path: "/dashboard/reports/atm-bank" },
            { title: "Demographics", icon: "bar-chart", path: "/dashboard/reports/demographics" },
          ]}
        />
      </div>
    </div>
  );
}