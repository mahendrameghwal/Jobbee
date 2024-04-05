import React, { useEffect } from 'react';
const DarkLightmode = () => {

    useEffect(() => {
        const toggler = document.querySelector('.toggler');
        const html = document.documentElement;
    
        const DarkModeFun = () => {
          const isDarkMode = localStorage.getItem('darkMode') === 'true';
          if (isDarkMode) {
            html.classList.add('dark');
            toggler.children[0].classList.add('translate-x-8');
          }
        };
    
        DarkModeFun();
        toggler.addEventListener('click', () => {
          const currentMode = html.classList.contains('dark');
          html.classList.toggle('dark', !currentMode);
          toggler.children[0].classList.toggle('translate-x-8', !currentMode);
          // Update local storage
          localStorage.setItem('darkMode', !currentMode);
   
        });
      }, []);
    
  return (
    
    <div
    className="bg-gray-400 w-14 mx-auto shadow-sm cursor-pointer rounded-3xl toggler dark:bg-blue-500"
  >
  <div
  className="bg-gray-900  w-6 h-6  scale-95 dark:shadow-inherit rounded-full transition-transform  dark:bg-amber-500/90"
></div>

  </div>
 
  )
}

export default DarkLightmode



