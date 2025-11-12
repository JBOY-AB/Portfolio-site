import { ExternalLink, ArrowRight } from "lucide-react";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/images/saas-landing.jpg",
    tags: ["React", "Tailwind", "UI/UX"],
    demoUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/your-repo",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and ShadCN UI.",
    image: "/images/portfolio.jpg",
    tags: ["Next.js", "ShadCN", "TypeScript"],
    demoUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/your-portfolio",
  },
  {
    id: 3,
    title: "Budget Planner",
    description: "A budgeting tool that helps users manage expenses.",
    image: "/images/budget-planner.jpg",
    tags: ["React", "Charts.js", "Finance"],
    demoUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/your-repo",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    <Github size={20} />

                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

          <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/jeremiahabiona/jboy">
                check My Github <ArrowRight size={16} />
            </a>
          </div>

      </div>
    </section>
  );
};
