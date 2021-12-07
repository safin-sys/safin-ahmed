import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Heading, Link, Text } from "@chakra-ui/layout";

const images = [
    {
        src: "https://source.unsplash.com/random/800x600",
        alt: "random image 1",
    },
    {
        src: "https://source.unsplash.com/random/801x601",
        alt: "random image 2",
    },
    {
        src: "https://source.unsplash.com/random/802x602",
        alt: "random image 3",
    },
    {
        src: "https://source.unsplash.com/random/803x603",
        alt: "random image 4",
    },
    {
        src: "https://source.unsplash.com/random/804x604",
        alt: "random image 5",
    },
    {
        src: "https://source.unsplash.com/random/805x605",
        alt: "random image 6",
    }
]

export default function Projects() {
    return (
        <Box py="10rem">
            <Heading color="secondary" fontWeight="normal" fontSize="12px" letterSpacing="3px" mb="30px">PROJECTS</Heading>
            <Grid templateColumns={["1fr", "1fr 1fr"]} gap="1rem">
                {images.map((image, index) => (
                    <HoverOnImage key={index} {...image} />
                ))}
            </Grid>
        </Box>
    )
}

const HoverOnImage = ({ src, alt }) => {
    return (
        <Box style={{ scrollSnapAlign: 'center' }}>
            <Image
                src={src}
                alt={alt}
                objectFit="cover"
                objectPosition="center"
            />
            <Flex fontSize="14px" letterSpacing="2px" justifyContent="space-between">
                <Text>{alt}</Text>
                <Link href="#">LIVE DEMO</Link>
            </Flex>
        </Box>
    )
}