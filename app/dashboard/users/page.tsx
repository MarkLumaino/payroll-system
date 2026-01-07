"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "../../components/Footer";

type UserRow = {
  id: number;
  email: string;
  role: "ADMIN" | "EMPLOYEE";
  password: string | null;
  employees?: {
    ID: number;
    FullName: string;
    Position: string;
    Branch: string;
    Department: string;
    Division?: string;
  };
};

type PendingEmployee = {
  ID: number;
  FullName: string;
};

export default function UserPage() {
  const router = useRouter();

  const [users, setUsers] = useState<UserRow[]>([]);
  const [pendingEmployees, setPendingEmployees] =
    useState<PendingEmployee[]>([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] =
    useState<PendingEmployee | null>(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch("http://localhost:3001/users/list");
        const data = await res.json();

        setUsers(data.users);
        setPendingEmployees(data.pendingEmployees);
      } catch (err) {
        console.error("Failed to load users", err);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  async function activateEmployee() {
    if (!selectedEmployee) return;

    try {
      setSaving(true);

      await fetch(
        `http://localhost:3001/users/activate/${selectedEmployee.ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      setShowModal(false);
      setUsername("");
      setPassword("");
      setSelectedEmployee(null);

      const res = await fetch("http://localhost:3001/users/list");
      const data = await res.json();

      setUsers(data.users);
      setPendingEmployees(data.pendingEmployees);
    } catch (err) {
      console.error("Activation failed", err);
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      {/* TABLE */}
      <div className="bg-[#010A1F] rounded-xl overflow-hidden border border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#020B28]">
            <tr className="border-b border-slate-700">
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Full Name</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-6 text-center text-slate-400"
                >
                  Loading users...
                </td>
              </tr>
            )}

            {!loading &&
              users.map((u) => (
                <tr
                  key={`user-${u.id}`}
                  className="border-b border-slate-800"
                >
                  <td className="px-4 py-3">{u.email}</td>
                  <td className="px-4 py-3">
                    {u.employees?.FullName ?? "Admin"}
                  </td>
                  <td className="px-4 py-3">
                    {u.password ? (
                      <span className="text-green-400">Active</span>
                    ) : (
                      <span className="text-yellow-400">Pending</span>
                    )}
                  </td>
                  <td className="px-4 py-3 flex gap-3">
                    <i className="bi bi-pencil cursor-pointer" />
                    <i className="bi bi-trash cursor-pointer" />
                  </td>
                </tr>
              ))}

            {!loading &&
              pendingEmployees.map((e) => (
                <tr
                  key={`emp-${e.ID}`}
                  className="border-b border-slate-800 opacity-70"
                >
                  <td className="px-4 py-3">—</td>
                  <td className="px-4 py-3">{e.FullName}</td>
                  <td className="px-4 py-3 text-orange-400">
                    Not Activated
                  </td>
                  <td className="px-4 py-3">
                    <button
                      className="text-blue-400 hover:underline"
                      onClick={() => {
                        setSelectedEmployee(e);
                        setShowModal(true);
                      }}
                    >
                      ADD
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && selectedEmployee && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#020B28] rounded-xl p-6 w-[420px] border border-slate-700">
            <h2 className="text-lg font-semibold mb-4">
              Activate Employee Account
            </h2>

            <div className="mb-3">
              <label className="text-sm text-slate-400">Full Name</label>
              <input
                value={selectedEmployee.FullName}
                disabled
                className="w-full mt-1 px-3 py-2 bg-[#010A1F] border border-slate-600 rounded"
              />
            </div>

            <div className="mb-3">
              <label className="text-sm text-slate-400">Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 px-3 py-2 bg-[#010A1F] border border-slate-600 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm text-slate-400">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-3 py-2 bg-[#010A1F] border border-slate-600 rounded"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 text-sm bg-slate-600 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                disabled={saving || !username || !password}
                className="px-4 py-2 text-sm bg-blue-600 rounded disabled:opacity-50"
                onClick={activateEmployee}
              >
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
