import Project from "./project";

export type ProjectProps = {
    name: string;
    description: string;
    homepage: string;
    default_branch: string;
};

const Projects = async () => {
    const projects = [
        {
            name: "awwa",
            description: "Redesigned landing page of a non-profit",
            homepage: "https://awwa.netlify.app/",
            default_branch: "master",
        },
        {
            name: "rudra-nil-utsa",
            description: "Personal website of a friend",
            homepage: "https://rudranilutsa.netlify.app/",
            default_branch: "master",
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
                <div className="h-6 border-y border-border sm:w-6 sm:min-w-6 sm:border-x sm:h-auto sm:border-y-0" />
                <Project {...projects[1]} />
            </div>
        </section>
    );
};

export default Projects;
