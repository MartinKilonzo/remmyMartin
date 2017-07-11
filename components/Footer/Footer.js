import React from 'react';
import Link from '../Link';
import s from './Footer.css';

function Footer() {
  return (
    <footer className={`mdl-mini-footer ${s.footer}`}>
      <div className="mdl-mini-footer__left-section">
        <div className="mdl-logo">© Remmy Martin Kilonzo</div>
        <ul className="mdl-mini-footer__link-list">
          <li><a href="https://www.dropbox.com/s/2s0nv4ltfucvexd/Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><Link to="#">:)</Link></li>
        </ul>
      </div>
      <div className="mdl-mini-footer__right-section">
        <ul className="mdl-mini-footer__link-list">
          <li className="mdl-mini-footer--social-btn" style={{ backgroundColor: 'transparent' }}>
            <a href="https://ca.linkedin.com/in/MartinKilonzo" target="_blank" rel="noopener noreferrer" role="button" title="LinkedIn">
              <svg viewBox="0 0 512 512">
                <path
                  fill="#fff" d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/>
              </svg>
            </a>
          </li>
          <li className="mdl-mini-footer--social-btn" style={{ backgroundColor: 'transparent' }}>
            <a href="https://github.com/MartinKilonzo" target="_blank" rel="noopener noreferrer" role="button" title="GitHub">
              <svg width="36" height="36" viewBox="0 0 24 24">
                <path
                  fill="#fff" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58
                  9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,
                  17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,
                  16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,
                  16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,
                  7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,
                  6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54
                  17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,
                  16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27
                  14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
