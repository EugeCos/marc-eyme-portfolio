import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import * as s from './Header.style'

// Context
import AppContext from 'Context';


const Header = () => {
  const history = useHistory();

  // State
  const [selected, setSelected] = useState('')
  
  // Context
  const context = useContext(AppContext);

  // Effects
  // Set selected header item based on URL pathname
  useEffect(() => {
    if (context.currentPath !== '/') {
      const selectedItem = context.currentPath.substring(1);
      setSelected(selectedItem)
    }
  }, [context.currentPath])
 
  const handleMenuItemClick = menuItem => {
    setSelected(menuItem)
    let url = menuItem.replace(/\s+/g, '-');    
    history.push(url)
  }

  const handleLogoClick = () => {
    history.push('/');
    setSelected('/')
  }


  const menuOptions = ['about', 'portfolio', 'prints', 'contact'].map((item, index) => {
    return (
      <s.MenuItem 
        key={`0${index}-${item}`}
        selected={item === selected}
        onClick={() => handleMenuItemClick(item)}
        palette={context.palette}
      >
        {item}
      </s.MenuItem>
    )
  })


  return (
    <s.HeaderContainer>
      <s.Logo src="/img/logo.png" onClick={() => handleLogoClick()} />
      <s.MenuOptionsContainer>
        { menuOptions }
      </s.MenuOptionsContainer>
    </s.HeaderContainer>
  );
}

export default Header;