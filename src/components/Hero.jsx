export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-5xl font-bold mb-4">Hello, I'm Angeline</h1>
      <p className="text-xl mb-6 text-center">
        Third-Year IT Student | Developer | Tech Enthusiast
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        View My Work
      </a>
    </section>
  );
}
