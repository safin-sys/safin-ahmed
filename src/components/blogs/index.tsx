import Link from "next/link";
import Blog from "./blog";
import ArrowForward from "../icons/arrow-forward";

export type BlogProps = {
    title: string;
    image: string;
    date: string;
};

const Blogs = () => {
    const blogs = [
        {
            title: "Blog 1",
            image: "https://avatars.githubusercontent.com/u/61120114?v=4",
            date: "2021-01-01",
        },
        {
            title: "Blog 2",
            image: "https://avatars.githubusercontent.com/u/61120114?v=4",
            date: "2021-01-01",
        },
    ];
    return (
        <section className="container">
            <div className="border-b border-border px-2 py-1">
                <h1 className="text-2xl">Blog</h1>
            </div>
            <div className="border-b border-border flex p-1">
                <Link
                    href="#"
                    className="flex items-center gap-1 hover:underline text-xs ml-auto"
                >
                    View all
                    <ArrowForward />
                </Link>
            </div>
            <div className="flex flex-col sm:flex-row">
                <Blog {...blogs[0]} />
                <div className="h-6 border-y border-border sm:w-6 sm:min-w-6 sm:border-x sm:h-auto sm:border-y-0" />
                <Blog {...blogs[1]} />
            </div>
        </section>
    );
};

export default Blogs;
