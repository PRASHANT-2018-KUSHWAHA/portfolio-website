import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <main className="">
        <div className="min-h-screen bg-black text-white p-4 flex items-center justify-center pt-24 max-w-7xl mx-auto">
          <div className="max-w-4xl text-left shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-semibold text-blue-600 mb-4 fade-in">
              About Me
            </h1>
            <p className="text-lg text-white mb-4 fade-in-delay-1">
              Experienced Frontend and Full-Stack Developer with over 6 years of expertise in Angular and 2+ years in React.js.
              I specialize in:
            </p>
            <ul className="list-disc list-inside text-white mb-6 fade-in-delay-2">
              <li>Building responsive, user-friendly interfaces.</li>
              <li>Developing robust backend systems using Node.js, MongoDB, and GraphQL.</li>
              <li>Creating hybrid applications with Ionic and React Native.</li>
            </ul>
            <p className="text-lg text-white mb-4 fade-in-delay-3">
              I am skilled in leveraging AWS services such as Lambda, S3, and Elastic Search, and I have a strong background in
              data visualization using tools like Chart.js and Plotly.
            </p>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 fade-in-delay-4">My Passion</h2>
            <p className="text-lg text-white mb-6 fade-in-delay-5">
              I thrive in startup environments, where innovation and adaptability are key. I’m dedicated to delivering
              high-quality, scalable solutions while staying at the forefront of modern web and app development.
            </p>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 fade-in-delay-4">Technical Expertise</h2>
            <ul className="list-disc list-inside text-white mb-6 fade-in-delay-5">
              <li>Frontend: Angular, React.js, Ionic</li>
              <li>Backend: Node.js, MongoDB, GraphQL</li>
              <li>Cloud: AWS (Lambda, S3, Elastic Search)</li>
              <li>Visualization: Chart.js, Plotly</li>
              <li>Mobile: React Native, Hybrid Apps</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
