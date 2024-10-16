import axios from 'axios';

// Signup Function
export const signup = async (userData) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/auth/signup', // Backend URL from .env
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data; // Return response data on success
  } catch (error) {
    // Handle and return error message
    return {
      error: error.response ? error.response.data : 'Network Error',
    };
  }
};

// Signin Function
export const signin = async (userData) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/auth/login', // Backend URL from .env
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data; // Return response data on success
  } catch (error) {
    return {
      error: error.response ? error.response.data : 'Network Error',
    };
  }
};

// Save JWT token in localStorage
export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

// Check if the user is authenticated
// Api/Auth.js

export const isAuthenticated = () => {
    if (typeof window === 'undefined') return false;
  
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      return JSON.parse(jwt); // Extract user details from JWT
    }
    return false;
  };
  
