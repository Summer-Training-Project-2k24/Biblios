import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import './style.css';

const Profile = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      console.error('User is not defined');
    }
  }, [user]);

  if (!user) {
    return <div>Loading...</div>; // or redirect to login
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
        Biblios
      </a>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex p-6 sm:p-8">
          <img
            className="w-32 h-32 rounded-full shadow-lg mx-auto"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <div className="ml-6 flex flex-col justify-center">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-4">
              Profile
            </h1>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900 dark:text-white">Name:</span>
                <span className="text-gray-700 dark:text-gray-300">{user.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-900 dark:text-white">Email:</span>
                <span className="text-gray-700 dark:text-gray-300">{user.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-900 dark:text-white">Age:</span>
                <span className="text-gray-700 dark:text-gray-300">{user.age}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-900 dark:text-white">Profession:</span>
                <span className="text-gray-700 dark:text-gray-300">{user.profession}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-900 dark:text-white">Mobile:</span>
                <span className="text-gray-700 dark:text-gray-300">{user.mobile}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
