import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <div className="logo-text">Sabre</div>
            </div>
            <nav className="nav">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
              >
                {t('nav.dashboard')}
              </Link>
              <Link
                to="/calibration"
                className={`nav-link ${isActive('/calibration') ? 'nav-link-active' : ''}`}
              >
                {t('nav.calibrationDataUpload')}
              </Link>
              <Link
                to="/reports"
                className={`nav-link ${isActive('/reports') ? 'nav-link-active' : ''}`}
              >
                {t('nav.reports')}
              </Link>
            </nav>
          </div>
          <div className="header-right">

            <div className="user-info">
              <div className="user-name">Nagendra Dwarakinath</div>
              <div className="user-role">{t('header.userRole')}</div>

            </div>
            <img
              src="/path/to/profile.jpg"
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;