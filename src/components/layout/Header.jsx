import { Bell, LogOut, Settings, User } from 'lucide-react';
import React from 'react'
import vsLogo from '../../assets/vs_logo_resized.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon"><img src={vsLogo} alt="" width={60} /></div>
            <div className="">
              <h1 className="logo-text">VibeSync</h1>
            </div>
          </div>

          <div className="user-controls">
            <button className="notification-btn">
              <Bell className="notification-icon" />
              <span className="notification-badge"></span>
            </button>
            <button className="settings-btn">
              <Settings className="notification-icon" />
            </button>
            <div className="profile-avatar">
              <LogOut onClick={handleLogout} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header