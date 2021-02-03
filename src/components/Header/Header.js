import { useState, useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom';
import * as s from './Header.style'

const Header = () => {
  const history = useHistory();

  // State
  const [selected, setSelected] = useState('')


  // Effects
  // Set selected header item based on URL pathname
  useLayoutEffect(() => {
    const path = window.location.pathname;
    const parts = path.split('/');

    if (path !== '/') {
      let selectedItem = (parts[1].charAt(0).toUpperCase() + parts[1].slice(1)).toLowerCase()
      setSelected(selectedItem)
    }
  }, [])
 
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