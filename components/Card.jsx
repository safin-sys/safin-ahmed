import { AspectRatio, Box, Button, Heading, Image, Link, Text } from "@chakra-ui/react";
import slugToName from '../helper/slugToName';

export const Card = ({ name, homepage, default_branch, description }) => {
    return (
        <Box as="article">
            <AspectRatio ratio={1.85 / 1} mb="1.5rem">
                <Image
                    src={`https://raw.githubusercontent.com/safin-sys/${name}/${default_branch}/logo.png`}
                    alt={name}
                    objectFit="cover"
                    objectPosition="center"
                    w="100%"
                    h="300px"
                    border="1px solid #151A41" />
            </AspectRatio>
            <Heading fontSize="1.5rem" mb=".5rem">{slugToName(name)}</Heading>
            <Text mb="1.5rem">
                {description}
            </Text>
            <Box>
                <Button mr="1rem" bgColor="#151A41" color="white" borderRadius="0">See More</Button>
                <Link href={homepage} _hover={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                    <Button bgColor="transparent" border="1px #151A41 solid" borderRadius="0">
                        Live Demo
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};
