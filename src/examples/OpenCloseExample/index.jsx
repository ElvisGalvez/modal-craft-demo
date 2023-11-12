import React, { useState } from 'react';
import Modal from 'modal-craft';

const OpenCloseExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        style={{
          padding: '10px 15px',
          margin: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={({ target }) => target.style.backgroundColor = '#0056b3'}
        onMouseOut={({ target }) => target.style.backgroundColor = '#007bff'}
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            maxHeight: '80%',
            overflowY: 'auto'
          }}
        >
          <p>Thank you for clicking. That's nice.</p>
          <p>Tip: You can close this modal by using the "Close" button or by pressing the "Escape" key.</p>
        </div>
      </Modal>
    </>
  );
};

export default OpenCloseExample;
