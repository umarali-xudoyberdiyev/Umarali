import React, { useEffect, useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { addUser, editUser } from "../redux/users/UsersSlise";

// components
import Button from "./Button";

const emptyForm = {
  avatar: "",
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  phone: "",
  city: "",
  profession: "",
  isMarried: false,
  salary: "",
};

function ModalForm({ isOpen, onClose, editingUser }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState(emptyForm);

  const isEditMode = Boolean(editingUser);

  // Fill (or clear) the inputs whenever the modal opens
  useEffect(() => {
    if (isOpen) {
      setForm(
        editingUser
          ? {
              avatar: editingUser.avatar || "",
              firstName: editingUser.firstName || "",
              lastName: editingUser.lastName || "",
              age: editingUser.age ?? "",
              email: editingUser.email || "",
              phone: editingUser.phone || "",
              city: editingUser.city || "",
              profession: editingUser.profession || "",
              isMarried: editingUser.isMarried || false,
              salary: editingUser.salary ?? "",
            }
          : emptyForm,
      );
    }
  }, [isOpen, editingUser]);

  if (!isOpen) return null;

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.firstName.trim() || !form.lastName.trim() || !form.age) return;

    const payload = {
      ...form,
      age: Number(form.age) || 0,
      salary: Number(form.salary) || 0,
      avatar:
        form.avatar.trim() ||
        `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
    };

    if (isEditMode) {
      dispatch(editUser({ ...editingUser, ...payload }));
    } else {
      dispatch(addUser(payload));
    }

    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-lg font-semibold text-gray-900">
          {isEditMode ? "Edit user" : "Add user"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Avatar (link)
            </label>
            <input
              type="text"
              value={form.avatar}
              onChange={(e) => handleChange("avatar", e.target.value)}
              placeholder="https://i.pravatar.cc/150?img=1"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
              autoFocus
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                placeholder="First name"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                placeholder="Last name"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                min="0"
                value={form.age}
                onChange={(e) => handleChange("age", e.target.value)}
                placeholder="Age"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Salary
              </label>
              <input
                type="number"
                min="0"
                value={form.salary}
                onChange={(e) => handleChange("salary", e.target.value)}
                placeholder="Salary"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="name@example.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+998901112233"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
                placeholder="Toshkent"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Profession
            </label>
            <input
              type="text"
              value={form.profession}
              onChange={(e) => handleChange("profession", e.target.value)}
              placeholder="Frontend Developer"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500"
            />
          </div>

          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={form.isMarried}
              onChange={(e) => handleChange("isMarried", e.target.checked)}
              className="h-4 w-4 rounded border-gray-300"
            />
            Married
          </label>

          <div className="mt-2 flex justify-end gap-2">
            <Button text="Cancel" variant="outline" onClick={onClose} />
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-blue-600"
            >
              {isEditMode ? "Save" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
