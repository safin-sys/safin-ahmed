import Divider from "@/components/divider";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Info from "@/components/info";

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
            <div className="mx-4">
                <Info />
            </div>
            <Divider pattern />
        </main>
    );
}
