import { Container, Text } from "@chakra-ui/react";

export const StackContainer = ({ children, label }) => {
    return (
        <Container centerContent>
            {children}
            <Text mt=".5rem" fontSize=".8rem" bgColor="#151A41" color="white" p="0 .2rem" fontWeight="semibold">{label}</Text>
        </Container>
    );
};
