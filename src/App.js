import { useState } from 'react'

import * as s from './App.style'

// Components
import Header from 'components/Header/Header'
import MainView from 'components/MainView/MainView'

// Context
import AppContext from './Context';


const App = () => {
  const [darkTheme, toggleDarkTheme] = useState(false);

  const handleDarkThemeToggle = () => {
    toggleDarkTheme(!darkTheme)
  }

  const context = {
    darkTheme,
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
