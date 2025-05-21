import { ProjectProps } from ".";
import ExternalLink from "../icons/external-link";

const Project = ({
  name,
  created_at,
  description,
  homepage,
  default_branch,
}: ProjectProps) => {
  return (
    <article className="container border-b border-border">
      <div className="border-b border-border px-2 py-0.5">
        <h3 className="text-xl">{name}</h3>
      </div>
      <div className="p-1 border-b border-border">
        <img
          className="w-full aspect-video object-cover rounded"
          src={`https://raw.githubusercontent.com/safin-sys/${name}/${default_branch}/logo.png`}
          alt={name}
        />
      </div>
      <footer className="flex">
        <div className="w-full">
          <p className="p-2">{description}</p>
        </div>
        <div className="overflow-hidden border-l border-border w-24 min-w-24">
          <div className="px-2 py-0.5">
            <span className="text-[12px]">Year</span>
            <h4 className="text-xl -mt-1.5">
              {new Date(created_at).getUTCFullYear()}
            </h4>
          </div>
          <div className="px-2 py-0.5 border-t border-border">
            <a
              href={homepage}
              target="_blank"
              className="w-full h-12 flex justify-center items-center"
            >
              <div className="border border-zinc-400">
                <ExternalLink />
              </div>
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default Project;
