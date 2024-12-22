import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <>
        <Header />
        <main className="p-5 min-h-screen flex items-center justify-between bg-black text-white">
          {/* Text Content */}
          <div className="text-left max-w-lg">
            <h1 className="text-4xl font-bold font-semibold text-blue-600 fade-in">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg fade-in fade-in-delay-1">
              I’m Prashant, a developer passionate about creating amazing web applications.
            </p>
          </div>

          {/* Profile Image */}
          <div className="w-52 h-52 rounded-full overflow-hidden shadow-lg fade-in fade-in-delay-2 mr-10">
            <img
              src="/profile.jpeg" // Replace with your profile image path
              alt="Prashant's Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </main>

        <Footer />
      </>
    </>
  );
}
