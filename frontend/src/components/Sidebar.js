import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../API/auth';

const NavbarLayout = () => {
  const navigate = useNavigate();
  const isLoggedIn = isAuthenticated();

  const handleLogout = () => {
    localStorage.removeItem('jwt'); // Clear JWT
    navigate('/signin'); // Redirect to Sign In page
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">NEXUS</h1>
        <nav className="mt-4">
          <ul>
            <li className="py-2 hover:bg-gray-700 px-2 rounded">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="py-2 hover:bg-gray-700 px-2 rounded">
              <Link to="/schedule">Schedule</Link>
            </li>
            {!isLoggedIn ? (
              <>
                <li className="py-2 hover:bg-gray-700 px-2 rounded">
                  <Link to="/auth/login">Sign In</Link>
                </li>
                <li className="py-2 hover:bg-gray-700 px-2 rounded">
                  <Link to="/auth/signup">Sign Up</Link>
                </li>
              </>
            ) : (
              <li className="py-2 hover:bg-gray-700 px-2 rounded">
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default NavbarLayout;
