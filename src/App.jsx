import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/Home";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<HomeScreen />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
