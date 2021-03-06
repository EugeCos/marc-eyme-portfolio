import styled from '@emotion/styled';

export const App = styled.div`
  min-height: 100vh;
  ${p => p.darkTheme && 'background: #1c1c1c'}
`


// -------------------------------------
// Dark Theme Toggler
export const DarkTheme = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 100;
`