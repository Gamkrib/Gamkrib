import "./App.css";
import { theme } from "./theme";
import styled, { ThemeProvider } from "styled-components";
import { DefaultBtn, GreenBtn, GreenBtnOutine } from "./utils/modules/modules";
import IndexComponent from "./components/exports/IndexComponent";

function App() {
  return (
    <ThemeProvider ThemeProvider theme={theme}>
      <IndexComponent />
    </ThemeProvider>
  );
}

export default App;

const Come = styled.div`
  background-color: white;
`;
