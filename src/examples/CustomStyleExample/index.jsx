import React, { useState } from 'react';
import Modal from 'modal-craft';

const CustomStyleExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const customBlockerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(8px)',
  };

  const customContentStyle = {
    backgroundColor: '#343a40',
    borderRadius: '15px',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.3)',
    border: '2px solid #007BFF',
    animation: 'slideIn 0.5s ease'
  };

  return (
    <>
      <button
        style={{
          padding: '12px 25px',
          margin: '10px',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={({ target }) => target.style.backgroundColor = '#0056b3'}
        onMouseOut={({ target }) => target.style.backgroundColor = '#007BFF'}
        onClick={() => setIsOpen(true)}
      >
        Open the Styled Modal
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        style={{ blocker: customBlockerStyle, content: customContentStyle }}
      >
        <h2 style={{ color: '#E9ECEF', marginBottom: '20px', fontSize: '24px', borderBottom: '2px solid #007BFF', paddingBottom: '10px' }}>Customized Modal</h2>
        <p style={{ color: '#b16309' }}>I am an extremely stylized modal thanks to our library!</p>
      </Modal>
    </>
  );
};

export default CustomStyleExample;
