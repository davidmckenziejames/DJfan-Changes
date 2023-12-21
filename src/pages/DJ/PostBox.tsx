import React, { useState } from "react";
import {
  Box,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  useColorModeValue,
  Flex,
  Textarea,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Checkbox,
  HStack,
  Text,
  Select,
  Icon,
  VStack,
  useMediaQuery,
  position,
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaEdit,
  FaImages,
  FaLink,
  FaVideo,
  FaCalendar,
  FaMusic,
  FaVoteYea,
  FaShoppingBasket,
  FaStream,
  FaBackspace,
  FaBackward,
  FaChevronCircleLeft,
} from "react-icons/fa";
import AudioPostBox from "./PostBox/AudioPostBox";
import VideoPostBox from "./PostBox/VideoPostBox";
import LinkPostBox from "./PostBox/LinkPostBox";
import ImagePostBox from "./PostBox/ImagePostBox";
import TextPostBox from "./PostBox/TextPostBox";
import CreateEvent from "./PostBox/Tabs/Event";
import Product from "../Product/Product";
import ProductTab from "./PostBox/Tabs/ProductTab";
import { FiMenu, FiXCircle } from "react-icons/fi";

const iconSelect = {
  alignItems: "center",
  m: "10px",
  fontWeight: "500",
  justifyContent: "center",
  gap: "10px",
  color: "#494949",
  _hover: {
    color: "#7d5aeb",
    cursor: "pointer",
  },
  //w: "20%",
  fontSize: { base: "14px", md: "16px" },

  lineHeight: "1em",
};

const PostBox = () => {
  // State to control the displayed component
  const [contentComponent, setContentComponent] =
    useState<React.ReactNode | null>(null);

  const handleOptionClick = (component: string) => {
    setContentComponent(component);
  };

  const resetContentComponent = () => setContentComponent(null);

  const renderContentComponent = () => {
    switch (contentComponent) {
      case "audio":
        return <AudioPostBox />;
      case "link":
        return <LinkPostBox />;
      case "image":
        return <ImagePostBox />;
      case "video":
        return <VideoPostBox />;
      case "text":
        return <TextPostBox />;
      default:
        return null;
    }
  };

  const [showOptions, setShowOptions] = useState(true);
  const [isLargerThan800] = useMediaQuery("(min-width: 1000px)");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const [activeTab, setActiveTab] = useState(0);
  const [hoverTab, setHoverTab] = useState<number | null>(null);
  const tabs = [
    { component: FaEdit, label: "New Post" },
    { component: FaShoppingBasket, label: "Create Product" },
    { component: FaCalendar, label: "Add Event" },
    { component: FaVideo, label: "Live Stream", disabled: true },
  ];

  return (
    <VStack w="100%" pt="25px">
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        borderColor={borderColor}
        py="0px"
        width="90%"
        maxW="600px"
      >
        <Tabs
          isLazy
          variant="enclosed"
          onChange={(index) => setActiveTab(index)}
        >
          <TabList>
            {tabs.map(({ component, label, disabled }, index) => (
              <Tab
                _selected={{
                  color: "#7d5aeb",
                  borderColor: "gray.200",
                  borderBottom: "1px solid #fff",
                }}
                gap="6px"
                fontWeight={"500"}
                fontSize={"16px"}
                isDisabled={disabled}
                onMouseEnter={() => setHoverTab(index)}
                onMouseLeave={() => setHoverTab(null)}
              >
                <Icon as={component} fontSize={"18px"} />

                {(isLargerThan800 || index === activeTab) && label}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <Flex w="100%" flexDir={"column"}>
                {contentComponent && (
                  <Flex position={"absolute"} top={0} right={0}>
                    <Menu>
                      <MenuButton
                        as={Box}
                        pr="10px"
                        pt="8px"
                        aria-label="Options"
                      >
                        <FiMenu fontSize={"24px"} />
                      </MenuButton>
                      <MenuList>
                        <MenuItem onClick={resetContentComponent}>
                          Change Post Type
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                )}
                {!contentComponent && (
                  <Flex
                    flexDirection={"column"}
                    id="options"
                    alignItems={"center"}
                    w="100%"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="10px"
                    py="10px"
                  >
                    <Text
                      w={"100%"}
                      fontSize={{ base: "16px", md: "18px" }}
                      textAlign={"center"}
                      fontWeight={"500"}
                      mb="10px"
                    >
                      Select a post type
                    </Text>
                    <Flex
                      justify={{ base: "center", sm: "space-evenly" }}
                      wrap="wrap"
                      w={{ base: "60%", sm: "80%", md: "100%" }}
                    >
                      <VStack
                        {...iconSelect}
                        onClick={() => handleOptionClick("image")}
                      >
                        <FaImages size="1.2em" />
                        <Text>Image</Text>
                      </VStack>

                      <VStack
                        {...iconSelect}
                        onClick={() => handleOptionClick("video")}
                      >
                        <FaVideo size="1.2em" />
                        <Text>Video</Text>
                      </VStack>

                      <VStack
                        {...iconSelect}
                        onClick={() => handleOptionClick("audio")}
                      >
                        <FaMusic size="1.2em" />
                        <Text>Audio</Text>
                      </VStack>

                      <VStack
                        {...iconSelect}
                        onClick={() => handleOptionClick("link")}
                      >
                        <FaLink size="1.2em" />
                        <Text>Link </Text>
                      </VStack>

                      <VStack
                        {...iconSelect}
                        onClick={() => handleOptionClick("text")}
                      >
                        <FaCalendar size="1.2em" />
                        <Text>Text</Text>
                      </VStack>
                    </Flex>
                  </Flex>
                )}
                {renderContentComponent()}
              </Flex>
            </TabPanel>
            <TabPanel>
              <ProductTab />
            </TabPanel>
            <TabPanel>
              <CreateEvent />
            </TabPanel>
            <TabPanel>
              <Box>Hello</Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </VStack>
  );
};

export default PostBox;
