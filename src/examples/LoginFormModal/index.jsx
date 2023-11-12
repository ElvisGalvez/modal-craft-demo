import React, { useState } from 'react';
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
