// Components/Signin.js
import React, { useState } from 'react';
import { signin, authenticate } from '../../Api/user'; 
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState(''); // Separate error state for display
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (name) => (event) => {
    setUser({ ...user, [name]: event.target.value });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await signin(user);

    if (response.error) {
      setError(response.error.message || response.error); // Ensure error is a string
      setLoading(false);
    } else {
      authenticate(response, () => {
        setLoading(false);
        navigate('/');
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSignIn}
        className="bg-white p-8 shadow-lg rounded-lg space-y-6 w-80"
      >
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
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
        <button
          type="submit"
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Signin;
