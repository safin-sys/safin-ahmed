const Experience = () => {
    const experience = [
        {
            company_name: "Spark Tech Agency",
            work_period: "Feb 2025 - Present",
            employment_type: "Contract",
            location: "Dhaka, Bangladesh",
            work_type: "On-site",
            stack: ["NextJS", "Express.js", "MongoDB", "nginx", "AWS", "Vite"],
            positions: [
                {
                    position: "Senior Fullstack Developer",
                    points: [
                        <p>
                            Short-term engagement during transition from career
                            break. Contributing to small to mid-sized full-stack
                            projects.
                        </p>,
                        <p>
                            Developed scalable backend services using Node.js,
                            Express.js, and MongoDB (Mongoose ORM).
                        </p>,
                        <p>
                            Integrated Stripe payment systems (including Stripe
                            Connect) across multiple platforms.
                        </p>,
                    ],
                },
            ],
        },
        {
            company_name: "Startell Media",
            work_period: "Feb 2023 - Mar 2024",
            employment_type: "Full-time",
            location: "Tel Aviv, Israel",
            work_type: "Remote",
            stack: ["NextJS", "ReactJS", "Redux", "MongoDB", "Firebase"],
            positions: [
                {
                    position: "Senior Web Architect",
                    points: [
                        <p>
                            Published a cross-platform PWA using Firebase
                            (Storage, Auth, Cloud Functions).{" "}
                            <a href="https://play.google.com/store/apps/details?id=com.starbox.android&pli=1">
                                Play Store
                            </a>{" "}
                            |{" "}
                            <a href="https://apps.apple.com/ua/app/startell-media/id1447417033">
                                App Store
                            </a>
                        </p>,
                        <p>
                            Reduced frontend & backend load times by 60% through
                            optimization.
                        </p>,
                        <p>
                            Built a real-time chat + voice/video platform using
                            Agora.io.
                        </p>,
                        <p>
                            Developed a data dashboard for tracking influencer
                            traffic and engagement.
                        </p>,
                        <p>
                            Led async teams using Trello and GitHub Projects.
                        </p>,
                    ],
                },
            ],
        },
        {
            company_name: "Property Source Technology",
            employment_type: "Full-time",
            location: "Sarasota, FL, USA",
            work_type: "Remote",
            stack: [
                "NextJS",
                "NextJS API Routes",
                "Redux",
                "Prisma ORM",
                "Chakra UI",
                "Material UI",
            ],
            positions: [
                {
                    position: "Senior Frontend Developer",
                    work_period: "Jul 2022 - Jan 2023",
                    points: [
                        <p>Handled 1,000+ daily active users.</p>,
                        <p>
                            Built scalable frontend (Next.js) and backend
                            (Flask) systems
                        </p>,
                        <p>
                            Deployed services using Docker, Nginx, and Ubuntu
                            servers.
                        </p>,
                    ],
                },
                {
                    position: "Frontend Developer",
                    work_period: "Mar 2022 - Jun 2022",
                    points: [
                        <p>Handled 1,000+ daily active users.</p>,
                        <p>
                            Built scalable frontend (Next.js) and backend
                            (Flask) systems
                        </p>,
                        <p>
                            Deployed services using Docker, Nginx, and Ubuntu
                            servers.
                        </p>,
                    ],
                },
            ],
        },
    ];
    return (
        <section className="container">
            <div className="border-b border-border px-2 py-1">
                <h1 className="text-2xl">Experience</h1>
            </div>
        </section>
    );
};

export default Experience;
