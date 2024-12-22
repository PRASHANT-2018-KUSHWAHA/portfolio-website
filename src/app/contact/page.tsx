import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="pt-24 px-5 mb-10 bg-black min-h-screen text-white">
        <h1 className="text-3xl font-semibold text-blue-600 font-bold">Contact Me</h1>
        <p className="mt-4 fade-in">
          Feel free to reach out to me at <a href="mailto:prashantkushwaha000@example.com" className="text-blue-500">prashantkushwaha000@example.com</a>.
        </p>
      </main>
    </>
  );
}
