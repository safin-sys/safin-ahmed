import { CopyIcon } from "@chakra-ui/icons";
import { Box, Flex, Link, useToast, Text } from "@chakra-ui/react";


export const Footer = () => {
    const toast = useToast();
    const handleCopy = () => {
        navigator.clipboard.writeText('safinahmed248@gmail.com');
        toast({
            title: 'Copied! 👍',
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'bottom-right',
            variant: 'left-accent',
        });
    };
    return (
        <Box my="auto" mb={["initial", "initial", "16rem"]}>
            <Flex flexWrap="wrap" justifyContent="center">
                <Link href="mailto:safinahmed248@gmail.com">safinahmed248@gmail.com</Link>
                <Text ml="1rem" whiteSpace="nowrap" onClick={handleCopy} cursor="pointer" userSelect="none">
                    copy email <CopyIcon />
                </Text>
            </Flex>
        </Box>
    );
};
