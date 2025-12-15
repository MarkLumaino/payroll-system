export default function GeneralInfo() {
  return (
    <div className="grid grid-cols-3 gap-6">

      {/* LEFT COLUMN */}
      <div className="col-span-2 space-y-6">

        {/* PERSONAL INFORMATION */}
        <Card title="Personal Information">
          <Grid>
            <Field label="Full Name" value="Angana, Erika Maika O." />
            <Field label="Age" value="32" />
            <Field label="Sex" value="Female" />

            <Divider />

            <Field label="Last Name" value="Angana" />
            <Field label="First Name" value="Erika Maika" />
            <Field label="Middle Name" value="Omega" />
            <Field label="Extension Name" value="—" />

            <Divider />

            <Field label="Civil Status" value="Single" />
            <Field label="Citizenship" value="Filipino" />
            <Field label="Religion" value="Roman Catholic" />

            <Divider />

            <Field label="Date of Birth" value="03/05/1993" />
            <Field label="Place of Birth" value="Mandaue, Cebu City" />
            <Field label="Birth Zip Code" value="6014" />

            <Divider />

            <Field label="Height (cm)" value="0" />
            <Field label="Weight (kg)" value="0" />
            <Field label="Blood Type" value="—" />
            <Field label="T-Shirt Type" value="—" />
          </Grid>
        </Card>

        {/* ADDRESS INFORMATION */}
        <Card title="Address Information">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="col-span-2">
              <Label>Residential Address</Label>
              <Value>
                Blk 6 Lot 23 Windfields Subd. Danglag, Consolacion
              </Value>
            </div>

            <div>
              <Label>Zip Code</Label>
              <Value>6001</Value>
            </div>

            <div className="col-span-3 flex justify-end text-blue-400 text-xs cursor-pointer">
              View on Map →
            </div>

            <div className="col-span-3">
              <Label>Notes</Label>
              <input
                className="mt-1 w-full bg-[#050c2a] border border-white/20 rounded px-3 py-2 text-sm"
                placeholder=""
              />
            </div>
          </div>
        </Card>

      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-6">

        {/* CONTACT INFORMATION */}
        <Card title="Contact Information">
          <SubTitle>Personal Contact</SubTitle>
          <div className="space-y-4 text-sm">
            <Field label="Telephone No" value="N/A" />
            <Field label="Cellphone Number" value="09923887854" />
            <Field label="Email" value="akiramaika@gmail.com" />
          </div>
        </Card>

        {/* EMPLOYMENT OVERVIEW */}
        <Card title="Employment Overview">
          <div className="space-y-4 text-sm">
            <Field label="Biometric ID Number" value="1" />
            <Field label="Date Hired" value="08/16/2018" />
            <Field label="Date Resigned" value="—" />
          </div>
        </Card>

      </div>
    </div>
  );
}

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

function Field({ label, value }: { label: string; value: string }) {
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

