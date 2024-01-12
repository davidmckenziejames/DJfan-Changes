import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

// Define your content data
const contentTypes = [
  {
    imageUrl: "http://media.djfan.app/images/unlock.png",
    title: "Offer Free & Exclusive Content",
  },
  {
    imageUrl: "http://media.djfan.app/images/caption.png",
    title: "Image, Gallery, or Video Posts ",
  },
  {
    imageUrl: "http://media.djfan.app/images/headphone.png",
    title: "Post Tracks, Mixes, or Playlists",
  },
  {
    imageUrl: "http://media.djfan.app/images/upload-1.png",
    title: "Upload Files or Embed Links",
  },

  {
    imageUrl: "http://media.djfan.app/images/message.png",
    title: "Direct & Community Messages",
    description:
      "Unlike slow-paying venues you can pay yourself whenever you want, or receive scheduled auto payments.",
  },
  {
    imageUrl: "http://media.djfan.app/images/music-2.png",
    title: "Publish Tour Schedule",
  },
  {
    imageUrl: "http://media.djfan.app/images/vip.png",
    title: "Manage Guestlist & Backstage",
  },
  {
    imageUrl: "http://media.djfan.app/images/coworking.png",
    title: "Organise Meet & Greets",
  },
  {
    imageUrl: "http://media.djfan.app/images/download-2.png",
    title: "Sell Downloadable Files",
  },
  {
    imageUrl: "http://media.djfan.app/images/merchandise.png",
    title: "Sell Merchandise",
  },
  {
    imageUrl: "http://media.djfan.app/images/tutorial.png",
    title: "Masterclasses & Tutorials",
  },
  {
    imageUrl: "http://media.djfan.app/images/podcast-.png",
    title: "Publish Podcasts",
  },
];

export default function Why() {
  return (
    <Flex
      bg="radial-gradient(circle at 10% 20%, rgb(64, 84, 178) 0%, rgb(219, 2, 234) 90%)"
      flexDir="column"
      alignItems="center"
      w="100%"
      gap="25px"
      py="40px"
    >
      <Heading
        color="white"
        fontSize={{ base: "34px", md: "40px" }}
        textAlign="center"
        lineHeight={{ base: "1.4em", md: "1em" }}
        w={{ base: "90%", md: "100%" }}
      >
        Why can you do?
      </Heading>
      <Flex
        gap="10px"
        justifyContent={{ base: "space-evenly", md: "space-evenly" }}
        w={{ base: "100%", md: "80%" }}
        flexWrap="wrap"
      >
        {contentTypes.map(({ imageUrl, title }) => (
          <HStack
            key={title}
            gap={{ base: "10px", md: "15px" }}
            w={{ base: "80%", md: "32%" }}
            px="10px"
            py="5px"
            bg="#fff"
            color={"#111"}
            rounded={"lg"}
          >
            <Image w={{ base: "25px", md: "30px" }} src={imageUrl} />
            <Text
              fontWeight="600"
              textAlign={"center"}
              lineHeight={{ base: "1em", md: "1em" }}
              fontSize={{ base: "14px", md: "14px" }}
            >
              {title}
            </Text>
          </HStack>
        ))}
      </Flex>
    </Flex>
  );
}
