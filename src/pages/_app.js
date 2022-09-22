import '../styles/style.css';
import { createContext, useState } from 'react';
import Navbar from '../components/Navbar.js';
import Intro from '../components/Intro.js';
import About from '../components/About.js';
import Portfolio from '../components/Portfolio.js';
import Contact from '../components/Contact.js';
// import BackToTop from '../components/BackToTop.js';
import Preloader from '../components/Preloader';
export const ThemeContext = createContext(null)


function App() {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    setTheme((curr)=> (curr === "light" ? "dark" : "light"))
    // theme === 'dark' ? setTheme('light') : setTheme('dark');
  };


  return (
    <ThemeContext.Provider value={{theme, themeToggler}} 
    // theme={theme === "light" ? "dark" : "light"}
    >
    <div className="App" id={theme}>
        <Navbar themeToggler={themeToggler} checked={ theme === "dark"}/>
        <Intro />
        <About />
        <Portfolio />
        <Contact />
        {/* <BackToTop /> */}
        <Preloader />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
