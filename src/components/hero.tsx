import Divider from "./divider";

const Hero = () => {
    return (
        <section className="container flex h-36">
            <img
                src="https://avatars.githubusercontent.com/u/61120114?v=4"
                alt="pfp"
                className="w-36 h-full rounded-full border border-border p-0.5"
            />
            <Divider orientation="vertical" />
            <div className="mt-auto w-full">
                <span className="pl-2 py-2 text-[10px]">
                    text-3xl text-zinc-50 font-normal
                </span>
                <Divider />
                <h1 className="pl-2 py-1 text-3xl text-zinc-50 font-heading">
                    Safin Ahmed
                </h1>
                <Divider />
                <p className="pl-2 py-2 text-[12px]">Software Developer</p>
            </div>
        </section>
    );
};

export default Hero;
