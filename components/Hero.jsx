import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import HALO from "vanta/dist/vanta.halo.min";

export default function Hero() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const heroBg = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(HALO({
                el: heroBg.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                xOffset: 0.20,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <Box h="80vh" as="header" ref={heroBg}>
            <Container maxW="container.md" h="100%">
                <Flex zIndex="1" color="white" flexDir="column" justifyContent="center" h="100%">
                    <Heading fontSize="1rem">
                        Hi! I&apos;m
                    </Heading>
                    <Heading fontSize="3rem">
                        Safin Ahmed
                    </Heading>
                    <Text mt="1rem">
                        I&apos;m a self-taught full-stack developer from <br /> Dhaka, Bangladesh.
                    </Text>
                </Flex>
            </Container>
        </Box>
    )
}
