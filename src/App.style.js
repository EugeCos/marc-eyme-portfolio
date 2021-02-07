import styled from '@emotion/styled';

export const App = styled.div`
  min-height: 100vh;
  ${p => p.darkTheme && 'background: #333'}
`