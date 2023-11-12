export const openCloseExampleCode = `import React, { useState } from 'react';
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

`;

export const fadeModalExampleCode = `import React, { useState } from 'react';
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


.custom-button {
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  background-color: blue;
  color: white;
}

.custom-button.open {
  background-color: blue;
  color: white;
}

.modal-blocker {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0; 
  visibility: hidden; 
  transition: opacity 1s ease, visibility 1s ease; 
}

.modal-blocker.shown {
  opacity: 1; 
  visibility: visible; 
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 1s ease, opacity 1s ease; 
  transform: translateY(-20px); 
  opacity: 0; 
}

.modal-blocker.shown .modal-content {
  transform: translateY(0); 
  opacity: 1; 
}


`;

export const customStyleExampleCode = `import React, { useState } from 'react';
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

`;

export const loginFormModalExampleCode = `import React, { useState } from 'react';
import Modal from 'modal-craft';

const LoginFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form data:', formData);
    setIsOpen(false);
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
          transition: 'background-color 0.3s'
        }}
        onClick={() => setIsOpen(true)}
        onMouseOver={({ target }) => target.style.backgroundColor = '#0056b3'}
        onMouseOut={({ target }) => target.style.backgroundColor = '#007BFF'}
      >
        Open Login Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Login</h2>
        <form 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
          onSubmit={handleSubmit}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ flex: 1, textAlign: 'right', marginRight: '1rem' }} htmlFor="username">Username:</label>
            <input 
              style={{ flex: 2 }}
              type="text" 
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ flex: 1, textAlign: 'right', marginRight: '1rem' }} htmlFor="password">Password:</label>
            <input 
              style={{ flex: 2 }}
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
            />
          </div>
          <button 
            type="submit"
            style={{
              padding: '0.25rem 0.5rem', 
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              width: '50%', 
              margin: 'auto'
            }}
          >
            Log In
          </button>
        </form>
      </Modal>
    </>
  );
};

export default LoginFormModal;

`;