import React from "react";

// components
import Button from "./Button";

// redux
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/users/UsersSlise";

function TableRow({ user, onEdit }) {
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteUser(id));
  }

  return (
    <tr className="border-b hover:bg-slate-50 transition">
      <td className="px-6 py-4 font-semibold text-gray-900">{user.id}</td>

      <td className="px-6 py-4">
        <img
          src={user.avatar}
          alt={`${user.firstName} ${user.lastName}`}
          className="h-10 w-10 rounded-full object-cover"
        />
      </td>

      <td className="px-6 py-4 font-medium text-gray-900">{user.firstName}</td>

      <td className="px-6 py-4">{user.lastName}</td>

      <td className="px-6 py-4">{user.age}</td>

      <td className="px-6 py-4 text-blue-600">{user.email}</td>

      <td className="px-6 py-4">{user.phone}</td>

      <td className="px-6 py-4">{user.city}</td>

      <td className="px-6 py-4">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          {user.profession}
        </span>
      </td>

      <td className="px-6 py-4">
        {user.isMarried ? (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Yes
          </span>
        ) : (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
            No
          </span>
        )}
      </td>

      <td className="px-6 py-4 font-semibold text-green-600">${user.salary}</td>

      <td className="px-6 py-4">
        <div className="flex gap-2">
          <Button
            text="Edit"
            variant="secondary"
            onClick={() => onEdit(user)}
          />
          <Button
            text="Delete"
            variant="primary"
            onClick={() => handleDelete(user.id)}
          />
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
