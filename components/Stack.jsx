import { Container, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FrontendPanel } from "./FrontendPanel";

export default function Stack() {
    return (
        <Container maxW="container.md" my="2rem">
            <Heading fontSize="1.5rem">My Stack</Heading>
            <Tabs isFitted variant="enclosed" mt="2rem">
                <TabList>
                    <Tab>Frontend</Tab>
                    <Tab>Backend</Tab>
                    <Tab>Deployment &amp; More</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <FrontendPanel />
                    </TabPanel>
                    <TabPanel>
                    </TabPanel>
                    <TabPanel>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}