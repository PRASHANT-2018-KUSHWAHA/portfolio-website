import Header from "../components/Header";

export default function Projects() {
  const projects = [
    { name: "Project A", description: "Description of Project A" },
    { name: "Project B", description: "Description of Project B" },
  ];

  return (
    <>
      <Header />
      <main className="p-5">
        <h1 className="text-3xl font-bold">Projects</h1>
        <ul className="mt-4 space-y-3">
          {projects.map((project, index) => (
            <li key={index} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
