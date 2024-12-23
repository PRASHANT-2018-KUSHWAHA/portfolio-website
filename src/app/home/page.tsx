import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-5 min-h-screen flex flex-col lg:flex-row  items-center lg:justify-between bg-black text-white max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-lg mb-6 lg:mb-0 mt-24 lg:mt-0">
          <h1 className="text-4xl font-bold font-semibold text-blue-600 fade-in">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-lg fade-in fade-in-delay-1">
            I&apos;m Prashant, a developer passionate about creating amazing web applications.
          </p>
        </div>

        {/* Profile Image */}
        <div className="w-42 h-42 rounded-full overflow-hidden shadow-lg fade-in fade-in-delay-2 mt-24 lg:mt-0">
          <Image
            src="/profile.jpeg" // Replace with your profile image path
            alt="Prashant's Profile"
            className="object-cover"
            width={200}
            height={200}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
