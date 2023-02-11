import "./App.css";
import { theme } from "./theme";
import styled, { ThemeProvider } from "styled-components";

import IndexComponent, { router } from "./components/router/IndexComponent";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ThemeProvider ThemeProvider theme={theme}>
      <IndexComponent />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

const Come = styled.div`
  background-color: white;
`;
