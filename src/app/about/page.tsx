"use client";

import Header from "../components/Header";
import { useTheme } from "../components/ThemeProvider"; // Assuming you're using a ThemeContext or hook

export default function About() {
  const { theme } = useTheme(); // Assuming theme state is provided via context or hook

  return (
    <>
      <Header />
      <main
        className={`transition-all pt-24 min-h-screen ${
          theme === "dark"
            ? "dark:bg-dark-background dark:text-dark-text bg-gradient-to-b from-gray-900 via-black to-gray-900"
            : "bg-light-background text-light-text"
        }`}
      >
        <div className="max-w-7xl mx-auto p-6">
          <div
            className={`bg-gray-800 rounded-lg shadow-lg p-8 lg:p-12 fade-in transition-all ${
              theme === "dark" ? "bg-dark-background" : "bg-light-background"
            }`}
          >
            {/* Title */}
            <h1
              className={`text-4xl font-bold text-center mb-8 transition-all ${
                theme === "dark" ? "text-dark-primary" : "text-light-primary"
              }`}
            >
              About Me
            </h1>

            {/* Intro Section */}
            <p className="text-lg text-center mb-6 leading-relaxed">
              I am an experienced Frontend and Full-Stack Developer with over 6 years of expertise in Angular and 2+ years in React.js.
            </p>

            {/* Expertise Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Expertise List */}
              <div>
                <h2
                  className={`text-2xl font-semibold mb-4 transition-all ${
                    theme === "dark" ? "text-dark-primary" : "text-light-primary"
                  }`}
                >
                  What I Do
                </h2>
                <ul className="list-disc list-inside space-y-3">
                  <li className="transition-all">
                    Building responsive, user-friendly interfaces.
                  </li>
                  <li className="transition-all">
                    Developing robust backend systems using Node.js, MongoDB, and GraphQL.
                  </li>
                  <li className="transition-all">
                    Creating hybrid applications with Ionic and React Native.
                  </li>
                </ul>
              </div>

              {/* Passion Section */}
              <div>
                <h2
                  className={`text-2xl font-semibold mb-4 transition-all ${
                    theme === "dark" ? "text-dark-primary" : "text-light-primary"
                  }`}
                >
                  My Passion
                </h2>
                <p className="leading-relaxed">
                  I thrive in startup environments, where innovation and adaptability are key. I'm dedicated to delivering high-quality, scalable solutions while staying at the forefront of modern web and app development.
                </p>
              </div>
            </div>

            {/* Technical Expertise Section */}
            <div className="mt-12">
              <h2
                className={`text-2xl font-semibold mb-4 text-center transition-all ${
                  theme === "dark" ? "text-dark-primary" : "text-light-primary"
                }`}
              >
                Technical Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div
                  className={`bg-gray-700 rounded-lg p-4 shadow-md transition-all ${
                    theme === "dark" ? "bg-dark-background" : "bg-light-background"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Frontend</h3>
                  <p className="leading-relaxed">Angular, React.js, Ionic</p>
                </div>
                <div
                  className={`bg-gray-700 rounded-lg p-4 shadow-md transition-all ${
                    theme === "dark" ? "bg-dark-background" : "bg-light-background"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Backend</h3>
                  <p className="leading-relaxed">Node.js, MongoDB, GraphQL</p>
                </div>
                <div
                  className={`bg-gray-700 rounded-lg p-4 shadow-md transition-all ${
                    theme === "dark" ? "bg-dark-background" : "bg-light-background"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Cloud</h3>
                  <p className="leading-relaxed">AWS (Lambda, S3, Elastic Search)</p>
                </div>
                <div
                  className={`bg-gray-700 rounded-lg p-4 shadow-md transition-all ${
                    theme === "dark" ? "bg-dark-background" : "bg-light-background"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Visualization</h3>
                  <p className="leading-relaxed">Chart.js, Plotly</p>
                </div>
                <div
                  className={`bg-gray-700 rounded-lg p-4 shadow-md transition-all ${
                    theme === "dark" ? "bg-dark-background" : "bg-light-background"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Mobile</h3>
                  <p className="leading-relaxed">React Native, Hybrid Apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
