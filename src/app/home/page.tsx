import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-5 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">I’m Prashant, a developer passionate about creating amazing web applications.</p>
      </main>
      <Footer />
    </>
  );
}
