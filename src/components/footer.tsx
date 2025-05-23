import ExternalLink from "./icons/external-link";

const Footer = () => {
    return (
        <footer className="container pt-4 pb-1 text-sm">
            <section className="flex gap-4 items-center justify-center">
                <a
                    href="https://linkedin.com/in/safin-sys"
                    className="hover:underline flex items-center gap-1"
                    target="_blank"
                >
                    LinkedIn
                    <span className="mt-0.5">
                        <ExternalLink size={16} />
                    </span>
                </a>
                <a
                    href="https://linkedin.com/in/safin-sys"
                    className="hover:underline flex items-center gap-1"
                    target="_blank"
                >
                    GitHub
                    <span className="mt-0.5">
                        <ExternalLink size={16} />
                    </span>
                </a>
                {/* <span>Spotify - inactive</span> */}
            </section>
        </footer>
    );
};

export default Footer;
