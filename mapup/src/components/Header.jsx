import React from 'react';

const Header = () => {
  
  const handleLogin = () => {
    alert('Login clicked');
    
  };

  const handleLogout = () => {
    alert('Logout clicked');
    
  };

  const handleProfile = () => {
    alert('Profile clicked');
    
  };

  return (
    <header className="bg-gray-800 py-4 px-6 text-white flex justify-between items-center">
      <div>
        <button className="mr-4" onClick={handleLogin}>
          Login
        </button>
        <button onClick={handleProfile}>
          Profile
        </button>
      </div>
      <div>
        <img src={"https://i.ibb.co/QPjzQMp/image.png"}
        className="h-4 w-16" />
      </div>
      <div>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
