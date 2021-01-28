import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import * as s from './Header.style'

const Header = () => {
  const history = useHistory();
  // State
  const [selected, setSelected] = useState('home')

  
  // Event handlers
  const handleClick = menuItem => {
    setSelected(menuItem)

    const url = menuItem.replace(/\s+/g, '-');
    history.push(url)
  }


  const menuOptions = ['home', 'about me', 'my work', 'contact'].map((item, index) => {
    return (
      <s.MenuItem 
        key={`0${index}-${item}`}
        selected={item === selected}
        onClick={() => handleClick(item)}
      >
        {item}
      </s.MenuItem>
    )
  })

  return (
    <s.Header>
      <s.Logo src="/img/logo.png" />
      <s.MenuOptionsContainer>
        { menuOptions }
      </s.MenuOptionsContainer>
    </s.Header>
  );
}

export default Header;