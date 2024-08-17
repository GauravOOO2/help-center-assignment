"use client"
import React, { useState, useEffect } from 'react';
import RequestFormModal from './RequestFormModal';

function Navbar({setCategoriesEvent}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
 
  return (
    <>
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-lg font-bold">Abstract | Help Center</div>
          <button
            onClick={openModal}
            className="bg-gray-800 py-2 px-4 rounded"
          >
            Submit a request
          </button>
        </div>
      </nav>
      <RequestFormModal setCategoriesEvent={setCategoriesEvent} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Navbar;
