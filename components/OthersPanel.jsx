import { Flex } from "@chakra-ui/react";
import { SiGit, SiGithub, SiNetlify, SiVercel } from "react-icons/si";
import { TooltipContainer } from "./TooltipContainer";

export const OthersPanel = () => {
    return (
        <Flex fontSize="3rem" gap="2rem 1rem" flexWrap="wrap" justifyContent="center" mt="1rem">
            <TooltipContainer label="Git">
                <SiGit />
            </TooltipContainer>
            <TooltipContainer label="Github">
                <SiGithub />
            </TooltipContainer>
            <TooltipContainer label="Netlify">
                <SiNetlify />
            </TooltipContainer>
            <TooltipContainer label="Vercel">
                <SiVercel />
            </TooltipContainer>
        </Flex>
    );
};
