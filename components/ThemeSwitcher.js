import React from 'react';

const ThemeSwitcher = ({ changeTheme }) => {
  return (
    <div className="theme-switch">
      <b className="switch-link">Change Theme:</b>&nbsp;
      <a
        role="link"
        tabIndex="0"
        onClick={() => changeTheme('wowcher')}
        onKeyDown={() => changeTheme('wowcher')}
        className="switch-link"
      >
        (Wowcher)
      </a>
      &nbsp;
      <a
        role="link"
        tabIndex="0"
        onClick={() => changeTheme('livingsocial')}
        onKeyDown={() => changeTheme('livingsocial')}
        className="switch-link"
      >
        (Livingsocial)
      </a>
      &nbsp;
      <a
        role="link"
        tabIndex="0"
        onClick={() => changeTheme('vip')}
        onKeyDown={() => changeTheme('vip')}
        className="switch-link"
      >
        (Vip)
      </a>
      &nbsp;
      <style jsx>{`
        .theme-switch {
          background-color: #ffffff;
          border: 1px #999 solid;
          bottom: 0px;
          padding: 5px;
          position: fixed;
        }
        .switch-link {
          color: #666666;
        }
      `}</style>
    </div>
  );
};

export default ThemeSwitcher;
