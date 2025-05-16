import Divider from "@/components/divider";
import Nav from "@/components/nav";
import Hero from "@/components/hero";

export default function Home() {
    return (
        <main className="w-full">
            <div className="mx-4">
                <Nav />
            </div>
            <Divider />
            <div className="mx-4">
                <Hero />
            </div>
            <Divider pattern />
        </main>
    );
}
