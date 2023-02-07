
import './App.css';
import { theme } from './utils/theme';
import styled, { ThemeProvider } from 'styled-components'



function App() {
  return (
    <ThemeProvider ThemeProvider theme={theme} >
      <Come >
        We have started
      </Come>
    </ThemeProvider >

  );
}

export default App;



const Come = styled.div`
background-color: ${(p) => p.theme.colors.ui.secondary}
`
