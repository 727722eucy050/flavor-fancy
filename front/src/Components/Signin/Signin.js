import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signin.css';
import bg from './images/food1.webp';
import axios from 'axios';  // Add axios for making HTTP requests

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/users');
      const user = response.data.find(user => user.userName === username);

      if (user && user.password === password) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/home');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="form-section">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">Login</button>
          <div className="register-link">
            Don't have an account? <Link to="/signup">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
