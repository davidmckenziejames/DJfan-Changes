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
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Heading,
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
import AvatarMenu from "./AvatarMenu";
import DashProfile from "./DashProfile";
import SidebarContent from "./SidebarMenu";
import Conversations from "./Inbox/Conversations";
import Messages from "./Inbox/Messages";

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

const DMchat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w="100%"
      flexWrap={"wrap"}
      bg="darkblue"
      minH="100vh"
      justifyContent="flex-start"
    >
      <Heading w="100%">Direct Messages</Heading>

      <Flex flexDirection={"column"} h="100%" w="30%">
        <Conversations />
      </Flex>
      <Flex flexDirection={"column"} h="100%" w="70%" bg="gray">
        <Heading>Hi</Heading>
      </Flex>
    </Flex>
  );
};

export default DMchat;
