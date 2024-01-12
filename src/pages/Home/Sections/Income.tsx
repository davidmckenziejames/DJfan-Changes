import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

// Define your content data
const contentTypes = [
  {
    imageUrl: "http://media.djfan.app/images/exchange-rate.png",
    label: "Content Memberships",
  },
  {
    imageUrl: "http://media.djfan.app/images/download-2.png",
    label: "Digital Downloads",
  },
  {
    imageUrl: "http://media.djfan.app/images/merchandise.png",
    label: "Merchandise Sales",
  },
  {
    imageUrl: "http://media.djfan.app/images/message.png",
    label: "Direct Messaging",
  },
  {
    imageUrl: "http://media.djfan.app/images/commission.png",
    label: "Refer other DJs",
  },
];

export default function Income() {
  return (
    <Flex
      bg="black"
      flexDir="column"
      alignItems="center"
      w="100%"
      gap="15px"
      py="50px"
    >
      <Heading
        color="white"
        fontSize={{ base: "34px", md: "40px" }}
        textAlign="center"
        lineHeight={{ base: "1.4em", md: "1em" }}
        w={{ base: "90%", md: "100%" }}
      >
        How you can generate income?
      </Heading>
      <Flex
        mt="30px"
        gap={{ base: "30px", md: "0" }}
        justifyContent={{ base: "center", md: "space-between" }}
        w="80%"
        flexWrap="wrap"
      >
        {contentTypes.map(({ imageUrl, label }) => (
          <VStack
            key={label}
            gap={{ base: "15px", md: "20px" }}
            w={{ base: "45%", md: "20%" }}
          >
            <Image w={{ base: "60px", md: "80px" }} src={imageUrl} />
            <Text
              color="white"
              fontWeight="600"
              textAlign={"center"}
              lineHeight={{ base: "1.4em", md: "1em" }}
              fontSize={{ base: "20px", md: "20px" }}
            >
              {label}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Flex>
  );
}
