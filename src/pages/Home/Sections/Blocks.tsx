import { Flex, Text, Stack, Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import CreateAccount from "./HeaderComponents/CreateAccount";
import Booking from "./Booking";

export default function Blocks() {
  return (
    <Flex flexDir="column" align="center">
      <Flex flexDirection="row" w="100%">
        <Flex
          flexDirection="column"
          w="50%"
          bgImage="url(https://images.unsplash.com/photo-1661966522340-a51f578e4017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)"
          bgPosition={"center"}
          bgSize={"cover"}
          h="400px"
        ></Flex>
        <Flex flexDirection="column" w="50%">
          <Heading
            fontSize={{ base: "28px", md: "40px" }}
            w={{ base: "90%", md: "80%" }}
            textAlign="center"
            lineHeight="1.2em"
          >
            Book a Demo
          </Heading>
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
        </Flex>
      </Flex>
    </Flex>
  );
}
