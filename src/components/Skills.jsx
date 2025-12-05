const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "SQL", "Git", "Vite"];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {skills.map(skill => (
          <div
            key={skill}
            className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 hover:scale-105 transform transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
