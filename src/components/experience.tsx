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
          points: [
            <p>
              Short-term engagement during transition from career break.
              Contributing to small to mid-sized full-stack projects.
            </p>,
            <p>
              Developed scalable backend services using Node.js, Express.js, and
              MongoDB (Mongoose ORM).
            </p>,
            <p>
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
          points: [
            <p>
              Published a cross-platform PWA using Firebase (Storage, Auth,
              Cloud Functions).{" "}
              <a href="https://play.google.com/store/apps/details?id=com.starbox.android&pli=1">
                Play Store
              </a>{" "}
              |{" "}
              <a href="https://apps.apple.com/ua/app/startell-media/id1447417033">
                App Store
              </a>
            </p>,
            <p>
              Reduced frontend & backend load times by 60% through optimization.
            </p>,
            <p>
              Built a real-time chat + voice/video platform using Agora.io.
            </p>,
            <p>
              Developed a data dashboard for tracking influencer traffic and
              engagement.
            </p>,
            <p>Led async teams using Trello and GitHub Projects.</p>,
          ],
        },
      ],
    },
    {
      company_name: "Property Source Technology",
      work_period: "Mar 2022 - Jan 2023",
      employment_type: "Full-time",
      location: "Sarasota, FL, USA",
      work_type: "Remote",
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
            <p>Handled 1,000+ daily active users.</p>,
            <p>
              Built scalable frontend (Next.js) and backend (Flask) systems
            </p>,
            <p>Deployed services using Docker, Nginx, and Ubuntu servers.</p>,
          ],
        },
        {
          position: "Frontend Developer",
          work_period: "Mar 2022 - Jun 2022",
          points: [
            <p>Handled 1,000+ daily active users.</p>,
            <p>
              Built scalable frontend (Next.js) and backend (Flask) systems
            </p>,
            <p>Deployed services using Docker, Nginx, and Ubuntu servers.</p>,
          ],
        },
      ],
    },
  ];
  return (
    <section className="container">
      <div className="border-b border-border px-2 py-1">
        <h1 className="text-2xl">Experience</h1>
      </div>
      <div>
        {experiences.map((experience, key) => (
          <Accordion key={key} collapsible type="single">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-2">
                <div className="flex flex-col">
                  <h4 className="font-semibold text-base">
                    {experience.company_name}
                  </h4>
                  <p className="flex items-center gap-1">
                    {experience.work_period}
                    {get_work_duration(experience.work_period) && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-white" />
                        {get_work_duration(experience.work_period)}
                      </>
                    )}
                  </p>
                  <p className="font-normal">
                    {experience.location} - {experience.employment_type} -{" "}
                    {experience.work_type}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex border-t border-border">
                  <div className="p-0.5 h-fit border-b border-border">
                    <Code2 className="w-5 h-5 border rounded-[6px] p-0.5" />
                  </div>
                  <div className="flex h-auto w-2 bg-[repeating-linear-gradient(45deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] border-x border-border" />
                  <div className="pt-0.5 w-full">
                    <div className="border-b border-border w-full">
                      <h1 className="px-2">Senior Nigga</h1>
                    </div>
                    <div className="px-2">
                      <ul>
                        <li>List item 1</li>
                        <li>List item 2</li>
                      </ul>
                    </div>
                    <div className="flex gap-1 px-2">
                      <span>ReactJS</span>
                      <span>NextJS</span>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Experience;
