import React, { useState } from "react";

// components
import Table from "./companents/Table";
import ModalForm from "./companents/ModalForm";
import Button from "./companents/Button";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  function openAddModal() {
    setEditingUser(null);
    setIsModalOpen(true);
  }

  function openEditModal(user) {
    setEditingUser(user);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setEditingUser(null);
  }

  return (
    <div className="p-6">
      <Table onEdit={openEditModal} />

      <div className="mt-6 flex justify-end">
        <Button text="Add" variant="primary" onClick={openAddModal} />
      </div>

      <ModalForm
        isOpen={isModalOpen}
        onClose={closeModal}
        editingUser={editingUser}
      />
    </div>
  );
}

export default App;
