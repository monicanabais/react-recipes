import { useTheme } from "../hooks/useTheme";
import brightnessIcon from '../assets/brightness-icon.svg';
import './ThemeSelector.css';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    const brightness = mode === 'light' ? 'dark' : 'light';
    changeMode(brightness);
  }

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img src={brightnessIcon} alt="brightness" style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }} onClick={toggleMode} />
      </div>
      <div className="theme-buttons">
        {themeColors.map(color => (
          <div key={color} style={{ backgroundColor: color }} onClick={() => changeColor(color)} />
        ))}
      </div>
    </div>
  )
}

export default ThemeSelector;
