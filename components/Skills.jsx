import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

const skills = [
    {
        name: "Hypertext Markup Language",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
        name: "Cascading Style Sheets",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
        name: "JavaScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png",
    },
    {
        name: "React",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        name: "Next.js",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
]

export default function Skills() {
    return (
        <Flex alignItems="center" h="100vh" pos="relative">
            <Box>
                <Heading color="secondary" fontWeight="normal" fontSize="12px" letterSpacing="3px" mb="30px">SKILLS</Heading>
                {skills.map((skill, index) => (
                    <Skill key={index} {...skill} />
                ))}
            </Box>
        </Flex>
    )
}

const Skill = ({ name, image }) => (
    <Box role="group">
        <Text fontSize="14px" mb="2px">{name}</Text>
        <Image _groupHover={{opacity: 1}} filter="grayscale(100%) brightness(80%) contrast(100%)" opacity="0" h="400px" maxW="400px" pos="absolute" top="20%" right="0" src={image} alt={name} />
    </Box>
)