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
import FooterIcons from "./FooterIcons";
import ListGuest from "./Guestlist";

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

const ManageEvents = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" w="100%" flexDirection={"column"}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <Flex position={"fixed"} width={"100%"} zIndex={10}>
        <AvatarMenu onOpen={onOpen} />
      </Flex>
      <Flex ml={{ base: 0, md: 60 }}>
        <Box mt="80px">
          <ListGuest />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ManageEvents;
