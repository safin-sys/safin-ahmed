import { Container, Tooltip } from "@chakra-ui/react";

export const TooltipContainer = ({ children, label }) => {
    return (
        <Tooltip label={label}>
            <Container centerContent flex="0 0 calc(25% - 3rem)">
                {children}
            </Container>
        </Tooltip>
    );
};
