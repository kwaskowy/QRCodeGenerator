import React from 'react';
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import InfoPage from './infoPage';

function ThemeSwitcher({ theme, toggleTheme }) {
  return (
    <div className="text-start mb-4">
      <button onClick={toggleTheme} className="theme-switch btn">
        {theme === 'light' ? <BsFillMoonStarsFill /> : <BsSun color="white" />}
      </button>
      <InfoPage theme={theme}/>
    </div>
  );
}

export default ThemeSwitcher;
