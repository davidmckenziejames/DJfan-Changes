import { Flex, Text, Stack, Box, Heading } from "@chakra-ui/react";
import { FaHeadphones } from "react-icons/fa";

export default function Top() {
  return (
    <Flex flexDir="column" align="center" bg="#6243c1" py="10px">
      <Heading
        color="#fff"
        display="flex"
        alignItems="center"
        fontSize={{ base: "14px" }}
        fontWeight="600"
        lineHeight="1em"
        gap="5px"
      >
        <FaHeadphones />
        Membership solution built specifically for DJs
      </Heading>
    </Flex>
  );
}
