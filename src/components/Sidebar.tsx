import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Stack,
  HStack,
  Avatar,
  Heading,
  Divider,
  Link,
} from "@chakra-ui/react";

import {
  FiHome,
  FiSettings,
  FiHeadphones,
  FiHeart,
  FiUserCheck,
} from "react-icons/fi";
import { IconType } from "react-icons";

import SidebarUser from "./SidebarUser";
import HeaderSearch from "./HeaderSearch";

interface NavItemProps {
  href: string;
  icon: IconType;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label }) => (
  <Link href={href} style={{ textDecoration: "none" }}>
    <Button
      leftIcon={<Box as={icon} />}
      minW="120px"
      width="100%"
      justifyContent="flex-start"
      bgColor="transparent"
      color="white"
      fontWeight="normal"
      _hover={{
        bgColor: "gray.700",
      }}
    >
      {label}
    </Button>
  </Link>
);

const navItems: NavItemProps[] = [
  { href: "/feed", icon: FiHome, label: "Feed" },
  { href: "/explore", icon: FiHeadphones, label: "Explore Creators" },
  { href: "/explore", icon: FiUserCheck, label: "Following" },
  { href: "/subscriptions", icon: FiHeart, label: "Subscriptions" },
  { href: "/settings", icon: FiSettings, label: "Settings" },
];

interface User {
  display_name: string;
  profile_picture: string;
}

interface SidebarProps {
  onClose: () => void;
  display?: any; // Define the correct type for 'display'
}

export default function Sidebar({ onClose, display, ...rest }: SidebarProps) {
  return (
    <Box
      transition="3s ease"
      bg="black"
      borderRight="1px"
      borderRightColor="gray.200"
      width={{ base: "full", md: 60 }}
      pos="fixed"
      h="100%"
      {...rest}
    >
      <Flex
        direction="column"
        transition="3s ease"
        bg="black"
        borderRight="1px"
        borderRightColor="gray.200"
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="100%"
        display={display}
      >
        <Flex
          id="top-sidebar"
          h="50%"
          alignItems="center"
          m="0"
          justifyContent="flex-start"
          flexDirection="column"
        >
          <Flex
            h="80px"
            w="full"
            display={{ base: "none", md: "flex" }}
            justifyContent="start"
            align="start"
            flexDirection="row"
            px="25px"
          >
            <Image
              src="https://files.djfan.app/images/djfan-beta.png"
              alt="DJfan Logo"
              width="100px"
              py="20px"
            />
          </Flex>
          <Flex
            display={{ base: "flex", md: "none" }}
            justifyContent="flex-end"
            w="full"
            px="3"
            py="3"
          >
            <CloseButton color="white" onClick={onClose} />
          </Flex>
          <Divider />

          <Flex
            flexDirection="column"
            mt="5px"
            gap="5px"
            w="full"
            justify="center"
            align="center"
          >
            <Box
              display={{ base: "flex", md: "none" }}
              px="25px"
              pt={{ base: "20px", md: "0" }}
            >
              <HeaderSearch />
            </Box>
            <Flex
              flexDirection="column"
              mt="5"
              w="full"
              px="5"
              gap="10px"
              justifyContent="center"
            >
              {navItems.map((navItem, index) => (
                <NavItem key={index} {...navItem} />
              ))}
            </Flex>
          </Flex>
        </Flex>

        <Flex flexDirection="column" gap="10px" px="20px" height="50%">
          <Heading color="white" fontSize="16px" fontWeight="600">
            My Subscriptions
          </Heading>
          <Flex
            direction="column"
            gap="10px"
            w="full"
            maxH="250px"
            overflowY="auto"
          ></Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
