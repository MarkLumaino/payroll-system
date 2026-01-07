import { PersonalInformation } from "@prisma/client";
import React from "react";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#020617] rounded-lg border border-white/10 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <i className="bi bi-person-fill"></i> {title}
        </h3>
        <button className="text-sm flex items-center gap-1 border border-white/20 px-3 py-1 rounded hover:bg-white/10">
          <i className="bi bi-pencil-square"></i> Edit
        </button>
      </div>
      {children}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-4 gap-4 text-sm">{children}</div>;
}

function Field({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-xs text-white/60">{children}</div>;
}

function Value({ children }: { children: React.ReactNode }) {
  return <div className="font-medium">{children}</div>;
}

function Divider() {
  return <div className="col-span-4 border-t border-white/10 my-2" />;
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-semibold mb-4 text-white/90">
      {children}
    </div>
  );
}


type GeneralInfoProps = {
  personalInfo: any | null;
};

export default function GeneralInfo({ personalInfo }: GeneralInfoProps) {
  if (!personalInfo) {
    return (
      <div className="text-white/60">
        No personal information available.
      </div>
    );
  }

  const fullName = `${personalInfo.LastName}, ${personalInfo.FirstName}${
    personalInfo.MiddleName ? ` ${personalInfo.MiddleName}` : ""
  }${personalInfo.ExtensionName ? ` ${personalInfo.ExtensionName}` : ""}`;

  return (
    <div className="grid grid-cols-3 gap-6">

      {/* LEFT COLUMN */}
      <div className="col-span-2 space-y-6">

        {/* PERSONAL INFORMATION */}
        <Card title="Personal Information">
          <Grid>
            <Field label="Full Name" value={fullName} />
            <Field label="Age" value={personalInfo.Age?.toString() ?? "—"} />
            <Field label="Sex" value={personalInfo.Sex ?? "—"} />

            <Divider />

            <Field label="Last Name" value={personalInfo.LastName} />
            <Field label="First Name" value={personalInfo.FirstName} />
            <Field label="Middle Name" value={personalInfo.MiddleName ?? "—"} />
            <Field label="Extension Name" value={personalInfo.ExtensionName ?? "—"} />

            <Divider />

            <Field label="Civil Status" value={personalInfo.CivilStatus ?? "—"} />
            <Field label="Citizenship" value={personalInfo.Citizenship ?? "—"} />
            <Field label="Religion" value={personalInfo.Religion ?? "—"} />

            <Divider />

            <Field
              label="Date of Birth"
              value={
                personalInfo.DateOfBirth
                  ? personalInfo.DateOfBirth.toLocaleDateString()
                  : "—"
              }
            />
            <Field label="Place of Birth" value={personalInfo.PlaceOfBirth ?? "—"} />
            <Field label="Birth Zip Code" value={personalInfo.BirthZipCode ?? "—"} />

            <Divider />

            <Field label="Height (cm)" value={personalInfo.Height?.toString() ?? "—"} />
            <Field label="Weight (kg)" value={personalInfo.Weight?.toString() ?? "—"} />
            <Field label="Blood Type" value={personalInfo.BloodType ?? "—"} />
            <Field label="T-Shirt Type" value={personalInfo.TshirtType ?? "—"} />
          </Grid>
        </Card>

        {/* ADDRESS INFORMATION (leave as-is for now) */}
   <Card title="Address Information">
  <div className="text-sm text-white/60">—</div>
</Card>

      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-6">
        {/* unchanged */}
      </div>
    </div>
  );
}
