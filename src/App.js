import { useState } from 'react'

import * as s from './App.style'

// Components
import Header from 'components/Header/Header'
import MainView from 'components/MainView/MainView'

// Context
import AppContext from './Context';


const App = () => {
  const [darkTheme, toggleDarkTheme] = useState(true);

  const handleDarkThemeToggle = () => {
    toggleDarkTheme(!darkTheme)
  }

  const palettes = {
    dark: {
      background: '#333',
      buttons: '#eb3b5a',
      menuItemPassive: '#8395a7',
      textVerticalSlider: '#2c2c54',
      menuItemActive: '#fff',
      slider: {
        thumb: '#eb3b5a',
        range: '#000000'
      }
    },
    light: {
      background: '#fff',
      buttons: '#1e272e',
      menuItemPassive: '#8395a7',
      textVerticalSlider: '#fff',
      menuItemActive: '#2c2c54',
      slider: {
        thumb: '#000000',
        range: '#b2bec3'
      }
    }
  }

  const context = {
    darkTheme,
    palette: palettes[darkTheme ? 'dark' : 'light'],
    handleDarkThemeToggle
  }


  return (
    <AppContext.Provider value={context}>
      <s.App darkTheme={darkTheme}>
        <Header />
        <MainView />
      </s.App>
    </AppContext.Provider>
  );
}

export default App;
