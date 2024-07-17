import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
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
                <img className="ml-2 w-5 h-5" src="https://www.flaticon.com/download/icon/3145385?icon_id=3145385&author=344&team=344&keyword=Download&pack=packs%2Fliterature-33&style=2&format=png&color=%23000000&colored=1&size=512&selection=1&premium=0&type=standard" alt="Ebooks Icon" />
              </span>
              <p className="text-gray-700 dark:text-gray-300">4(items)</p>
            </div>
            <div className="text-center">
              <span className="flex items-center text-lg font-bold text-gray-900 dark:text-white">
                Cart
                <img className="ml-2 w-5 h-5" src="https://www.flaticon.com/download/icon/3514491?icon_id=3514491&author=462&team=462&keyword=Grocery+store&pack=packs%2Fplace-60&style=1223&format=png&color=%23000000&colored=1&size=512&selection=1&premium=0&type=standard&token=03AFcWeA5tY3J-fPwBgjIxfvbLay7CBfV8KbdlgPeLVCpV3LPPL3T5_wXHcDLyayq3CyzmP-FgGGeSkW8yyvsx3g2avkoVQwlv_Khlax7xX-ub8cw-Gcekc2pvbjSmzFuzCzZZ7kpTiEhrhiGW127cI-IsGU4K4u9q2W-u5KiBJrYLOaREMrIu63cLayxA_yeAt9Txb6gcrukxoEB4_O6czrB1EfKlquXZQ7Pub6Stk8abFzZKwlOj7SmIJx9cx9Knp1QeBzN3CI9xK9Tt5sTIpL5izhTX29WDB4LOiiEgBPQ8zidDWhEs_V9US37zp4tDSO3RqqP6qgucbdYY8JYUaal95YIcipxc1Fawzs_1Ce3FNA0ULnR0AoT7c0Z5TMGP9p6z3HBzdCLEWuOPyVp183hegbuPDhknmkuQ4yD3ieZjhZpCTCMhDCfZmhY5Rdrgx2eTZydu9vE0u-hZfiUtsV3OJ4sU6B23CGp_08OIzwWbb_EzFOl5Z1IJOZuCp_rqN_vIIMs89WmoMUyoCGEtp3EhCzmq4Vb7klE4cKhSodaOjOWYnyRyBjRPuX0aCXptGijWlQRoh129AMy2UUhZsc1LIXwgP6ram55SU5uummnkIECvw4ArpBRc16lFjmMnQETET8OXL33SKqqg8cRu4WP_qIvFZQ70gk-M2m_ITRhAiObeVskq1wRCXugOEDjA2eOhKnytgXVL5WKefTHMSTDoc3mWV40TtXRtLAqSi_c3QR8RNJlp-HPFWvpuQ_Q-EDc3KbV36FbyvjU8yvnAC44dlDGqdIhVwt-XiNa9rLILx-p96oU7OWY_oYcRMJqB8slKEL7kLSbKnLWfpy2hHsSJN_AJgfXs3zv9oVN8npzzEJ1jU8gWHncGonrXcaRYMi7eLPeetQ9e70ly5km6rxxUMWFmeZGjcBcGSLAmZ26ZJklKBNsQMXqnEam6Q7lAqW5qba5j6vnyHP7fdielHRB0nlvOa9e3os-9MzHa1HLmvSqWbj9yyXp6JuPdQzZ1O633cSWR--_Jm6tMBkBzOpcFbAQNmGmrprU4YVU3Y4xRT8wqXdWugwMoqGWUSCR6s-FvMQJATXPKydQA4L6V-98rakZLq1u8KFUD4m3ATNI8xYp5oX1UdkVnXokLh8tvzpMkZmzePybEiwuywUEx4l_i2jKpgL4GpCKEJe_3vYi5mGbp-Q065gybWJy5uNWpLf-j8jT1nqzf1VxkGyAxsx0RRPdqoBr86omc1v92BE6MSOoBzYfja1q7RowSIP0-5QcLbMdDayzZ1gp8Y5vzzcNBZM1vFpziOmD0KjNqx9xFTj58FwbPdjttjyjTnSkmjokyrlaHR3NRZgZzYEEo2gYHGN_OPQulQoNNKfpUCup1UL6r0uWWVG4M-OvbF5pLqESbjgzLpECcjZVvGieGz5_6kDWFOhzrripyW9aJ6SrNJMOCN6RuMomEIp7ERM97ABjb-2nDPZdxZT-7g7knzKOHbA_-cabBe_tP9VDiczlBzlh5QMoEjIVNGSjbjnmWi3OPiiQr8UxP-F8kn2m54vTrFvy6E1aJvvqWxcL-GrRnaXUFi7liWYokm3oD-8MOb8j_p0yQjjZ63JkFnOyyCfHJs0u7D6vfJ3qq37GaGwUXqT4mCcGbKi70IQ2xJa6IMF3eCbYNtYKcJYlY-KcBGnfeHVZjki_oEPblvBOl0HXfVkig95zEevNflmRC68LFeDpTLbzgznxkusye-rrzNrTq8ZNeue-oz1qTpZvTC0YxSDuUP-1rMv57dvZ02i6DRW6-qQesxnxQCHjixXuZD6T03y07cOOQvHi3p6IZDnCl7gvWrj15sPKdbv8E711BMVKYDgdsC1l2MQYnCPXKTfK0yOOJrxeNgZ9QDC2j9ciYg0UBMkVSyXYQDhlpy3JhPYHt_1pqEjAmyXs4qkY470Y1fQ_eNdHLGtqLunGL2KVVuhbX6asnRKE" alt="Cart Icon" />
              </span>
              <p className="text-gray-700 dark:text-gray-300">12(items)</p>
            </div>
            <div className="text-center">
              <span className="flex items-center text-lg font-bold text-gray-900 dark:text-white">
                Wishlist
                <img className="ml-2 w-5 h-5" src="https://www.flaticon.com/download/icon/4379608?icon_id=4379608&author=190&team=190&keyword=Wishlist&pack=packs%2Fsupermarket-150&style=863&format=png&color=%23000000&colored=1&size=512&selection=1&premium=0&type=standard" alt="Wishlist Icon" />
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
