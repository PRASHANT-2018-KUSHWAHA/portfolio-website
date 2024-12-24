import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 lg:p-12 fade-in">
            {/* Title */}
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
              About Me
            </h1>
            
            {/* Intro Section */}
            <p className="text-lg text-gray-300 mb-6 leading-relaxed text-center">
              I am an experienced Frontend and Full-Stack Developer with over 6 years of expertise in Angular and 2+ years in React.js.
            </p>

            {/* Expertise Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Expertise List */}
              <div>
                <h2 className="text-2xl font-semibold text-blue-500 mb-4">What I Do</h2>
                <ul className="list-disc list-inside space-y-3">
                  <li className="text-gray-300">Building responsive, user-friendly interfaces.</li>
                  <li className="text-gray-300">Developing robust backend systems using Node.js, MongoDB, and GraphQL.</li>
                  <li className="text-gray-300">Creating hybrid applications with Ionic and React Native.</li>
                </ul>
              </div>

              {/* Passion Section */}
              <div>
                <h2 className="text-2xl font-semibold text-blue-500 mb-4">My Passion</h2>
                <p className="text-gray-300 leading-relaxed">
                  I thrive in startup environments, where innovation and adaptability are key. I’m dedicated to delivering high-quality, scalable solutions while staying at the forefront of modern web and app development.
                </p>
              </div>
            </div>

            {/* Technical Expertise Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4 text-center">Technical Expertise</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-gray-700 rounded-lg p-4 shadow-md">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Frontend</h3>
                  <p className="text-gray-300">Angular, React.js, Ionic</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 shadow-md">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Backend</h3>
                  <p className="text-gray-300">Node.js, MongoDB, GraphQL</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 shadow-md">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Cloud</h3>
                  <p className="text-gray-300">AWS (Lambda, S3, Elastic Search)</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 shadow-md">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Visualization</h3>
                  <p className="text-gray-300">Chart.js, Plotly</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 shadow-md">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">Mobile</h3>
                  <p className="text-gray-300">React Native, Hybrid Apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
  