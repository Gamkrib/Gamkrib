import "./App.css";
import { theme } from "./theme";
import styled, { ThemeProvider } from "styled-components";

import IndexComponent, { router } from "./components/router/IndexComponent";
import { RouterProvider } from "react-router-dom";
import { MockApiContextProvider } from "./context/MockApiContext";
import { SelectedPropertyContextProvider } from "./context/selectedPropertyContext/SelectedPropertyContextProvider";

function App() {
  return (
    <ThemeProvider ThemeProvider theme={theme}>
      <MockApiContextProvider>
        <SelectedPropertyContextProvider>
          <IndexComponent />
          <RouterProvider router={router} />
        </SelectedPropertyContextProvider>
      </MockApiContextProvider>
    </ThemeProvider>
  );
}

export default App;

const Come = styled.div`
  background-color: white;
`;
