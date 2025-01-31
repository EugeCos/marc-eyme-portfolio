import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import * as s from './App.style'

// Components
import Header from 'components/Header/Header'
import MainView from 'components/MainView/MainView'
import ScreenSlider from 'components/Shared/ScreenSlider/ScreenSlider'

// Context
import AppContext from './Context';

// Material UI
import Switch from '@material-ui/core/Switch';


const App = () => {
  const [darkTheme, toggleDarkTheme] = useState(true);
  const [sliderOpened, openSlider] = useState(false);
  const [gallerySelected, setGallerySelected] = useState(null);
  const [currentPath, setCurrentPath] = useState('/')

  // Listen to URL updates
  const location = useLocation()
  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  const handleDarkThemeToggle = () => {
    toggleDarkTheme(!darkTheme)
  }

  const palettes = {
    dark: {
      background: '#333',
      buttons: '#eb3b5a',
      headerBg: '#161616',
      menuItemActive: '#fff',
      menuItemPassive: '#8395a7',
      textVerticalSlider: '#2c2c54',
      slider: {
        thumb: '#eb3b5a',
        range: '#000000'
      }
    },
    light: {
      background: '#fff',
      buttons: '#1e272e',
      headerBg: '#FFFFFF',
      menuItemActive: '#2c2c54',
      menuItemPassive: '#8395a7',
      textVerticalSlider: '#fff',
      slider: {
        thumb: '#000000',
        range: '#b2bec3'
      }
    }
  }

  const context = {
    currentPath,
    darkTheme,
    palette: palettes[darkTheme ? 'dark' : 'light'],
    handleDarkThemeToggle,
    openSlider,
    sliderOpened,
    gallerySelected,
    setGallerySelected
  }


  return (
    <AppContext.Provider value={context}>
      <s.App darkTheme={darkTheme}>
        { sliderOpened && <ScreenSlider /> }
        { !sliderOpened && (
          <>
            <Header />
            <MainView />

          {/* Dark Theme Toggler */}
          <s.DarkTheme>
            <p style={{ color: darkTheme ? '#3F51BA' : '#333' }}>Dark theme</p>
            <Switch
              checked={darkTheme}
              color={darkTheme ? 'primary' : 'default'}
              onChange={() => handleDarkThemeToggle(!darkTheme)}
            />
          </s.DarkTheme>
          </>
        )}
      </s.App>
    </AppContext.Provider>
  );
}

export default App;

