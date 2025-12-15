import Navbar from "../components/navbar";
import DashboardSidebar from "../components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#020617] text-white">
      <DashboardSidebar />

      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
