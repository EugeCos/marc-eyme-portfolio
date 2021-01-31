import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import * as s from './Header.style'

const Header = () => {
  const history = useHistory();
  // State
  const [selected, setSelected] = useState('home')
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  useEffect(() => {
    scrollPosition > 150 ? setIsHeaderCollapsed(true) : setIsHeaderCollapsed(false)
  }, [scrollPosition])

  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };


  // Event handlers
  const handleClick = menuItem => {
    setSelected(menuItem)

    let url = menuItem.replace(/\s+/g, '-');
    if (url === 'home') url = '/';
    
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
    <s.HeaderContainer collapsed={isHeaderCollapsed}>
      <s.Header collapsed={isHeaderCollapsed}>
        <s.Logo src="/img/logo.png" collapsed={isHeaderCollapsed} />
        <s.MenuOptionsContainer collapsed={isHeaderCollapsed}>
          { menuOptions }
        </s.MenuOptionsContainer>
      </s.Header>
    </s.HeaderContainer>
  );
}

export default Header;