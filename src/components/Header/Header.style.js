import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  width: 100%;
  z-index: 2051;
  position: sticky;
  top: 0;
  background: #f1f2f6;
  padding: ${p => p.collapsed ? '5pt 0' : '18pt 0 20pt'};
`

export const Header = styled.div`
  margin: 0 auto;
  width: 720pt;
  display: flex;
  flex-direction: ${p => p.collapsed ? 'row' : 'column'};
  align-items: center;
  justify-content: center;
  transition: .3s ease
`

export const Logo = styled.img`
  width: ${p => p.collapsed ? '60pt' : '80pt'};
  ${p => p.collapsed && 'padding-right: 40pt'};
  margin-bottom: ${p => p.collapsed ? 0 : '14pt'};
  cursor: pointer;
  border: 1px solid transparent;
`

export const MenuOptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${p => p.collapsed ? '50%' : '70%'};
`

export const MenuItem = styled.span`
  ${p => p.selected && `
    letter-spacing: 2px;
    font-weight: 600;
  `}
  width: 82.5pt;
  text-align: center;
  color: ${p => p.selected ? '#2c2c54' : '#aaa69d'};
  font-size: 120%;
  cursor: pointer;
  transition: letter-spacing .3s ease-out, color .3s ease-out;

  &:hover {
    color: #2c2c54;
  }
`