import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Avatars from "./Avatars";
import CreateAccount from "./HeaderComponents/CreateAccount";

export default function Hero() {
  return (
    <Box
      w="100%"
      backgroundImage="url(https://djfan.ams3.cdn.digitaloceanspaces.com/2023/07/bg-dj.jpg)"
      display="flex"
      justifyContent="center"
      px={{ base: "15px", md: "10px" }}
      py={{ base: "30px", md: "50px" }}
    >
      <Flex maxW={{ base: "100%", md: "1024px" }} alignItems="center">
        <VStack w={"100%"} gap="20px">
          <Heading
            color="white"
            fontSize={{ base: "46px", md: "58px" }}
            lineHeight="1.1em"
            maxW={{ base: "100%", md: "90%" }}
            textAlign={"center"}
          >
            Increase your income by rewarding your{" "}
            <Text
              bgGradient="linear(to-l, #5bffec, #f480ff)"
              bgClip="text"
              as="span"
            >
              top fans
            </Text>
            .
          </Heading>

          <Text
            color="white"
            fontWeight="500"
            fontSize={{ base: "20px", md: "24px" }}
            maxW={{ base: "100%", md: "90%" }}
            textAlign={"center"}
          >
            We provide a membership platform for DJs where they can connect and
            engage with their fans and access to tools generate a consistent
            passive income.
          </Text>
          <Box mb={{ base: "20px", md: "24px" }}>
            <CreateAccount />
          </Box>
          <Avatars />
        </VStack>
      </Flex>
    </Box>
  );
}
