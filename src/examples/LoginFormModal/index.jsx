import React, { useState } from 'react';
import Modal from '../../lib/ModalCraft';
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
