import Divider from "@/components/divider";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Info from "@/components/info";
import Cover from "@/components/cover";
import ExternalLinks from "@/components/external-links";
import Stack from "@/components/stack";

export default function Home() {
    return (
        <main className="w-full">
            <Nav />
            <Divider />
            <Cover />
            <Divider />
            <Hero />
            <Divider pattern />
            <Info />
            <Divider pattern />
            <ExternalLinks />
            <Divider pattern />
            <Stack />
            <Divider pattern />
        </main>
    );
}
