import {
  Avatar,
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import Layout from "../../layout/Layout";
export default function NotificationsPage() {
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
          <Heading pb="20px" fontSize="20">
            Notifications
          </Heading>
          <Flex flexDirection={"column"}>
            <HStack>
              <Avatar
                name="Dan Abrahmov"
                src="https://djarchive.websitestaging.co/wp-content/uploads/jet-engine-forms/175/2023/05/WhatsApp-Image-2023-05-20-at-17.39.37.jpeg"
              />
              <Box>
                <Text fontSize={"15px"}>
                  Richy Ahmed has given you guestlist for{" "}
                  <Link fontWeight={"bold"} color={"blue.500"}>
                    Paradise Ibiza
                  </Link>
                </Text>
                <Text fontSize={"13px"}>2 days ago</Text>
              </Box>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
