"use client";
import { useState, useEffect } from "react";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [dark, toggleDarkMode] = useDarkMode();
  return (
    <div
      onClick={toggleDarkMode}
      className="cursor-pointer absolute flex px-4 py-2 rounded-full bottom-10 right-10 bg-white dark:bg-gray800 text-black dark:text-white text-title20Bold"
    >
      <button>{dark ? "Dark" : "Light"}</button>
    </div>
  );
}

export default App;
