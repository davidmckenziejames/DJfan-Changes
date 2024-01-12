import { Flex, Text, Stack, Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import CreateAccount from "./HeaderComponents/CreateAccount";
import Booking from "./Booking";

export default function Features() {
  return (
    <Box py="10px">
      <Flex flexDir="column" id="demo" align="center" gap="20px" py="40px">
        <Heading
          fontSize={{ base: "28px", md: "40px" }}
          w={{ base: "90%", md: "80%" }}
          textAlign="center"
          lineHeight="1.2em"
        >
          Book a Demo
        </Heading>
        <Booking />
        <Text
          marginTop={"-20px"}
          fontWeight={"600"}
          fontSize={{ base: "18px", md: "20px" }}
          w={{ base: "90%", md: "80%" }}
          textAlign="center"
          lineHeight="1.2em"
        >
          or
        </Text>
        <CreateAccount />
      </Flex>
    </Box>
  );
}
