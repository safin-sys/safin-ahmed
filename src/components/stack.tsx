const Stack = () => {
    const stack = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "NextJS",
        "VueJS",
        "Svelte",
        "Sass",
        "NodeJS",
        "express",
        "Firebase",
        "AWS",
        "DigtalOcean",
        "Git",
        "Tailwind CSS",
        "Sanity CMS",
        "Contentful CMS",
        "Redux",
    ];
    return (
        <section className="container py-2">
            <div className="flex flex-col">
                {[0, 1, 2].map((row) => (
                    <div
                        key={row}
                        className="overflow-x-hidden whitespace-nowrap w-full relative flex group"
                    >
                        <div
                            className={`inline-block animate-marquee group-hover:paused`}
                            style={{
                                animation: `marquee ${20 + row * 5}s linear infinite`,
                                animationPlayState: "running",
                            }}
                        >
                            {stack.sort(() => Math.random() - 0.5).map((tech, i) => (
                                <span
                                    key={i}
                                    className="mx-2 text-zinc-500 font-semibold"
                                >
                                    {tech}
                                </span>
                            ))}
                            {stack.sort(() => Math.random() - 0.5).map((tech, i) => (
                                <span
                                    key={`dup-${i}`}
                                    className="mx-2 text-zinc-500 font-semibold"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <style>{`
                            .group:hover > .animate-marquee {
                                animation-play-state: paused !important;
                            }
                            @keyframes marquee {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                        `}</style>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stack;
