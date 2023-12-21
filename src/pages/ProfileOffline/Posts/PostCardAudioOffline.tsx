import { useState } from "react";
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
  IconButton,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { FiShare, FiEye, FiMoreVertical, FiUnlock } from "react-icons/fi";
import PostActions from "./PostActionsOffline";
import PostOverlay from "../PostOverlay";
import { useMediaQuery } from "react-responsive";
import { FaLock, FaPlay } from "react-icons/fa";
import LoginModal from "./LoginModal";
import Player from "../../DJ/Player";
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

export default function PostCardAudioOffline() {
  const [hover, setHover] = useState(false);
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
                    VIP
                  </Text>
                </Flex>
              </HStack>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody p="0" style={{ position: "relative" }}>
        <Player />
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
