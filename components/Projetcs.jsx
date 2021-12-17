import { Container, Grid, Heading } from "@chakra-ui/react";
import { Card } from "./Card";

export default function Projetcs({ projects }) {
    return (
        <Container maxW="container.md" my="2rem">
            <Heading fontSize="1.5rem">My Projects</Heading>
            <Grid templateColumns={["1fr", "1fr 1fr"]} gap="2rem 1rem" mt="2rem" justifyContent="space-between">
                {projects.map((project, index) => (
                    <Card key={index} {...project} />
                ))}
            </Grid>
        </Container>
    )
}