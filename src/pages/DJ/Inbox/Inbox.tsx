import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  Grid,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  DrawerCloseButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import { FiSearch } from "react-icons/fi";
import { MdChevronLeft } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import {
  MdOutlineCardTravel,
  MdOutlineLightbulb,
  MdOutlineMoreVert,
  MdOutlinePerson,
  MdOutlineSettings,
} from "react-icons/md";
// Custom components
import Messages from "./Messages";
import ChatHeader from "./ChatHeader";
// import Conversations from 'views/admin/main/others/messages/components/Conversations';

export default function Inbox() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const searchIconColor = useColorModeValue("gray.700", "white");
  const inputText = useColorModeValue("gray.700", "gray.100");
  const blockBg = useColorModeValue("secondaryGray.300", "navy.700");
  const brandButton = useColorModeValue("brand.500", "brand.400");
  // Ellipsis modals
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  // Chakra Color Mode
  const textHover = useColorModeValue(
    { color: "secondaryGray.900", bg: "unset" },
    { color: "secondaryGray.500", bg: "unset" }
  );
  const bgList = useColorModeValue("white", "whiteAlpha.100");
  const bgShadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  let sidebarBackgroundColor = useColorModeValue("white", "navy.800");
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Chakra Color Mode
  return (
    <Grid
      display={{ base: "block", md: "grid" }}
      pt={{ base: "130px", md: "80px", xl: "80px" }}
      gridTemplateColumns={{ base: "1.5fr 1.83fr", lg: "1fr 1.83fr" }}
      gap={{ base: "20px", xl: "20px" }}
      minH="100vh"
    >
      <Flex p="0px" px="20px" pt="20px" pb="40px">
        {/* <Conversations onOpenMessages={onOpen} /> */}
        <Box>
          <Box>
            <Flex mb="15px" align="center" justify="space-between">
              <Text color={textColor} fontSize="xl" fontWeight="700">
                Your Chats
              </Text>
              <Menu isOpen={isOpen1} onClose={onClose1}>
                <MenuButton onClick={onOpen1} mb="0px">
                  <Icon
                    mb="-6px"
                    cursor="pointer"
                    as={MdOutlineMoreVert}
                    color={textColor}
                    maxW="min-content"
                    maxH="min-content"
                    w="24px"
                    h="24px"
                  />
                </MenuButton>
                <MenuList
                  w="150px"
                  minW="unset"
                  maxW="150px !important"
                  border="transparent"
                  backdropFilter="blur(63px)"
                  bg={bgList}
                  boxShadow={bgShadow}
                  borderRadius="20px"
                  p="15px"
                >
                  <MenuItem
                    transition="0.2s linear"
                    color={textColor}
                    _hover={textHover}
                    p="0px"
                    borderRadius="8px"
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb="10px"
                  >
                    <Flex align="center">
                      <Icon as={MdOutlinePerson} h="16px" w="16px" me="8px" />
                      <Text fontSize="sm" fontWeight="400">
                        Panel 1
                      </Text>
                    </Flex>
                  </MenuItem>
                  <MenuItem
                    transition="0.2s linear"
                    p="0px"
                    borderRadius="8px"
                    color={textColor}
                    _hover={textHover}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb="10px"
                  >
                    <Flex align="center">
                      <Icon
                        as={MdOutlineCardTravel}
                        h="16px"
                        w="16px"
                        me="8px"
                      />
                      <Text fontSize="sm" fontWeight="400">
                        Panel 2
                      </Text>
                    </Flex>
                  </MenuItem>
                  <MenuItem
                    transition="0.2s linear"
                    p="0px"
                    borderRadius="8px"
                    color={textColor}
                    _hover={textHover}
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    mb="10px"
                  >
                    <Flex align="center">
                      <Icon
                        as={MdOutlineLightbulb}
                        h="16px"
                        w="16px"
                        me="8px"
                      />
                      <Text fontSize="sm" fontWeight="400">
                        Panel 3
                      </Text>
                    </Flex>
                  </MenuItem>
                  <MenuItem
                    transition="0.2s linear"
                    color={textColor}
                    _hover={textHover}
                    p="0px"
                    borderRadius="8px"
                    _active={{
                      bg: "transparent",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                  >
                    <Flex align="center">
                      <Icon as={MdOutlineSettings} h="16px" w="16px" me="8px" />
                      <Text fontSize="sm" fontWeight="400">
                        Panel 4
                      </Text>
                    </Flex>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Flex align="center" w="calc(100%)" bottom="20px">
              <InputGroup me="10px" w={{ base: "100%" }}>
                <InputLeftElement
                  zIndex="1"
                  children={
                    <IconButton
                      aria-label="iconbutton"
                      bg="inherit"
                      borderRadius="inherit"
                      _hover={{ bg: "none" }}
                      _active={{
                        bg: "inherit",
                        transform: "none",
                        borderColor: "transparent",
                      }}
                      _focus={{
                        boxShadow: "none",
                      }}
                      icon={
                        <Icon
                          as={FiSearch}
                          color={searchIconColor}
                          w="15px"
                          h="15px"
                        />
                      }
                    />
                  }
                />
                <Input
                  variant="search"
                  fontSize="sm"
                  pl="35px !important"
                  h="40px"
                  bg={blockBg}
                  color={inputText}
                  fontWeight="500"
                  _placeholder={{ color: "gray.400", fontSize: "14px" }}
                  borderRadius={"50px"}
                  placeholder={"Search"}
                />
              </InputGroup>
              <Button
                borderRadius="50%"
                ms={{ base: "14px", md: "auto" }}
                bg={brandButton}
                w={{ base: "35px", md: "40px" }}
                h={{ base: "35px", md: "40px" }}
                minW={{ base: "35px", md: "40px" }}
                minH={{ base: "35px", md: "40px" }}
                variant="no-hover"
              >
                <Icon
                  as={FaRegEdit}
                  color="white"
                  w={{ base: "16px", md: "16px" }}
                  h={{ base: "16px", md: "16px" }}
                />
              </Button>
            </Flex>
          </Box>
          <Box>
            <ChatHeader
              name="Roberto Michael"
              lastMessage="Hi there, How are you? All good?"
              sum="-$15.50"
              avatar=""
              hour="09:00 PM"
            />
          </Box>
          <Box>
            <ChatHeader
              name="Emily James"
              lastMessage="Be careful, it’s raining outside! :)"
              sum="-$15.50"
              avatar=""
              hour="08:45 PM"
            />
          </Box>
        </Box>
      </Flex>
      <Flex display={{ base: "none", md: "flex" }} h="100%" px="0px">
        <Messages status="active" name="Roberto Michael" />
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent
          w="100%"
          maxW="calc(100vw - 32px)"
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          borderRadius="16px"
          bg={sidebarBackgroundColor}
        >
          <DrawerCloseButton
            boxShadow="unset !important"
            _hover={{ bg: "transparent" }}
            left="0px !important"
            top="18px"
            color="secondaryGray.700"
          >
            <Icon
              as={MdChevronLeft}
              color={searchIconColor}
              w="28px"
              h="28px"
            />
          </DrawerCloseButton>
          <DrawerBody px="0px">
            <Messages status="active" name="Roberto Michael" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Grid>
  );
}
