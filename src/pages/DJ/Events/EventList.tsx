import { VStack, Text } from "@chakra-ui/react";
import { EventPostCard, Post } from "./EventPostCard"; // Correct path

type EventListProps = {
  posts: Post[];
};

const EventList = ({ posts }: EventListProps) => (
  <>
    <VStack spacing={4} p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Manage Events
      </Text>
      {posts.map((post) => (
        // Assuming each post has a unique title, otherwise use a proper unique id
        <EventPostCard key={post.title} post={post} />
      ))}
    </VStack>
  </>
);

export default EventList;
