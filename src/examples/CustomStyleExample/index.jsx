import React, { useState } from 'react';
import Modal from '../../lib/ModalCraft';
import './CustomStyleExample.css';

const CustomStyleExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyle = {
    blocker: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(8px)',
    },
    content: {
      backgroundColor: '#343a40',
      borderRadius: '15px',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.3)',
      border: '2px solid #007BFF'
    }
  };

  const customClassNames = {
    blocker: 'custom-modal-blocker',
    content: 'custom-modal-content'
  };

  return (
    <>
      <button className="custom-button open" onClick={() => setIsOpen(true)}>Open the Styled Modal</button>
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        style={customStyle}
        classNames={customClassNames}
      >
        <h2 className="custom-title">Customized Modal</h2>
        <p className="custom-text">I am an extremely stylized modal thanks to our library!</p>
      </Modal>
    </>
  );
};

export default CustomStyleExample;
