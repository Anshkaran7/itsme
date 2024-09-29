import { IconMoon, IconSun } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    // Toggle the dark mode state
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', isDarkMode);
    
  };


  useEffect(() => {
    // Update the body background color when dark mode is toggled
    if (!isDarkMode) {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = 'rgb(var(--black))';
    }
  }, [isDarkMode]);


  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <IconMoon className="text-gray-500 text-2xl" />
      ) : (
        <IconSun className="text-yellow-500 text-2xl" />
      )}
    </div>
  );
};

export default DarkModeToggle;
