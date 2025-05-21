import Project from "./project";

export type ProjectProps = {
  name: string;
  created_at: number;
  description: string;
  homepage: string;
  default_branch: string;
};

const Projects = async () => {
  const featuredProjects = ["awwa", "rudra-nil-utsa", "zapomnit-nato"];

  const request = await fetch("https://api.github.com/users/safin-sys/repos");

  const response = await request.json();

  const projects = response
    .filter((project: ProjectProps) => featuredProjects.includes(project.name))
    .sort(
      (a: ProjectProps, b: ProjectProps) =>
        featuredProjects.indexOf(a.name) - featuredProjects.indexOf(b.name)
    );
  return (
    <section className="container">
      <div className="border-b border-border px-2 py-1">
        <h1 className="text-2xl">Projects</h1>
        {/* add tabs in the future here */}
      </div>
      <Project {...projects[1]} />
    </section>
  );
};

export default Projects;
