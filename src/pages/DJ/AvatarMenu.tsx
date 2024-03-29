"use client";

import {
  IconButton,
  Avatar,
  Box,
  Link,
  Image,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { CiBoxes } from "react-icons/ci";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const AvatarMenu = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 60 }}
      height="70px"
      width="full"
      alignItems="center"
      bgGradient={{
        base: "linear(to-r, #0e0725, #5c03bc, #e536ab)",
        md: "unset",
      }}
      borderBottomWidth="1px"
      borderBottomColor="#111"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <Flex w="30%" display={{ base: "flex", md: "none" }}>
        <Box
          aria-label="open menu"
          as="a"
          onClick={onOpen}
          color="#fff"
          cursor="pointer"
        >
          <Icon
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
            color="white"
            _hover={{ width: "30px", height: "30px" }}
            transition="all 0.3s ease-in-out"
          >
            <path
              fill="currentColor"
              d="M0,4c0-.55,.45-1,1-1H18c.55,0,1,.45,1,1s-.45,1-1,1H1c-.55,0-1-.45-1-1Zm18,15H1c-.55,0-1,.45-1,1s.45,1,1,1H18c.55,0,1-.45,1-1s-.45-1-1-1Zm5-8H6c-.55,0-1,.45-1,1s.45,1,1,1H23c.55,0,1-.45,1-1s-.45-1-1-1Z"
            />
          </Icon>
        </Box>
      </Flex>
      <Flex
        w="40%"
        justifyContent="center"
        display={{ base: "flex", md: "none" }}
      >
        <Box as="a" href="/">
          <Image
            id="logo"
            w="120px"
            src="https://media.djfan.app/images/djfan-logo-beta.png"
          />
        </Box>
      </Flex>

      <HStack w={{ base: "30%", md: "100%" }} justifyContent="flex-end">
        <Box
          as="a"
          href="/"
          aria-label="Notifications"
          position={"relative"}
          mr={{ base: "14px", md: "20px" }}
        >
          <Box color={{ base: "#fff", md: "#111" }}>
            <FiBell fontSize={"22px"} />
          </Box>
          <Flex
            bg="red"
            color={"white"}
            position={"absolute"}
            top="-6px"
            right="-6px"
            fontSize={"10px"}
            borderRadius={"50px"}
            justifyContent={"center"}
            alignItems={"center"}
            w="14px"
            h="14px"
            fontWeight={"600"}
          >
            1
          </Flex>
        </Box>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  width="40px"
                  height="40px"
                  border="1px solid #fff"
                  src={
                    "https://files.djfan.app/cache/706eec1f-ea13-41e4-a3f7-fd4dbc98ced2.webp"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Richy Ahmed</Text>
                  <Text fontSize="xs" color="gray.600">
                    Creator
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>View Profile</MenuItem>
              <MenuItem as={Link} href="/settings">
                Settings
              </MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Help & Support</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default AvatarMenu;
