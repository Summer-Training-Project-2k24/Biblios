import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import a from '../assets/a.jpeg'
import b from '../assets/b.jpeg'
import c from '../assets/c.jpeg'
import './style.css';
import circles from './circles.png';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No valid token found, redirecting to login.');
      navigate('/login');
    } else {
      if (!user) {
        fetchUserData(token).then((fetchedUser) => {
          setUser(fetchedUser);
          setLoading(false);
        }).catch(err => {
          console.log(err);
          navigate('/login'); // Redirect if fetching fails
        });
      } else {
        setLoading(false);
      }
    }
  }, [navigate, user, setUser]);

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match');
      return;
    }

    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:3400/user/profile/password', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });
      if (!response.ok) {
        throw new Error('Failed to change password');
      }
      alert('Password changed successfully');
      setShowChangePassword(false);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error(err);
      alert('Failed to change password');
    }
  };

  const handleCloseModal = () => {
    setShowChangePassword(false);
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <section className="bg bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      <div className="  w-full max-w-3xl mt-10">
        <div className=" bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col items-center">
          <div
            className="w-20 h-20 aa mr-2"
            style={{ backgroundImage: `url(${circles})`, backgroundSize: 'cover' }}
          />
          <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            {user.name ? user.name : user.user.name}
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            {user.profession ? user.profession : user.user.profession}
          </p>
          <div className="flex justify-between mt-4 w-full">
            <div className="text-center">
              <span className="flex items-center text-lg font-bold text-gray-900 dark:text-white">
                Ebooks
                <img className="ml-2 w-5 h-5" src={a} alt="Ebooks Icon" />
              </span>
              <p className="text-gray-700 dark:text-gray-300">4(items)</p>
            </div>
            <div className="text-center">
              <span className="flex items-center text-lg font-bold text-gray-900 dark:text-white">
                Cart
                <img className="ml-2 w-5 h-5" src={c} alt="Cart Icon" />
              </span>
              <p className="text-gray-700 dark:text-gray-300">12(items)</p>
            </div>
            <div className="text-center">
              <span className="flex items-center text-lg font-bold text-gray-900 dark:text-white">
                Wishlist
                <img className="ml-2 w-5 h-5" src={b} alt="Wishlist Icon" />
              </span>
              <p className="text-gray-700 dark:text-gray-300">20(items)</p>
            </div>
          </div>
          <div className="mt-4 flex flex-col items-start w-full">
            <div className="flex justify-between w-full">
              <span className="font-medium text-gray-900 dark:text-white">Email:</span>
              <span className="text-gray-700 dark:text-gray-300">
                {user.email ? user.email : user.user.email}
              </span>
            </div>
            <div className="flex justify-between w-full mt-2">
              <span className="font-medium text-gray-900 dark:text-white">Age:</span>
              <span className="text-gray-700 dark:text-gray-300">
                {user.age ? user.age : user.user.age}
              </span>
            </div>
            <div className="flex justify-between w-full mt-2">
              <span className="font-medium text-gray-900 dark:text-white">Mobile:</span>
              <span className="text-gray-700 dark:text-gray-300">
                {user.mobile ? user.mobile : user.user.mobile}
              </span>
            </div>
          </div>
          <div className="mt-6 w-full">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Security</h2>
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowChangePassword(true)}
            >
              Change Password
            </button>
          </div>
          <button
            className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {showChangePassword && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Change Password</h2>
            <form onSubmit={handleChangePassword} className="mt-4 flex flex-col items-start w-full">
              <label className="block text-gray-900 dark:text-white">
                Old Password
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-200 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  required
                />
              </label>
              <label className="block text-gray-900 dark:text-white mt-4">
                New Password
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-200 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  required
                />
              </label>
              <label className="block text-gray-900 dark:text-white mt-4">
                Confirm Password
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-200 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  required
                />
              </label>
              <button
                type="submit"
                className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Save Password
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

async function fetchUserData(token) {
  const response = await fetch('http://localhost:3400/user/profile', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    console.log('Failed to fetch user data');
  }
  return await response.json();
}

export default Profile;
