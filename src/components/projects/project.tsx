import github_slug_to_name from "@/lib/github_slug_to_name";
import { ProjectProps } from ".";
import ExternalLink from "../icons/external-link";
import Image from "next/image";

const Project = ({
  name,
  description,
  homepage,
  default_branch,
}: ProjectProps) => {
  return (
    <article className="w-full">
      <div className="p-1 border-b border-border">
        <div className="relative aspect-video">
          <Image
            className="object-cover rounded"
            src={`https://raw.githubusercontent.com/safin-sys/${name}/${default_branch}/logo.png`}
            alt={name}
            fill
          />
        </div>
      </div>
      <footer className="flex">
        <div className="w-full">
          <div className="border-b border-border px-2 py-0.5 flex items-center justify-between">
            <h3 className="font-bold">{github_slug_to_name(name)}</h3>
            <a
              href={homepage}
              target="_blank"
              className="flex items-center gap-1 hover:underline text-sm"
            >
              External Link
              <div className="border border-zinc-400 rounded">
                <ExternalLink size={12} />
              </div>
            </a>
          </div>
          <p className="px-2 py-1 min-h-12 text-sm">{description}</p>
        </div>
      </footer>
    </article>
  );
};

export default Project;
