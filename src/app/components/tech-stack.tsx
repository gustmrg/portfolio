import { Card } from "@/components/ui/card";

const technologies = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "Shadcn UI",
    ],
  },
  {
    category: "Backend",
    skills: [".NET", "C#", "PostgreSQL", "SQLite", "Microsoft SQL Server"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "Digital Ocean", "CI/CD", "Git", "Linux", "Nginx"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Visual Studio", "Rider", "Postman", "Figma", "GitHub"],
  },
];

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => {
        let bgColor, textColor;
        switch (tech.category) {
          case "Frontend":
            bgColor = "bg-blue-50";
            textColor = "text-blue-700";
            break;
          case "Backend":
            bgColor = "bg-purple-50";
            textColor = "text-purple-700";
            break;
          case "DevOps":
            bgColor = "bg-yellow-50";
            textColor = "text-yellow-700";
            break;
          case "Tools":
            bgColor = "bg-emerald-50";
            textColor = "text-emerald-700";
            break;
          default:
            bgColor = "bg-gray-50";
            textColor = "text-gray-700";
        }

        return (
          <Card key={tech.category} className="p-6">
            <h3 className={`text-lg font-semibold mb-4`}>{tech.category}</h3>
            <div className="flex flex-wrap gap-2">
              {tech.skills.map((skill) => (
                <span
                  key={skill}
                  className={`inline-flex items-center rounded-md ${bgColor} px-2 py-1 text-sm font-semibold ${textColor}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

// blue: "bg-blue-50 text-blue-700 ring-blue-700/10 dark:text-blue-400 dark:bg-blue-800/20",
