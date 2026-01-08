"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

type UserRow = {
  id: number;
  email: string;
  name: string;
  password: string | null;
};

export default function UserPage() {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await api.get("/users");
        setUsers(res.data);
      } catch (err: any) {
        console.error("Failed to load users", err);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  return (
    <>
      <div className="bg-[#010A1F] rounded-xl overflow-hidden border border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#020B28]">
            <tr className="border-b border-slate-700">
              <th className="px-4 py-3">Full Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-slate-400">
                  Loading users...
                </td>
              </tr>
            )}

            {error && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-red-400">
                  {error}
                </td>
              </tr>
            )}

            {!loading && !error && users.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-slate-400">
                  No users found
                </td>
              </tr>
            )}

            {!loading &&
              users.map((u) => (
                <tr
                  key={u.id}
                  className="border-b border-slate-800 hover:bg-slate-800/40"
                >
                  <td className="px-4 py-3">
                    {u.name}
                  </td>

                  <td className="px-4 py-3">{u.email}</td>

                  <td className="px-4 py-3">
                    {u.password ? (
                      <span className="text-green-400">Active</span>
                    ) : (
                      <span className="text-yellow-400">Pending</span>
                    )}
                  </td>

                  <td className="px-4 py-3 text-right flex gap-3 justify-end">
                    <i className="bi bi-pencil cursor-pointer text-slate-400 hover:text-white" />
                    <i className="bi bi-trash cursor-pointer text-red-400 hover:text-red-300" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
