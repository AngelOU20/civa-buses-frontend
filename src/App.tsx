import { ThemeProvider } from "styled-components";
import { Header } from "@/components/Header/Header";
import { Outlet } from "react-router-dom";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
