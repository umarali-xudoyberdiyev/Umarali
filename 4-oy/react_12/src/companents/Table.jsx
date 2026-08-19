import React from "react";
import { useSelector } from "react-redux";
import TableRow from "./Tablerow";

function Table({ onEdit }) {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
      <table className="w-full min-w-[1200px] text-left text-sm text-gray-600">
        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
          <tr>
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Avatar</th>
            <th className="px-6 py-4">First Name</th>
            <th className="px-6 py-4">Last Name</th>
            <th className="px-6 py-4">Age</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Phone</th>
            <th className="px-6 py-4">City</th>
            <th className="px-6 py-4">Profession</th>
            <th className="px-6 py-4">Married</th>
            <th className="px-6 py-4">Salary</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {users.map((user) => (
            <TableRow key={user.id} user={user} onEdit={onEdit} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
