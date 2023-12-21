import { Box, Flex, Text, HStack, Image } from "@chakra-ui/react";
import ManageGuestlistButton from "./ManageGuestlistButton";
import EditEventButton from "./EditEventButton";

export type Post = {
  title: string;
  eventLocation: string;
  date: string;
  eventVenue: string;
};

type EventPostCardProps = {
  post: Post;
};

export const EventPostCard = ({ post }: EventPostCardProps) => {
  return (
    <Box
      border="1px"
      bg="white"
      borderColor="gray.200"
      borderRadius="md"
      w="full"
    >
      <Flex flexWrap="wrap" alignItems="center" width="100%" height="100%">
        <Flex width="40%">
          <Image
            minH="150px"
            maxH="150px"
            w="100%"
            objectFit="cover"
            src="https://djfan.ams3.digitaloceanspaces.com/djfanuploads2023/6488722d52275.png"
          />
        </Flex>
        <Flex width="60%" flexDirection="column" px="15px">
          <Text fontSize="14px" color="gray.500">
            {post.date}
          </Text>
          <Text fontSize="18px">{post.title}</Text>

          <HStack gap="15px" fontSize="15px">
            <Text color="gray.500">{post.eventVenue}</Text>
            <Text color="gray.500">{post.eventLocation}</Text>
          </HStack>
          <HStack gap="15px" pt="10px">
            <ManageGuestlistButton />
            <EditEventButton />
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};
