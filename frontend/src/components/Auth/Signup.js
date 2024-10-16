// Components/Signup.js
import React, { useState } from 'react';
import { signup } from '../../Api/user'; 
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '', role: 'customer' });
  const [error, setError] = useState(''); // Separate error state
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (name) => (event) => {
    setUser({ ...user, [name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await signup(user);

    if (response.error) {
      setError(response.error.message || response.error); // Ensure error is a string
    } else {
      setSuccess(true);
      navigate('/signin');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded-lg space-y-6 w-80"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          onChange={handleChange('name')}
          value={user.name}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          onChange={handleChange('email')}
          value={user.email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          onChange={handleChange('password')}
          value={user.password}
          required
        />
        <select
          onChange={handleChange('role')}
          value={user.role}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
        >
          Sign Up
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">Signup successful! Please sign in.</p>}
      </form>
    </div>
  );
};

export default Signup;
