import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

// Define your content data
const contentTypes = [
  {
    imageUrl:
      "https://djfan.ams3.cdn.digitaloceanspaces.com/2023/06/9370782.png",
    label: "Text Posts",
  },
  {
    imageUrl:
      "https://djfan.ams3.cdn.digitaloceanspaces.com/2023/06/imagetext.png",
    label: "Image Posts",
  },
  {
    imageUrl:
      "https://djfan.ams3.cdn.digitaloceanspaces.com/2023/06/9975051.png",
    label: "Private Content",
  },
  {
    imageUrl:
      "https://djfan.ams3.cdn.digitaloceanspaces.com/2023/06/9370782.png",
    label: "Text Posts",
  },
  {
    imageUrl:
      "https://djfan.ams3.cdn.digitaloceanspaces.com/2023/06/imagetext.png",
    label: "Image Posts",
  },
  {
    imageUrl:
      "https://djfan.ams3.cdn.digitaloceanspaces.com/2023/06/9975051.png",
    label: "Private Content",
  },
  // ... add more content types here if needed
];

export default function ContentTypes() {
  return (
    <Flex bg="black" flexDir="column" alignItems="center" w="100%" py="50px">
      <Heading color="white" textAlign="center">
        What content do DJs post?
      </Heading>
      <Flex mt="30px" gap="20px">
        {contentTypes.map(({ imageUrl, label }) => (
          <VStack key={label} gap="10px" bg="wheat">
            <Image w="50px" src={imageUrl} />
            <Text color="white" fontWeight="600">
              {label}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Flex>
  );
}
