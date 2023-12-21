"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  Image,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  Heading,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import Layout from "../../layout/Layout";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const FanGuestlists = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <Flex
        bg="gray.200"
        mx="auto"
        w="100%"
        py="0px"
        px="0px"
        flexDirection="column"
        align="center"
        flexGrow={1}
      >
        <Flex
          bg="#fff"
          m="20px"
          flexDirection={"column"}
          w={"500px"}
          borderRadius="10px"
          p="25px"
        >
          <Heading pb="10px" fontSize="20">
            Guestlists
          </Heading>
          <Flex flexDirection={"column"}>
            <Tabs>
              <TabList p={"0"}>
                <Tab>Upcoming</Tab>
                <Tab>Past</Tab>
                <Tab>Requested</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Box
                    border="1px"
                    bg="white"
                    borderColor="gray.200"
                    borderRadius="md"
                    w="full"
                  >
                    <Flex
                      flexWrap="wrap"
                      alignItems="center"
                      width="100%"
                      height="100%"
                      borderRadius={"md"}
                      overflow={"hidden"}
                    >
                      <Flex width="40%">
                        <Image
                          minH="130px"
                          objectFit="cover"
                          src="https://imgproxy.ra.co/_/w:1000/rt:fill/enlarge:true/quality:50/h:563/aHR0cHM6Ly9pbWFnZXMucmEuY28vY2FlNDZlNDkyMWYzYzhkYjFmNjliMTViNDRhZmVhMWViYzJiMmRmNS5qcGc="
                        />
                      </Flex>
                      <Flex width="60%" flexDirection="column" px="15px">
                        <HStack mb="10px">
                          <Avatar
                            name="Dan Abrahmov"
                            src="https://files.djfan.app/cache/706eec1f-ea13-41e4-a3f7-fd4dbc98ced2.webp"
                            boxSize={"25px"}
                          />
                          <Text fontSize={"16px"} fontWeight={"600"}>
                            Richy Ahmed
                          </Text>
                        </HStack>

                        <Text fontSize="16px">Kaluki LDN</Text>

                        <HStack gap="15px" fontSize="14px">
                          <Text color="gray.500">London</Text>
                          <Text color="gray.500">London East</Text>
                        </HStack>
                        <Text fontSize="14px" color="gray.500">
                          2022-03-01
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default FanGuestlists;
