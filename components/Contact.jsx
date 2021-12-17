import { Container, Grid, Heading } from "@chakra-ui/react";
import { ContactForm } from "./ContactForm";
import { Footer } from "./Footer";

export default function Contact() {
    return (
        <Container maxW="container.md" mt="8rem">
            <Heading fontSize="1.5rem">Contact Me</Heading>
            <Grid justifyContent="center" templateColumns={["1fr", "1fr 1fr"]} my="2rem">
                <ContactForm />
                <Footer />
            </Grid>
        </Container>
    )
}