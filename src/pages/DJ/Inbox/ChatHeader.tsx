// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { HSeparator } from "./Separator";
export default function ChatHeader(props: {
  lastMessage: string;
  sum: string | number;
  avatar: string;
  name: string;
  hour: string | number;
  last?: boolean;
  [x: string]: any;
}) {
  const { lastMessage, sum, avatar, name, hour, last, ...rest } = props;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("secondaryGray.400", "whiteAlpha.100");

  let newLastMessage = lastMessage.slice(0, 20);
  newLastMessage = newLastMessage.concat("...");
  return (
    <Box>
      <Flex
        cursor="pointer"
        justifyContent="center"
        alignItems={"center"}
        w="100%"
        {...rest}
      >
        <Avatar
          h={{ base: "40px", "2xl": "60px" }}
          w={{ base: "40px", "2xl": "60px" }}
          src={avatar}
          me="10px"
        />
        <Flex direction="column" align="start" w="100%" bg="green">
          <Text
            color={textColor}
            fontSize={{ base: "lg", "2xl": "lg" }}
            me="6px"
            fontWeight="700"
          >
            {name}
          </Text>
          <Text
            display={{ base: "none", xl: "unset" }}
            color={textColor}
            fontSize={{ base: "md", "2xl": "md" }}
            fontWeight="400"
          >
            {lastMessage}
          </Text>
          <Text
            display={{ base: "unset", xl: "none" }}
            color={textColor}
            fontSize={{ base: "md", "2xl": "md" }}
            fontWeight="400"
          >
            {newLastMessage}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
