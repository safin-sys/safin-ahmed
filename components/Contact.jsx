import { Button } from '@chakra-ui/button'
import { FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Grid, Heading } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import { useToast } from '@chakra-ui/toast'
import { useForm } from '@formspree/react';
import { Footer } from './Footer'

export default function Contact() {
    return (
        <Flex style={{ scrollSnapAlign: 'start' }} flexDir="column" alignItems="center">
            <Grid placeContent="center" h="calc(100vh - 60px)">
            <Heading color="secondary" fontWeight="normal" fontSize="12px" letterSpacing="3px" mb="30px">CONTACT</Heading>
                <ContactForm />
            </Grid>
            <Footer />
        </Flex>
    )
}

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mrgjzwdq");
    const toast = useToast()
    const handleToast = () => {
        if (state.succeeded) {
            toast({
                title: 'Message sent!',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'bottom-right',
                variant: 'left-accent',
            })
        } else {
            toast({
                title: 'Message sending failed :(',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'bottom-right',
                variant: 'left-accent',
            })
        }
    }
    return (
        <Box w={["280px", "400px"]} id="contact_form">
            <form
                onSubmit={handleSubmit}
            >
                <FormLabel fontSize="14px" letterSpacing="2px">Name</FormLabel>
                <Input borderRadius="0" fontSize="14px" borderColor="primary" mb="1rem" type="text" name="name" placeholder="Your name" />
                <FormLabel fontSize="14px" letterSpacing="2px">Email</FormLabel>
                <Input borderRadius="0" fontSize="14px" borderColor="primary" mb="1rem" type="email" name="_replyto" placeholder="Your email" />
                <FormLabel fontSize="14px" letterSpacing="2px">Message</FormLabel>
                <Textarea borderRadius="0" fontSize="14px" borderColor="primary" mb="1rem" name="message" placeholder="Your message"></Textarea>
                <Button fontSize="14px" onClick={handleToast} bgColor="primary" color="white" type="submit">Send</Button>
            </form>
        </Box>
    )
}