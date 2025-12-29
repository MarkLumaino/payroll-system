import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import EmployeeTabs from "./EmployeeTabs";
import PayrollInfo from "../tabs/PayrollInfo";
import { notFound } from "next/navigation";
import EmployeeHeader from "../EmployeeHeader";

export const runtime = "nodejs";

export default async function EmployeePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const employeeId = Number(id);

  if (!Number.isInteger(employeeId)) {
    notFound();
  }




  const payrollRaw = await prisma.payrollinformation.findFirst({ //will show payinfo depends on employee id
    where: {
      EmployeeID: employeeId, 
    },
  });

    const employee = await prisma.employees.findUnique({
    where: { ID: employeeId },
    include: {
            personalinformation: true,
    }
              // optional
    
  });

    if (!employee) {
  notFound();
}


const payroll = payrollRaw
  ? {
      ...payrollRaw,
      SSSAddOn: payrollRaw.SSSAddOn?.toNumber() ?? null,
      SSSGrossSalary: payrollRaw.SSSGrossSalary?.toNumber() ?? null,
      HDMFAddOn: payrollRaw.HDMFAddOn?.toNumber() ?? null,
      MonthlyRate: payrollRaw.MonthlyRate?.toNumber() ?? null,
      PayrollRate: payrollRaw.PayrollRate?.toNumber() ?? null,
      DailyRate: payrollRaw.DailyRate?.toNumber() ?? null,
      AbsentDailyRate: payrollRaw.AbsentDailyRate?.toNumber() ?? null,
      HourlyRate: payrollRaw.HourlyRate?.toNumber() ?? null,
      NightHourlyRate: payrollRaw.NightHourlyRate?.toNumber() ?? null,
      OvertimeHourlyRate: payrollRaw.OvertimeHourlyRate?.toNumber() ?? null,
      OvertimeNightHourlyRate: payrollRaw.OvertimeNightHourlyRate?.toNumber() ?? null,
      TardyHourlyRate: payrollRaw.TardyHourlyRate?.toNumber() ?? null,
    }
  : null;
return (
   <div className="min-h-screen bg-gradient-to-b from-[#050c2a] to-[#020617] p-6 text-white">

      <EmployeeHeader
      employeeId={employee.ID}
      fullName={employee.FullName || "N/A"}
      status="Active"
    />

    <EmployeeTabs
      employee={employee}
      payroll={payroll}
    />
  </div>
);
}
