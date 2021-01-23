import React from 'react';

const ThemeSwitch = () => {
  const setTheme = (theme) => {
    const viewport = document.getElementById('viewport');
    !viewport.classList.contains(theme) ? (viewport.classList = theme) : null;
  };
  return (
    <div className="theme-switch ">
      <button className="theme-btn" onClick={() => setTheme('light')}>
        LightTheme
      </button>
      <button className="theme-btn" onClick={() => setTheme('dark')}>
        DarkTheme
      </button>
    </div>
  );
};

export default ThemeSwitch;
