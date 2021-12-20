import { Flex } from "@chakra-ui/react";
import { SiBootstrap, SiChakraui, SiCss3, SiGatsby, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiSass, SiSvelte, SiTypescript, SiVuedotjs } from "react-icons/si";
import { TooltipContainer } from "./TooltipContainer";

export const FrontendPanel = () => {
    return (
        <Flex fontSize="3rem" gap="2rem 1rem" flexWrap="wrap" justifyContent="center" mt="1rem">
            {/* trinity */}
            <TooltipContainer label="HTML5">
                <SiHtml5 />
            </TooltipContainer>
            <TooltipContainer label="CSS3">
                <SiCss3 />
            </TooltipContainer>
            <TooltipContainer label="JavaScript">
                <SiJavascript />
            </TooltipContainer>
            <TooltipContainer label="TypeScript">
                <SiTypescript />
            </TooltipContainer>

            {/* frameworks */}
            <TooltipContainer label="React">
                <SiReact />
            </TooltipContainer>
            <TooltipContainer label="NextJS">
                <SiNextdotjs />
            </TooltipContainer>
            <TooltipContainer label="Gatsby">
                <SiGatsby />
            </TooltipContainer>
            <TooltipContainer label="Svelte">
                <SiSvelte />
            </TooltipContainer>

            {/* css */}
            <TooltipContainer label="Sass">
                <SiSass />
            </TooltipContainer>
            <TooltipContainer label="Bootstrap">
                <SiBootstrap />
            </TooltipContainer>
            <TooltipContainer label="ChakraUI">
                <SiChakraui />
            </TooltipContainer>
            <TooltipContainer label="Vue">
                <SiVuedotjs />
            </TooltipContainer>
        </Flex>
    );
};