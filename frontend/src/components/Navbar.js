// Components/Navbar.js
import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../Api/user'; // Ensure proper import

const NavbarLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Store user info

  useEffect(() => {
    const authData = isAuthenticated(); // Check if user is logged in
    if (authData) {
      setUser(authData.user); // Store the user details from JWT
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwt'); // Clear JWT on logout
    setUser(null); // Clear user state
    navigate('/signin'); // Redirect to Sign In page
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold text-center">NEXUS</h1>
        <nav className="mt-8">
          <ul className="space-y-4">
            <li>
              <button
                className="w-full py-2 text-left hover:bg-gray-700 px-3 rounded"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                className="w-full py-2 text-left hover:bg-gray-700 px-3 rounded"
                onClick={() => navigate('/schedule')}
              >
                Schedule
              </button>
            </li>

            {user ? (
              <li className="py-2 px-3 rounded bg-gray-700 text-white flex items-center justify-between">
                <span>Welcome, {user.name}!</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <button
                    className="w-full py-2 text-left hover:bg-gray-700 px-3 rounded"
                    onClick={() => navigate('/signin')}
                  >
                    Sign In
                  </button>
                </li>
                <li>
                  <button
                    className="w-full py-2 text-left hover:bg-gray-700 px-3 rounded"
                    onClick={() => navigate('/signup')}
                  >
                    Sign Up
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default NavbarLayout;
