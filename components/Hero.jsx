import { Box, Heading } from "@chakra-ui/layout";

export default function Hero() {
    return (
        <Box as="header" mt={["40px", "40px", "120px"]} h="calc(100vh - 120px)">
            <Heading bgColor="primary" color="white" display="inline" fontWeight="normal" fontSize="24px" px="1rem">Safin Ahmed</Heading>
            <Heading fontWeight="normal" maxW="40ch" lineHeight="60px" mt="120px" fontSize={[28, 28, 36]}>I'm a self-taught front-end developer based in Dhaka, Bangladesh.</Heading>
        </Box>
    )
}
