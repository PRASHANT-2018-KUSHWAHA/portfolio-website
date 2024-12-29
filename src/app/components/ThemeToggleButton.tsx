import { useTheme } from "./ThemeProvider";
import { useState } from "react";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === "dark");

  const handleToggle = () => {
    setIsDark(!isDark);
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="relative flex items-center justify-between w-16 h-8 p-1 bg-gray-300 rounded-full dark:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle Theme"
    >
      {/* Sun Icon */}
      <div
        className={`absolute w-6 h-6 bg-yellow-400 rounded-full transition-all duration-300 ${
          isDark ? "translate-x-full bg-gray-400" : "translate-x-0"
        }`}
      ></div>

      {/* Moon Icon */}
      <svg
        className={`w-4 h-4 text-gray-800 dark:text-yellow-400 transition-opacity duration-300 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2m6.364 1.636l-1.414 1.414m4.95 4.95h-2m1.636 6.364l-1.414-1.414M12 19v2m-6.364-1.636l1.414-1.414m-4.95-4.95h2m-1.636-6.364l1.414 1.414M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>

      {/* Sun Icon */}
      <svg
        className={`w-4 h-4 text-yellow-500 dark:text-gray-500 transition-opacity duration-300 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2v2m4.364.636l-1.414 1.414M21 12h-2M18.364 17.364l-1.414-1.414M12 21v-2m-6.364-1.636l1.414-1.414M3 12h2M5.636 6.636l1.414 1.414M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </button>
  );
}
