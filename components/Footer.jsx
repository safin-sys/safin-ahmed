import { CopyIcon } from "@chakra-ui/icons";
import { Box, Flex, Link, useToast, Text } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

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
        <Flex justifyContent="center">
            <Flex alignItems={["inherit", "center"]} flexDir="column">
                <Flex flexWrap="wrap">
                    <Link
                        href="mailto:safinahmed248@gmail.com"
                        display="flex"
                        alignItems="center"
                        gap=".5rem"
                        mr="1rem"
                    >
                        <AiOutlineMail /> safinahmed248@gmail.com
                    </Link>
                    <Text
                        _hover={{ textDecoration: 'underline' }}
                        whiteSpace="nowrap"
                        onClick={handleCopy}
                        cursor="pointer"
                        userSelect="none"
                    >
                        <CopyIcon /> Copy email
                    </Text>
                </Flex>
                <Link
                    href="https://github.com/safin-sys"
                    target="_blank"
                    rel="noopener noreferrer"
                    display="flex"
                    alignItems="center"
                    gap=".5rem"
                    mt=".5rem"
                >
                    <SiGithub /> Github
                </Link>
            </Flex>
        </Flex>
    );
};
