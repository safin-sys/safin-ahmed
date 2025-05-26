import ExternalLink from "./icons/external-link";
import GitHub from "./icons/github";
import LinkedIn from "./icons/linkedin";

const ExternalLinks = () => {
    return (
        <section className="container flex flex-col md:flex-row">
            <article className="flex p-4 gap-4 items-center w-full">
                <GitHub />
                <div>
                    <h4 className="font-heading text-xl font-medium">Github</h4>
                    <p className="text-[12px] -mt-1">@safin-sys</p>
                </div>
                <a
                    href="https://github.com/safin-sys"
                    target="_blank"
                    className="ml-auto relative group"
                >
                    <ExternalLink />
                    <span
                        className="absolute inset-0 pointer-events-none transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:border-2 before:border-blue-400 before:opacity-0 group-hover:before:opacity-100 group-hover:before:scale-105 before:scale-95 before:transition-all before:duration-300"
                        aria-hidden="true"
                    />
                </a>
            </article>
            <div className="md:min-w-6 md:w-6 md:h-20 h-6 md:border-x md:border-y-0 border-y border-border" />
            <article className="flex p-4 gap-4 items-center w-full">
                <LinkedIn />
                <div>
                    <h4 className="font-heading text-xl font-medium">
                        LinkedIn
                    </h4>
                    <p className="text-[12px] -mt-1">@safin-sys</p>
                </div>
                <a
                    href="https://linkedin.com/in/safin-sys"
                    target="_blank"
                    className="ml-auto relative group"
                >
                    <ExternalLink />
                    <span
                        className="absolute inset-0 pointer-events-none transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:border-2 before:border-blue-400 before:opacity-0 group-hover:before:opacity-100 group-hover:before:scale-105 before:scale-95 before:transition-all before:duration-300"
                        aria-hidden="true"
                    />
                </a>
            </article>
        </section>
    );
};

export default ExternalLinks;
