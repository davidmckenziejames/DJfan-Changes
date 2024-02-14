import {
  Flex,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
} from "@chakra-ui/react";
import ProductCard from "./Feed/ProductCard";
import DownloadCard from "../Billing/DownloadCard";
import FileCard from "./Feed/FileCard";

export default function ProfileEvents() {
  return (
    <VStack w="100%" p="10px" pt="5px" pb="50px" overflow="hidden">
      <Tabs id="product-tabs" w={{ base: "100%", md: "70%" }} isFitted>
        <TabList m="-15px" id="product-tab-list">
          <Tab>Tracks</Tab>
          <Tab>Downloads</Tab>
          <Tab>Podcasts</Tab>
          <Tab>Merch</Tab>
        </TabList>

        <TabPanels pt="15px" id="product-tab-panels">
          <TabPanel>
            <VStack gap="20px">
              <ProductCard />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack gap="20px">
              <FileCard />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack gap="20px">
              <Flex
                color="#fff"
                borderRadius="10px"
                w="100%"
                justify="center"
                fontWeight="600"
                fontSize="22px"
                py="50px"
                bgImage="http://media.djfan.app/images/bg-merch.jpg"
                bgPosition={"center"}
                bgRepeat="no-repeat"
                bgSize="cover"
              >
                COMING SOON!
              </Flex>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}
