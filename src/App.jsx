import React from "react";
import {Routes, Route} from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import themeMode from './Theme/mode'
import {useDarkMode} from './Theme/useDarkMode'
import Home from "./Screens/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ExploreMovie from "./Screens/ExploreMovie";
import DetailsMovie from './Screens/DetailsMovie/index';
const App = () => {
  const[theme, toggleTheme] = useDarkMode()
  return (
    <ThemeProvider theme={themeMode}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<ExploreMovie />} />
        <Route path="/movie/:id" element={<DetailsMovie />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;