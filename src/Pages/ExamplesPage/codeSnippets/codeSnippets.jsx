export const openCloseExampleCode = `import React, { useState } from 'react';
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
`;

export const fadeModalExampleCode = `import React, { useState } from 'react';
import Modal from '../../lib/Modal';
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
`;

export const customStyleExampleCode = `
import React, { useState } from 'react';
import Modal from '../../lib/Modal';
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
`;

export const loginFormModalExampleCode = `
import React, { useState } from 'react';
import Modal from '../../lib/Modal';
import './LoginFormModal.css';

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
      <button className="custom-button open" onClick={() => setIsOpen(true)}>Open Login Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </Modal>
    </>
  );
};

export default LoginFormModal;
`;