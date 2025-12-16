import { Code, Smartphone, Database, Cloud, Palette, Shield } from "lucide-react";

const techStack = [
  {
    title: "Frontend",
    icon: <Code size={32} />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    icon: <Smartphone size={32} />,
    skills: ["React Native", "Flutter", "Android", "iOS"],
  },
  {
    title: "Backend",
    icon: <Database size={32} />,
    skills: ["Node.js", "Express", "Python", "REST API", "GraphQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={32} />,
    skills: ["AWS", "Vercel", "Docker", "CI/CD"],
  },
  {
    title: "UI / UX",
    icon: <Palette size={32} />,
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
  },
  {
    title: "Security",
    icon: <Shield size={32} />,
    skills: ["JWT Auth", "OAuth", "SSL", "Data Protection"],
  },
];

export default function TechStack() {
  return (
    <section className="" id="techstack">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="">Our Tech Stack</h2>
          <p className="">
            Modern technologies we use to build powerful digital products.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4 text-blue-600">
                {item.icon}
                <h3 className="">
                  {item.title}
                </h3>
              </div>

              <ul className="text-gray-600 text-sm space-y-2">
                {item.skills.map((skill, i) => (
                  <li key={i}>✅ {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
