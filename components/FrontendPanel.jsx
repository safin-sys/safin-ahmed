import { Box, Container, Flex, Grid, Tooltip } from "@chakra-ui/react";
import { SiBootstrap, SiChakraui, SiCss3, SiGatsby, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiSass, SiSvelte, SiTypescript, SiVuedotjs } from "react-icons/si";

export const FrontendPanel = () => {
    return (
        <Flex fontSize="3rem" gap="2rem 1rem" flexWrap="wrap" justifyContent="center">
            {/* trinity */}
            <TooltipContainer children={<SiHtml5 />} label="HTML5" />
            <TooltipContainer children={<SiCss3 />} label="CSS3" />
            <TooltipContainer children={<SiJavascript />} label="JavaScript" />
            <TooltipContainer children={<SiTypescript />} label="TypeScript" />
            {/* frameworks */}
            <TooltipContainer children={<SiReact />} label="React" />
            <TooltipContainer children={<SiNextdotjs />} label="NextJS" />
            <TooltipContainer children={<SiGatsby />} label="Gatsby" />
            <TooltipContainer children={<SiSvelte />} label="Svelte" />
            {/* css */}
            <TooltipContainer children={<SiSass />} label="Sass" />
            <TooltipContainer children={<SiBootstrap />} label="Bootstrap" />
            <TooltipContainer children={<SiChakraui />} label="ChakraUI" />
            <TooltipContainer children={<SiVuedotjs />} label="Vue" />
        </Flex>
    );
};

const TooltipContainer = ({ children, label }) => {
    return (
        <Tooltip label={label}>
            <Container centerContent flex="0 0 calc(24% - 3rem)">
                {children}
            </Container>
        </Tooltip>
    );
}