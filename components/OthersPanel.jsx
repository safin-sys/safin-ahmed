import { Grid } from "@chakra-ui/react";
import { SiGit, SiGithub, SiNetlify, SiVercel } from "react-icons/si";
import { StackContainer } from "./StackContainer";

export const OthersPanel = () => {
    return (
        <Grid templateColumns={["repeat(3, 1fr)", "repeat(4, 1fr)"]} fontSize="3rem" gap="1.5rem 1rem" mt="1rem">
            <StackContainer label="Git">
                <SiGit />
            </StackContainer>
            <StackContainer label="Github">
                <SiGithub />
            </StackContainer>
            <StackContainer label="Netlify">
                <SiNetlify />
            </StackContainer>
            <StackContainer label="Vercel">
                <SiVercel />
            </StackContainer>
        </Grid>
    );
};
