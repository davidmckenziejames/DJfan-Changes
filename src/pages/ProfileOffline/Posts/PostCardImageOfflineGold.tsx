import {
  Avatar,
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Image,
  AvatarBadge,
  Menu,
  MenuButton,
  Link,
  MenuItem,
  MenuList,
  HStack,
} from "@chakra-ui/react";
import { FiShare, FiEye, FiMoreVertical } from "react-icons/fi";
import PostActions from "./PostActionsOffline";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import PostOverlayGold from "../PostOverlayGold";
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

export default function PostCardImageOfflineGold() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const maxLength = isMobile ? 95 : 165;
  const [isExpanded, setIsExpanded] = useState(false);
  const fullText =
    "Playlist for the day: Good vibes, fresh beats, and a moment worth a thousand songs! This is how we tune out the world and turn up the volume.  It's a musical journey designed to help us tune out the noise of the world and turn up the volume of our own happiness. These tracks invite us to savor the present, to be fully present in the music and in our lives.";
  const shortText = `${fullText.substring(0, maxLength)}...`;

  return (
    <Card border="2px solid black" borderRadius="15px" overflow="hidden">
      <CardHeader borderBottom="2px solid black">
        <Flex gap={4}>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name="Richy Ahmed"
              border="1px solid cyan"
              src="https://djarchive.websitestaging.co/wp-content/uploads/jet-engine-forms/175/2023/05/WhatsApp-Image-2023-05-20-at-17.39.37.jpeg"
            ></Avatar>

            <Box>
              <Link pb="2px" size="sm" fontWeight="700">
                Richy Ahmed
              </Link>
              <HStack>
                <Text fontSize="12px" color="gray.500" fontWeight="500">
                  6 hours ago
                </Text>
                <Flex align="center" gap="4px">
                  <Box as={FiEye} size="14px" color="#805ad5" />
                  <Text fontSize="14px" color="#805ad5" fontWeight="600">
                    Gold
                  </Text>
                </Flex>
              </HStack>
            </Box>
          </Flex>
          <Menu>
            <MenuButton transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <Box as={FiMoreVertical} size="20px" color="gray" />
            </MenuButton>
            <MenuList
              zIndex="2"
              minW="max-content"
              fontSize="14px"
              bg="white"
              p="0"
              m="0"
              borderColor="gray.200"
            >
              <PostMenu icon={FiShare} label="Share Post" />
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody p="0" style={{ position: "relative" }}>
        <PostOverlayGold />
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1542628682-88321d2a4828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="DJ"
        />
      </CardBody>
      <CardFooter px="10px" py="15px" flexDirection="column" mb="5px">
        <Text as="span" px="10px">
          <Link as="span" fontWeight="700" mr="5px" fontSize="16px">
            @richyahmed
          </Link>
          <Box as="span" fontSize="15px" fontWeight="500">
            {isExpanded ? fullText : shortText}
          </Box>
          <Box
            as="span"
            display={isExpanded ? "block" : "inline"}
            ml={isExpanded ? "0px" : "6px"}
            mt={isExpanded ? "5px" : "0px"}
            fontSize="14px"
          >
            <Link id="show" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Show less" : "Show more"}
            </Link>
          </Box>
        </Text>
      </CardFooter>
      <PostActions />
    </Card>
  );
}
