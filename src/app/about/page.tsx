export default function About() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold">About Me</h1>

      <p className="mt-6 text-gray-400 max-w-2xl">
        I'm a third-year student passionate about building scalable and modern web applications using React, Next.js, and TypeScript.
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Skills</h2>

        <div className="flex gap-4 mt-4 flex-wrap">
          {["React", "Next.js", "TypeScript", "Tailwind"].map((skill) => (
            <span key={skill} className="border px-3 py-1 rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}