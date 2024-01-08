import React, { useState } from "react";
import axios from "axios";

interface DeleteAlertProps {
  id: number;
  onDelete: () => void;
}

function DeleteAlert({ id, onDelete }: DeleteAlertProps): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  const deleteUser = () => {
    axios.delete(`http://localhost:8080/produto/${id}`).then(() => {
      setShowModal(false);
      onDelete();
    });
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-red-600 text-white px-6 py-2 rounded-lg"
      >
        Delete
      </button>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg font-semibold mb-4">
              Tem certeza que deseja excluir este item?
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                Cancelar
              </button>
              <button
                onClick={deleteUser}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Confirmar Exclusão
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteAlert;
