import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Home from './Components/Home';
import About from './Components/About';
import Navigation from './Components/Navigation';
import Photography from './Components/Photography';
import Experience from './Components/Experience.';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        margin: 0,
      },
    },
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/Portfolio-Website" element={<Home />} />
          <Route path="/Portfolio-Website/about" element={<About />} />
          <Route path="/Portfolio-Website/experience" element={<Experience />} />
          <Route path="/Portfolio-Website/photography" element={<Photography />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
