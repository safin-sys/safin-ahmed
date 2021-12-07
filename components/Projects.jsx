import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Heading, Link } from "@chakra-ui/layout";

export default function Projects({ projects }) {
    return (
        <Box py="10rem">
            <Heading color="secondary" fontWeight="normal" fontSize="12px" letterSpacing="3px" mb="30px">PROJECTS</Heading>
            <Grid templateColumns={["1fr", "1fr 1fr"]} gap="1.5rem 1rem">
                {projects.map((project, index) => (
                    <HoverOnImage key={index} {...project} />
                ))}
            </Grid>
        </Box>
    )
}

const HoverOnImage = ({ name, homepage, html_url, default_branch }) => {
    return (
        <Box style={{ scrollSnapAlign: 'center' }}>
            <Image
                src={`https://raw.githubusercontent.com/safin-sys/${name}/${default_branch}/logo.png`}
                alt={name}
                objectFit="cover"
                objectPosition="center"
                w="100%"
                h="300px"
                border="1px solid #a8a8a8"
            />
            <Flex fontSize="14px" letterSpacing="2px" justifyContent="space-between">
                <Link href={html_url} target="_blank" rel="noopener noreferrer">{name}</Link>
                <Box>
                    <Link href={html_url} target="_blank" rel="noopener noreferrer">github</Link>
                    <span>/</span>
                    <Link href={homepage} target="_blank" rel="noopener noreferrer">live demo</Link>
                </Box>
            </Flex>
        </Box>
    )
}