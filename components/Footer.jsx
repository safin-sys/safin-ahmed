import { CopyIcon } from '@chakra-ui/icons';
import { Box, Flex, Link, Text } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';

export const Footer = () => {
    const toast = useToast();
    const handleCopy = () => {
        navigator.clipboard.writeText('safinahmed248@gmail.com');
        toast({
            title: 'Copied!',
            status: 'success',
            duration: 90000000,
            isClosable: true,
            position: 'bottom-right',
            variant: 'left-accent',
        });
    };
    return (
        <Box h="60px" fontSize="14px" letterSpacing="2px">
            <Flex flexWrap="wrap" justifyContent="center">
                <Link href="mailto:safinahmed248@gmail.com">safinahmed248@gmail.com</Link>
                <Text ml="1rem" whiteSpace="nowrap" onClick={handleCopy} cursor="pointer">
                    copy email <CopyIcon />
                </Text>
            </Flex>
        </Box>
    );
};
