// Main.jsx
import React, { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import { DarkModeProvider } from "./DarkModeContext";
import "./index.css";

export default function Main() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <React.StrictMode>
      <NextUIProvider>
        <DarkModeProvider value={{ darkMode, toggleDarkMode }}>
          <main className={darkMode ? "dark" : ""}>
            <App />
          </main>
        </DarkModeProvider>
      </NextUIProvider>
    </React.StrictMode>
  );
}
