import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createContext, useEffect, useState } from "react";
import Footer from "../components/Footer";

export const ThemeContext = createContext(null);

const MainLayout = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("dark");
    if (theme === "true") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const handleTheme = (dark) => {
    localStorage.setItem("dark", JSON.stringify(dark));
    setIsDark(dark);
    const doc = document.documentElement;
    doc.setAttribute("data-theme" , dark ? 'dark': 'light')
  };
  const themeInfo = { isDark, handleTheme };

  return (
    <ThemeContext.Provider value={themeInfo}>
      <div data-theme={isDark ?  'dark' : 'light'}>
      <div >
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default MainLayout;
