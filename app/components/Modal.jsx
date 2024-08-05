import React from "react";

const Modal = ({ show, onClose, imageSrc }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-10 right-5 bg-pink-900 text-white rounded-full p-3"
        >
          X
        </button>
        <img src={imageSrc} alt="Project" className="max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default Modal;
