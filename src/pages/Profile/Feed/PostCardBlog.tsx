import {
  Avatar,
  Flex,
  Box,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  AvatarBadge,
  Menu,
  MenuButton,
  Link,
  MenuItem,
  Stack,
  Heading,
  MenuList,
  HStack,
} from "@chakra-ui/react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FiShare, FiEye, FiMoreVertical } from "react-icons/fi";
import PostActions from "./PostActions";

type PostMenuProps = {
  icon: React.ElementType;
  label: string;
};

const PostMenu = ({ icon, label }: PostMenuProps) => (
  <MenuItem py="10px" aria-label={label}>
    <Box as={icon} size="14px" mr="8px" />
    <Text>{label}</Text>
  </MenuItem>
);

export default function PostCardBlog() {
  return (
    <Flex
      overflow="hidden"
      flexDirection="column"
      border="2px solid black"
      borderRadius="15px"
    >
      <Image
        w={"100%"}
        h="200px"
        objectFit="cover"
        src={
          "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
        alt="Example"
      />

      <Stack px="10px" py="15px">
        <HStack justify="space-between">
          <Text
            color="#7d5aeb"
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            CAREER TIPS
          </Text>
          <Text
            color="#111"
            textTransform={"uppercase"}
            fontWeight={600}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            14/02/2024
          </Text>
        </HStack>

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
