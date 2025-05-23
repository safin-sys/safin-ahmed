import Divider from "@/components/divider";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Info from "@/components/info";
import Cover from "@/components/cover";
import ExternalLinks from "@/components/external-links";
import Stack from "@/components/stack";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Experience from "@/components/experience";

export default function Home() {
    return (
        <main className="w-full">
            <div className="mx-4">
                <Nav />
            </div>
            <Divider />
            <div className="mx-4">
                <Cover />
            </div>
            <Divider />
            <div className="mx-4">
                <Hero />
            </div>
            <Divider pattern />
            <div className="mx-4">
                <Info />
            </div>
            <Divider pattern />
            <div className="mx-4">
                <ExternalLinks />
            </div>
            <Divider pattern />
            {/* <div className="mx-4">
                <Experience />
            </div>
            <Divider pattern /> */}
            <div className="mx-4">
                <Projects />
            </div>
            <Divider />
            <div className="mx-4">
                <Footer />
                <Stack />
            </div>
        </main>
    );
}
