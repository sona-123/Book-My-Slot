// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust based on your backend URL

export const signup = async (userData) => {
    return await axios.post(`${API_URL}/auth/signup`, userData);
};

export const login = async (userData) => {
    return await axios.post(`${API_URL}/auth/login`, userData);
};

export const createCenter = async (centerData) => {
    return await axios.post(`${API_URL}/centers/createCenter`, centerData);
};

export const getCenters = async () => {
    return await axios.get(`${API_URL}/centers/getCenter`);
};

// Similar functions for sports, courts, and bookings can be added here
