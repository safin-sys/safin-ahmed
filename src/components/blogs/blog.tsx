import ExternalLink from "../icons/external-link";
import Image from "next/image";
import { BlogProps } from ".";
import dateFormatter from "@/lib/date_formatter";

const Blog = ({ title, image, date }: BlogProps) => {
    return (
        <article className="w-full">
            <div className="p-2 border-b border-border">
                <div className="relative aspect-video">
                    <Image
                        className="object-cover rounded"
                        src={image}
                        alt={title}
                        fill
                    />
                </div>
            </div>
            <footer className="flex items-center justify-between">
                <div className="border-b border-border px-3 py-2 flex flex-col gap-1">
                    <h3 className="text-xl font-medium">{title}</h3>
                    <p className="text-sm">
                        Published on {dateFormatter(date)}
                    </p>
                </div>
                <ExternalLink size={24} />
            </footer>
        </article>
    );
};

export default Blog;
