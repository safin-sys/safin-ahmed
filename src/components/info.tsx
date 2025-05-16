import { Code, Mail, Map, Phone } from "lucide-react";

const Info = () => {
    const infos = [
        {
            icon: <Code className="w-[14px] h-[14px]" />,
            text: "Senior Fullstack Developer @Spark Tech Agency",
        },
        {
            icon: <Map className="w-[14px] h-[14px]" />,
            text: "Dhaka, Bangladesh",
        },
        {
            icon: <Phone className="w-[14px] h-[14px]" />,
            text: "+880 1973 781281",
        },
        {
            icon: <Mail className="w-[14px] h-[14px]" />,
            text: "safinahmed248@gmail.com",
        },
    ];
    return (
        <ul className="container p-4 flex flex-col gap-2 text-[14px]">
            {infos.map((info, key) => (
                <li key={key} className="flex items-center gap-1 font-normal">
                    <span className="border p-0.5 rounded-md">{info.icon}</span>
                    {info.text}
                </li>
            ))}
        </ul>
    );
};

export default Info;
