import React, { useState } from 'react';

const ThemeController = () => {
  const [theme, setTheme] = useState('default');

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    document.body.className = `theme-${event.target.value}`;
  };

  return (
    <div>
      <div className="form-control" style={{ position: 'fixed', top: '10px', right: '10px' }}>
        <label className="label cursor-pointer gap-4">
          <span className="label-text text-white">Default</span>
          <input type="radio" name="theme-radios" className="radio  theme-controller" value="default" checked={theme === 'default'} onChange={handleThemeChange} />
        </label>
      </div>
      <div className="form-control" style={{ position: 'fixed', top: '40px', right: '10px' }}>
        <label className="label cursor-pointer gap-4">
          <span className="label-text text-white">Your Name</span>
          <input type="radio" name="theme-radios" className="radio  theme-controller" value="yourname" checked={theme === 'yourname'} onChange={handleThemeChange} />
        </label>
      </div>
      <div className="form-control" style={{ position: 'fixed', top: '70px', right: '10px' }}>
        <label className="label cursor-pointer gap-4">
          <span className="label-text text-white">Jujutsu-Kaisen</span>
          <input type="radio" name="theme-radios" className="radio  theme-controller" value="jujutsukaisen" checked={theme === 'jujutsukaisen'} onChange={handleThemeChange} />
        </label>
      </div>
      <div className="form-control" style={{ position: 'fixed', top: '100px', right: '10px' }}>
        <label className="label cursor-pointer gap-4">
          <span className="label-text text-white">Avengers</span>
          <input type="radio" name="theme-radios" className="radio  theme-controller" value="avengers" checked={theme === 'avengers'} onChange={handleThemeChange} />
        </label>
      </div>
      <div className="form-control" style={{ position: 'fixed', top: '130px', right: '10px' }}>
        <label className="label cursor-pointer gap-4">
          <span className="label-text text-white">Waifu</span>
          <input type="radio" name="theme-radios" className="radio  theme-controller" value="waifu" checked={theme === 'waifu'} onChange={handleThemeChange} />
        </label>
      </div>
    </div>
  );
};

export default ThemeController;
