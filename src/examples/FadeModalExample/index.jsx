import React, { useState } from 'react';
import Modal from 'modal-craft';
import './FadeModalExample.css';

const FadeModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="custom-button open" onClick={() => setIsOpen(true)}>Open the Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} fadeDuration={1} fadeDelay={0}>
        <p>This modal has a fade effect of 1 second.</p>
      </Modal>
    </>
  );
};

export default FadeModalExample;
