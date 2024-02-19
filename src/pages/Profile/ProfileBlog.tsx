import { Flex, Box } from "@chakra-ui/react";
import PostCardBlog from "./Feed/PostCardBlog";

export default function ProfileBlog() {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      align="center"
      p="0px"
      gap="20px"
      pb="50px"
    >
      <Box width={{ base: "100%", md: "500px" }}>
        <PostCardBlog />
      </Box>
    </Flex>
  );
}
