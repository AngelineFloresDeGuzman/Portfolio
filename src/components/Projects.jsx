const projects = [
  { title: "Portfolio Website", desc: "Professional portfolio using React & Tailwind.", link: "#" },
  { title: "Task Manager App", desc: "React To-do app with localStorage.", link: "#" },
  { title: "Salon Management System", desc: "Java-based CRUD project.", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.desc}</p>
            <a href={proj.link} className="text-blue-500 hover:underline">
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
