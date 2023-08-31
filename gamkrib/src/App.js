import "./App.css";
import { theme } from "./theme";
import styled, { ThemeProvider } from "styled-components";

import IndexComponent, { router } from "./components/router/IndexComponent";
import { RouterProvider } from "react-router-dom";
import { MockApiContextProvider } from "./context/MockApiContext";
import {
  SelectedHostelContextProvider,
  SelectedPropertyContextProvider,
} from "./context/selectedPropertyContext/SelectedPropertyContextProvider";
import { PostingPropertyContext } from "./context/PostingPropertyContext";

//will refactor this to improve performance
function App() {
  return (
    <ThemeProvider ThemeProvider theme={theme}>
      <MockApiContextProvider>
        <PostingPropertyContext>
          <SelectedHostelContextProvider>
            <SelectedPropertyContextProvider>
              <IndexComponent />
              <RouterProvider router={router} />
            </SelectedPropertyContextProvider>
          </SelectedHostelContextProvider>
        </PostingPropertyContext>
      </MockApiContextProvider>
    </ThemeProvider>
  );
}

export default App;

const Come = styled.div`
  background-color: white;
`;
