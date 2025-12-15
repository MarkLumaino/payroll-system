export default function FamilyContact() {
  return (
    <div className="bg-[#020617] border border-white/10 rounded-lg overflow-hidden">

      {/* TABLE HEADER */}
      <div className="grid grid-cols-[40px_1.5fr_1.5fr_1.5fr_1.5fr_2.5fr_1.5fr_2fr] 
                      bg-[#050c2a] text-sm font-semibold border-b border-white/20 px-4 py-3">
        <input type="checkbox" className="accent-blue-500" />
        <div>First Name</div>
        <div>Middle Name</div>
        <div>Last Name</div>
        <div>Contact Number</div>
        <div>Address</div>
        <div>Relation</div>
        <div className="text-center">Contact for Emergency</div>
      </div>

      {/* ROWS */}
      <FamilyRow
        firstName="Juan"
        middleName="Reyes"
        lastName="Angana"
        contact="09171234567"
        address="Blk 6 Lot 23 Windfields Subd., Danglag, Consolacion"
        relation="Father"
        emergency
      />

      <FamilyRow
        firstName="Maria"
        middleName="Santos"
        lastName="Angana"
        contact="09281234567"
        address="Blk 6 Lot 23 Windfields Subd., Danglag, Consolacion"
        relation="Mother"
        emergency={false}
      />

      <FamilyRow
        firstName="Paolo"
        middleName="Angana"
        lastName="Angana"
        contact="09991234567"
        address="Cebu City, Philippines"
        relation="Brother"
        emergency={false}
      />

    </div>
  );
}
function FamilyRow({
  firstName,
  middleName,
  lastName,
  contact,
  address,
  relation,
  emergency,
}: {
  firstName: string;
  middleName: string;
  lastName: string;
  contact: string;
  address: string;
  relation: string;
  emergency: boolean;
}) {
  return (
    <div className="grid grid-cols-[40px_1.5fr_1.5fr_1.5fr_1.5fr_2.5fr_1.5fr_2fr] 
                    items-center px-4 py-3 text-sm border-b border-white/10">

      <input type="checkbox" className="accent-blue-500" />

      <div>{firstName}</div>
      <div>{middleName}</div>
      <div>{lastName}</div>
      <div>{contact}</div>
      <div className="truncate">{address}</div>
      <div>{relation}</div>

      <div className="flex justify-center">
        <input
          type="checkbox"
          checked={emergency}
          readOnly
          className="accent-blue-500"
        />
      </div>
    </div>
  );
}
