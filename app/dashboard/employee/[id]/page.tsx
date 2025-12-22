"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

import GeneralInfo from "../tabs/GeneralInfo";
import PayrollInfo from "../tabs/PayrollInfo";
import Memo from "../tabs/Memo";
import ShiftCode from "../tabs/ShiftCode";
import FamilyContact from "../tabs/FamilyContact";
import EducationAndWork from "../tabs/EducationAndWork";
import EmployeeHeader from "../EmployeeHeader";

type Tab =
  | "general"
  | "payroll"
  | "memo"
  | "shift"
  | "family"
  | "education"
  | "history";

export default function EmployeePage() {
  const { id } = useParams<{ id: string }>(); 
  const [activeTab, setActiveTab] = useState<Tab>("general");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050c2a] to-[#020617] p-6 text-white">
      
      {/* 👤 EMPLOYEE PROFILE HEADER */}
      <EmployeeHeader employeeId={id} />

      {/* 🔹 TABS */}
      <div className="flex gap-6 text-sm mb-6 border-b border-white/20 pb-2">
        <TabButton label="General Information" tab="general" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton label="Payroll Information" tab="payroll" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton label="Memo" tab="memo" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton label="Shift Code" tab="shift" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton label="Family and Contact" tab="family" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton label="Education and Work" tab="education" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton label="History of Changes" tab="history" activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* 🔹 TAB CONTENT */}
      {activeTab === "general" && <GeneralInfo />}
      {activeTab === "payroll" && <PayrollInfo />}
      {activeTab === "memo" && <Memo />}
      {activeTab === "shift" && <ShiftCode />}
      {activeTab === "family" && <FamilyContact />}
      {activeTab === "education" && <EducationAndWork />}
      {activeTab === "history" && <Placeholder title="History of Changes" />}
    </div>
  );
}


function TabButton({
  label,
  tab,
  activeTab,
  setActiveTab,
}: {
  label: string;
  tab: string;
  activeTab: string;
  setActiveTab: (tab: any) => void;
}) {
  const isActive = activeTab === tab;

  return (
    <button
      onClick={() => setActiveTab(tab)}
      className={`pb-2 transition ${
        isActive
          ? "border-b-2 border-blue-500 text-white"
          : "text-white/70 hover:text-white"
      }`}
    >
      {label}
    </button>

    
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="border border-white/20 rounded-lg p-6 text-white/60">
      {title} content goes here
    </div>
  );
}


