import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="p-5">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="mt-4">
          Feel free to reach out to me at <a href="mailto:ashish@example.com" className="text-blue-500">ashish@example.com</a>.
        </p>
      </main>
    </>
  );
}
