"use client";

import { useTheme } from "./ThemeProvider"; // Assuming you have a ThemeProvider context

const Footer: React.FC = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <footer
      className={`py-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
      }`}
    >
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Prashant. All rights reserved.
        </p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a
              href="https://github.com/PRASHANT-2018-KUSHWAHA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/prashant-kushwaha-96a230142/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:prashantkushwaha000@example.com"
              className="hover:underline"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
