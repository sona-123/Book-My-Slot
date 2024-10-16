// src/components/Center/CreateCenter.js
import React, { useState } from 'react';
import { createCenter } from '../../api';

const CreateCenter = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCenter({ name, location });
            alert('Center created successfully!');
        } catch (error) {
            alert('Error creating center!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Center Name" onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} required />
            <button type="submit">Create Center</button>
        </form>
    );
};

export default CreateCenter;
