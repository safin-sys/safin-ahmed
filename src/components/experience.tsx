import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import get_work_duration from "@/lib/get_work_duration";
import { Code2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company_name: "Spark Tech Agency",
      work_period: "Feb 2025 - Present",
      employment_type: "Contract",
      location: "Dhaka, Bangladesh",
      work_type: "On-site",
      stack: ["NextJS", "Express.js", "MongoDB", "nginx", "AWS", "Vite"],
      positions: [
        {
          position: "Senior Fullstack Developer",
          work_period: null,
          points: [
            <p key="1">
              Short-term engagement during transition from career break.
              Contributing to small to mid-sized full-stack projects.
            </p>,
            <p key="2">
              Developed scalable backend services using Node.js, Express.js, and
              MongoDB (Mongoose ORM).
            </p>,
            <p key="3">
              Integrated Stripe payment systems (including Stripe Connect)
              across multiple platforms.
            </p>,
          ],
        },
      ],
    },
    {
      company_name: "Startell Media",
      work_period: "Feb 2023 - Mar 2024",
      employment_type: "Full-time",
      location: "Tel Aviv, Israel",
      work_type: "Remote",
      stack: ["NextJS", "ReactJS", "Redux", "MongoDB", "Firebase"],
      positions: [
        {
          position: "Senior Web Architect",
          work_period: null,
          points: [
            <p key="1">
              Published a cross-platform PWA using Firebase (Storage, Auth,
              Cloud Functions).{" "}
              <a
                className="underline text-blue-400"
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://play.google.com/store/apps/details?id=com.starbox.android&pli=1"
              >
                Play Store
              </a>{" "}
              |{" "}
              <a
                className="underline text-blue-400"
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://apps.apple.com/ua/app/startell-media/id1447417033"
              >
                App Store
              </a>
            </p>,
            <p key="2">
              Reduced frontend & backend load times by 60% through optimization.
            </p>,
            <p key="3">
              Built a real-time chat + voice/video platform using Agora.io.
            </p>,
            <p key="4">
              Developed a data dashboard for tracking influencer traffic and
              engagement.
            </p>,
            <p key="5">Led async teams using Trello and GitHub Projects.</p>,
          ],
        },
      ],
    },
    {
      company_name: "Property Source Technology",
      work_period: "Mar 2022 - Jan 2023",
      employment_type: "Full-time",
      location: "Sarasota, FL, USA",
      work_type: "Hybrid",
      stack: [
        "NextJS",
        "NextJS API Routes",
        "Redux",
        "Prisma ORM",
        "Chakra UI",
        "Material UI",
      ],
      positions: [
        {
          position: "Senior Frontend Developer",
          work_period: "Jul 2022 - Jan 2023",
          points: [
            <p key="1">Handled 1,000+ daily active users.</p>,
            <p key="2">
              Lead the backend and the frontend team and architected the
              project.
            </p>,
            <p key="3">
              Built scalable frontend (Next.js) and backend (Flask) systems
            </p>,
            <p key="4">
              Deployed services using Docker, Nginx, and Ubuntu servers.
            </p>,
          ],
        },
        {
          position: "Frontend Developer",
          work_period: "Mar 2022 - Jun 2022",
          points: [
            <p key="1">
              Built the landing page and admin dashboard using Next.js, Chakra
              UI, and Material UI.
            </p>,
          ],
        },
      ],
    },
  ];

  const lastExperience = experiences[experiences.length - 1];
  return (
    <section className="container">
      <div className="border-b border-border px-2 py-1">
        <h1 className="text-2xl">Experience</h1>
      </div>
      <div>
        <Accordion
          collapsible
          type="single"
          className="w-full"
          defaultValue={experiences[0].company_name}
        >
          {experiences.map((experience, key) => (
            <AccordionItem
              key={key}
              value={experience.company_name}
              className="border-none"
            >
              <AccordionTrigger
                className={`px-2 ${
                  experience != lastExperience && "border-b border-border"
                } rounded-none`}
              >
                <AccordionHeader
                  company_name={experience.company_name}
                  employment_type={experience.employment_type}
                  work_period={experience.work_period}
                  work_type={experience.work_type}
                  location={experience.location}
                />
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <AccordionContentBody
                  experience={experience}
                  lastExperience={lastExperience}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Experience;

interface AccordionHeaderProps {
  company_name: string;
  work_period: string;
  employment_type: string;
  work_type: string;
  location: string;
}

const AccordionHeader = ({
  company_name,
  work_period,
  employment_type,
  work_type,
  location,
}: AccordionHeaderProps) => (
  <div className="flex flex-col">
    <h4 className="font-semibold text-base">{company_name}</h4>
    <p className="flex items-center gap-1">
      {work_period}
      {get_work_duration(work_period) && (
        <>
          <span className="w-1 h-1 rounded-full bg-white" />
          {get_work_duration(work_period)}
        </>
      )}
    </p>
    <p className="font-normal">
      {location} - {employment_type} - {work_type}
    </p>
  </div>
);

interface AccordionContentBodyProps {
  experience: {
    company_name: string;
    work_period: string;
    employment_type: string;
    location: string;
    work_type: string;
    stack: string[];
    positions: {
      position: string;
      work_period?: string | null;
      points: React.ReactNode[];
    }[];
  };
  lastExperience: {
    company_name: string;
    work_period: string;
    employment_type: string;
    location: string;
    work_type: string;
    stack: string[];
    positions: {
      position: string;
      work_period?: string | null;
      points: React.ReactNode[];
    }[];
  };
}

const AccordionContentBody = ({
  experience,
  lastExperience,
}: AccordionContentBodyProps) => (
  <>
    {experience.positions.map((position, index) => (
      <section
        key={index}
        className={`${
          experience === lastExperience ? "border-t" : "border-b"
        } border-border`}
      >
        <header className="flex border-b border-border">
          <BodyLogo />
          <BodyDivider />
          <div>
            <h1 className="px-1.5 text-base font-medium">
              {position.position}
            </h1>
            <div className="flex items-center gap-1 text-xs text-zinc-400 px-1.5">
              {position?.work_period
                ? position?.work_period
                : experience.work_period}
              {get_work_duration(
                position?.work_period
                  ? position?.work_period
                  : experience.work_period
              ) && (
                <>
                  <div className="w-1 h-1 rounded-full bg-zinc-400" />
                  {get_work_duration(
                    position?.work_period
                      ? position?.work_period
                      : experience.work_period
                  )}
                </>
              )}
            </div>
          </div>
        </header>
        <main className="flex">
          <div className="w-6 min-w-6 h-full" />
          <BodyDivider />
          <div className="px-1.5 py-2">
            {position.points && (
              <ul>
                {position.points.map((point, i) => (
                  <li key={i} className="flex gap-1 mb-2 text-zinc-300">
                    <span className="w-1 h-1 min-w-1 min-h-1 rounded-full bg-zinc-300 mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {experience.positions.length - 1 === index && (
              <Stack stack={experience.stack} />
            )}
          </div>
        </main>
      </section>
    ))}
  </>
);

const BodyLogo = () => (
  <div className="p-0.5 h-11 flex items-center justify-center">
    <Code2 className="w-5 h-5 border rounded-[6px] p-0.5" />
  </div>
);

const BodyDivider = () => (
  <div className="h-auto w-3 min-w-3 bg-[repeating-linear-gradient(45deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_50%)] bg-size-[6px_6px] border-x border-border" />
);

const Stack = ({ stack }: { stack: string[] }) => (
  <div className="flex flex-wrap gap-1 px-1.5 pt-2 pb-2">
    {stack.map((item, i) => (
      <span
        key={i}
        className="border-2 border-zinc-500 text-zinc-300 rounded-md py-0.5 px-2 whitespace-nowrap"
      >
        {item}
      </span>
    ))}
  </div>
);
