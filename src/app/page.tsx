import Divider from "@/components/divider";
import Nav from "@/components/nav";
import Hero from "@/components/hero";

export default function Home() {
    return (
        <main className="w-full">
            <Nav />
            <Divider />
            <Hero />
            <Divider />
        </main>
    );
}
