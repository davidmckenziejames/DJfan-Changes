import { Flex, Button, Box } from "@chakra-ui/react";
import PostCardImageOffline from "./Posts/PostCardImageOffline";
import PostCardImageOfflineVIP from "./Posts/PostCardImageOfflineVIP";
import PostCardImageOfflineGold from "./Posts/PostCardImageOfflineGold";
import PostCardVideoOffline from "./Posts/PostCardVideoOffline";
import Player from "../DJ/Player";
import PostCardAudio from "../Profile/Feed/PostCardAudio";
import PostCardAudioOffline from "./Posts/PostCardAudioOffline";

export default function ProfilePostsOffline() {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      align="center"
      p="0px"
      gap="30px"
      pb="100px"
    >
      <Box width={{ base: "100%", md: "500px" }}>
        <PostCardVideoOffline />
      </Box>
      <Box width={{ base: "100%", md: "500px" }}>
        <PostCardAudioOffline />
      </Box>
      <Box width={{ base: "100%", md: "500px" }}>
        <PostCardImageOffline />
      </Box>
      <Box width={{ base: "100%", md: "500px" }}>
        <PostCardImageOfflineVIP />
      </Box>
    </Flex>
  );
}
