import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import ScrollToTop from "./ScrolltoTop";

import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/Work";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Work />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router basename="/myportfolio">
        <ScrollToTop />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
