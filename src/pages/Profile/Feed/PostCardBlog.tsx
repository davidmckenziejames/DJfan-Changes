import {
  Flex,
  Box,
  useColorModeValue,
  Text,
  Image,
  MenuItem,
  Stack,
  Heading,
  HStack,
} from "@chakra-ui/react";

export default function PostCardBlog() {
  return (
    <Flex
      overflow="hidden"
      flexDirection="column"
      border="2px solid black"
      borderRadius="15px"
    >
      <Flex position="relative">
        <Image
          w={"100%"}
          h="200px"
          objectFit="cover"
          src={
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
          alt="Example"
        />
        <Text
          position="absolute"
          bg="#7d5aeb"
          color="#ffffff"
          textTransform="uppercase"
          fontWeight="700"
          fontSize="16px"
          lineHeight="1em"
          top="10px"
          right="10px"
          px="8px"
          py="5px"
          borderRadius="10px"
        >
          CAREER
        </Text>
      </Flex>

      <Stack px="20px" py="20px">
        <Heading
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          HOW TO MARKET YOURSELF AS A DJ
        </Heading>
        <Text color={"gray.500"}>
          Learn how to boost your gig bookings, increase awareness of your DJ
          brand, and of course, make more money.
        </Text>
        <Text color="#7d5aeb" fontWeight="600">
          Read More
        </Text>
      </Stack>
    </Flex>
  );
}
