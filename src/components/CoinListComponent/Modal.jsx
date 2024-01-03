import React from 'react';

const Modal = ({ isOpen, onClose, coin }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white p-4">
            {/* Add your coin details here */}
            <h2 className="text-2xl font-bold mb-4">{coin.name}</h2>
            <img src={coin.image} alt={coin.name} className="w-20 h-20 mx-auto mb-4" />
            {/* Add more details if needed */}
            {/* Example: <p>Price: {coin.price}</p> */}

            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-400"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
