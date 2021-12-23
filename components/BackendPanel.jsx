import { Grid } from "@chakra-ui/react";
import { SiExpress, SiFirebase, SiNodedotjs } from "react-icons/si";
import { StackContainer } from "./StackContainer";

export const BackendPanel = () => {
    return (
        <Grid templateColumns={["repeat(3, 1fr)", "repeat(4, 1fr)"]} fontSize="3rem" gap="1.5rem 1rem" mt="1rem">
            <StackContainer label="NodeJS">
                <SiNodedotjs />
            </StackContainer>
            <StackContainer label="ExpressJS">
                <SiExpress />
            </StackContainer>
            <StackContainer label="Firebase">
                <SiFirebase />
            </StackContainer>
        </Grid>
    );
};
