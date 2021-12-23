import { Box, Button, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import { useForm } from "@formspree/react";

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("mrgjzwdq");
    const toast = useToast();
    const handleToast = () => {
        toast({
            title: 'Message sent! 😊',
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'bottom-right',
            variant: 'left-accent',
        });
    };
    return (
        <Box mx="auto" mb="4rem" w={["100%", "400px"]} id="contact_form">
            <form
                onSubmit={handleSubmit}
            >
                <FormLabel fontSize="1rem" letterSpacing="2px">Name</FormLabel>
                <Input borderRadius="0" fontSize="1rem" borderColor="#151A41" mb="1.5rem" type="text" name="name" placeholder="Your name" required/>
                <FormLabel fontSize="1rem" letterSpacing="2px">Email</FormLabel>
                <Input borderRadius="0" fontSize="1rem" borderColor="#151A41" mb="1.5rem" type="email" name="_replyto" placeholder="Your email" required/>
                <FormLabel fontSize="1rem" letterSpacing="2px">Message</FormLabel>
                <Textarea borderRadius="0" fontSize="1rem" borderColor="#151A41" mb="1.5rem" name="message" placeholder="Your message" required></Textarea>
                <Button fontSize="1rem" onClick={handleToast} bgColor="#151A41" color="white" type="submit" borderRadius="0">Send</Button>
            </form>
        </Box>
    );
};
