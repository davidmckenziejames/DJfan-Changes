import {
  Button,
  Box,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  HStack,
  Th,
  Thead,
  Text,
  Tabs,
  TabList,
  Link,
  TabPanels,
  Tab,
  TabPanel,
  Tr,
} from "@chakra-ui/react";
import DownloadCard from "./DownloadCard";
import Download2 from "./Download2";
import Header from "../Home/Sections/Header";
import Subscriptions from "./Subscriptions";
import SubCards from "./SubCards";
import Layout from "../../layout/Layout";

export default function Billing() {
  return (
    <Layout>
      <Flex
        alignItems="center"
        w="100%"
        flexDir={"column"}
        justifyContent="center"
      >
        <Tabs variant="unstyled" align="center" w="100%">
          <Box bg="gray.100" px="10px" py="10px" mb="10px">
            <TabList>
              <Tab>Purchases</Tab>

              <Tab>Memberships</Tab>
              <Tab>Billing History</Tab>
            </TabList>
          </Box>
          <TabPanels>
            <TabPanel>
              <HStack
                justifyContent={"center"}
                maxW="1000px"
                gap="30px"
                wrap={"wrap"}
              >
                <DownloadCard />
                <Download2 />
              </HStack>
            </TabPanel>

            <TabPanel>
              <SubCards />
            </TabPanel>
            <TabPanel>
              <Flex maxW="1000px">
                <Subscriptions />
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Layout>
  );
}
