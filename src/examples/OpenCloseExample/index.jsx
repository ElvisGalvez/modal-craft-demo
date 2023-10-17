import React, { useState } from 'react';
import Modal from '../../lib/Modal';
import './OpenCloseExample.css';

const OpenCloseExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="custom-button open" onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Thank you for clicking. That's nice.</p>
        <p className="modal-note">Tip: You can close this modal by using the "Close" button or by pressing the "Escape" key.</p>
      </Modal>
    </>
  );
};

export default OpenCloseExample;