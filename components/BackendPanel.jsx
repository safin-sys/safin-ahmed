import { Flex } from "@chakra-ui/react";
import { SiExpress, SiFirebase, SiNodedotjs } from "react-icons/si";
import { TooltipContainer } from "./TooltipContainer";

export const BackendPanel = () => {
    return (
        <Flex fontSize="3rem" gap="2rem 1rem" flexWrap="wrap" justifyContent="center" mt="1rem">
            <TooltipContainer label="NodeJS">
                <SiNodedotjs />
            </TooltipContainer>
            <TooltipContainer label="ExpressJS">
                <SiExpress />
            </TooltipContainer>
            <TooltipContainer label="Firebase">
                <SiFirebase />
            </TooltipContainer>
        </Flex>
    );
};
