import Project from "./project";

export type ProjectProps = {
    name: string;
    description: string;
    homepage: string;
    default_branch: string;
    iframe?: string;
};

const Projects = async () => {
    const projects = [
        {
            name: "orbit",
            description: "A privacy and UX focused analytics platform",
            homepage: "https://orbit.pages.dev/",
            default_branch: "main",
            iframe: "https://orbit.pages.dev/preview",
        },
    ];
    return (
        <section className="container">
            <div className="border-b border-border px-2 py-1">
                <h1 className="text-2xl">Projects</h1>
                {/* add tabs in the future here */}
            </div>
            <div className="flex flex-col sm:flex-row">
                <Project {...projects[0]} />
                {/* <div className="h-6 border-y border-border sm:w-6 sm:min-w-6 sm:border-x sm:h-auto sm:border-y-0" />
                <Project {...projects[1]} /> */}
            </div>
        </section>
    );
};

export default Projects;
