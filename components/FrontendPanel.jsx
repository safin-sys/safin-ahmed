import { Grid } from "@chakra-ui/react";
import { SiBootstrap, SiChakraui, SiCss3, SiGatsby, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiSass, SiSvelte, SiTypescript, SiVuedotjs } from "react-icons/si";
import { StackContainer } from "./StackContainer";

export const FrontendPanel = () => {
    return (
        <Grid templateColumns={["repeat(3, 1fr)", "repeat(4, 1fr)"]} fontSize="3rem" gap="1.5rem 1rem" mt="1rem">
            {/* trinity */}
            <StackContainer label="HTML5">
                <SiHtml5 />
            </StackContainer>
            <StackContainer label="CSS3">
                <SiCss3 />
            </StackContainer>
            <StackContainer label="JavaScript">
                <SiJavascript />
            </StackContainer>
            <StackContainer label="TypeScript">
                <SiTypescript />
            </StackContainer>

            {/* frameworks */}
            <StackContainer label="React">
                <SiReact />
            </StackContainer>
            <StackContainer label="NextJS">
                <SiNextdotjs />
            </StackContainer>
            <StackContainer label="Gatsby">
                <SiGatsby />
            </StackContainer>
            <StackContainer label="Svelte">
                <SiSvelte />
            </StackContainer>

            {/* css */}
            <StackContainer label="Sass">
                <SiSass />
            </StackContainer>
            <StackContainer label="Bootstrap">
                <SiBootstrap />
            </StackContainer>
            <StackContainer label="ChakraUI">
                <SiChakraui />
            </StackContainer>
            <StackContainer label="Vue">
                <SiVuedotjs />
            </StackContainer>
        </Grid>
    );
};