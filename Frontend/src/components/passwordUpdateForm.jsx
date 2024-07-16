import React, { useState } from 'react';
import { updatePassword } from '../api';

// update passowrd
const PasswordUpdateForm = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updatePassword(formData);
            console.log('Password updated:', response.data);
        } catch (error) {
            console.error('Password update error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="container">
            <h2>Update Password</h2>
            <form onSubmit={handleSubmit}>
                <input type="password" name="currentPassword" placeholder="Current Password" onChange={handleChange} required />
                <input type="password" name="newPassword" placeholder="New Password" onChange={handleChange} required />
                <button type="submit">Update Password</button>
            </form>
        </div>
    );
};

export default PasswordUpdateForm;
