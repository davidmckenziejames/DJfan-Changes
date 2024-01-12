import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import { FaChevronDown, FaArrowRight, FaHeadphones } from "react-icons/fa";

interface LegalLink {
  path: string;
  label: string;
}

interface LanguageOption {
  code: string;
  label: string;
}

export default function Footer() {
  const legalLinks = [
    { path: "/privacy", label: "Privacy Policy" },
    { path: "/terms-of-use", label: "Terms of Use" },
    { path: "/cookies", label: "Cookie Notice" },
    { path: "/complaints-policy", label: "Complaints Policy" },
    { path: "/dmca", label: "DMCA" },
  ];
  const languageOptions = [
    { code: "🇬🇧", label: "English" },
    { code: "🇪🇸", label: "Español" },
  ];
  return (
    <Flex
      as="footer"
      bg="black"
      gap="10px"
      justifyContent={{ base: "center", md: "space-between" }}
      flexDirection={{ base: "column", md: "row" }}
      py={{ base: "15px" }}
      align="center"
      px={{ base: "10px", md: "50px" }}
      borderTop={"2px solid #fff"}
    >
      <Flex
        align="center"
        maxW="1200px"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Link href="/">
          <Image
            w="130px"
            src="https://files.djfan.app/images/djfan-beta.png"
          />
        </Link>
      </Flex>
      <Flex
        alignItems="center"
        gap={{ base: "10px", md: "10px" }}
        flexDirection={{ base: "column", md: "row" }}
        wrap="nowrap"
      >
        <HStack gap="20px">
          <Menu>
            <MenuButton
              as={Link}
              color="white"
              fontWeight="500"
              fontSize="16px"
            >
              Legal
            </MenuButton>
            <MenuList minW="unset" color="#111111">
              {legalLinks.map((link) => (
                <MenuItem as="a" href={link.path} key={link.path}>
                  {link.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Text ml={{ base: "0px", md: "10px" }} fontSize="sm" color="white">
            &copy; {new Date().getFullYear()} DJfan Ltd. All rights reserved.
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
}
