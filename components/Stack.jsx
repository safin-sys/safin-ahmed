import { Container, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { BackendPanel } from "./BackendPanel";
import { OthersPanel } from "./OthersPanel";
import { FrontendPanel } from "./FrontendPanel";

export default function Stack() {
    return (
        <Container maxW="container.md" my="2rem">
            <Heading fontSize="1.5rem">My Stack</Heading>
            <Tabs isFitted colorScheme="blackAlpha" mt="2rem">
                <TabList>
                    <Tab height="2.5rem" borderRadius="0" fontWeight="bold">Frontend</Tab>
                    <Tab height="2.5rem" borderRadius="0" fontWeight="bold">Backend</Tab>
                    <Tab height="2.5rem" borderRadius="0" fontWeight="bold">Others</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel h={["360px", "280px"]}>
                        <FrontendPanel />
                    </TabPanel>
                    <TabPanel h={["360px", "280px"]}>
                        <BackendPanel />
                    </TabPanel>
                    <TabPanel h={["360px", "280px"]}>
                        <OthersPanel />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}