import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Drawer,
  DrawerContent,
  useDisclosure,
  FlexProps,
  BoxProps,
  useColorModeValue,
} from "@chakra-ui/react";

import { IconType } from "react-icons";
import FanSidebar from "../pages/DJ/FanSidebar";
import AvatarMenu from "../pages/DJ/AvatarMenu";
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

export default function Layout({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      overflow={"hidden"}
      flexDirection={"column"}
      minH="100vh"
      h={"100%"}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <FanSidebar
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
          <FanSidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <AvatarMenu onOpen={onOpen} />
      <Flex flexGrow={1} ml={{ base: 0, md: 60 }}>
        {children}
      </Flex>
    </Flex>
  );
}
