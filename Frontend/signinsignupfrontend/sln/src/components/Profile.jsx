import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

const Profile = () => {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            // Handle the case where the user is not available
            console.error('User is not defined');
            // You might want to redirect to login page here
        }
    }, [user]);

    if (!user) {
        return <div>Loading...</div>; // or redirect to login
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Profession: {user.profession}</p>
            <p>Mobile: {user.mobile}</p>
            {/* other user details */}
        </div>
    );
};

export default Profile;
