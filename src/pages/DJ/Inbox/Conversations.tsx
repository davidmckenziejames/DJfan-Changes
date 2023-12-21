// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import ChatHeader from "./ChatHeader";
import React from "react";
// Assets
import { FiSearch } from "react-icons/fi";
import {
  MdOutlineCardTravel,
  MdOutlineLightbulb,
  MdOutlineMoreVert,
  MdOutlinePerson,
  MdOutlineSettings,
} from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
// Assets

export default function Conversations() {
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
  return (
    <Flex
      bg="pink"
      h="100%"
      flexDirection={"column"}
      borderRight={"1px solid #111"}
      gap="10px"
    >
      <ChatHeader
        name="Roberto Michael"
        lastMessage="Hi there, How are you? All good?"
        sum="-$15.50"
        avatar=""
        hour="09:00 PM"
      />
      <ChatHeader
        name="Emily James"
        lastMessage="Be careful, it’s raining outside! :)"
        sum="-$15.50"
        avatar=""
        hour="08:45 PM"
      />
    </Flex>
  );
}
