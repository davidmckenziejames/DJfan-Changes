import { useEffect } from "react";
import {
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import { BiLike, BiTrash } from "react-icons/bi";
import { FiShare, FiMoreVertical } from "react-icons/fi";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

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

export default function ProductPageCard() {
  return (
    <VStack
      border="2px solid cyan"
      borderRadius="15px"
      overflow="hidden"
      w={{ base: "90%", sm: "450px" }}
      bg="black"
      gap="0"
      pb="15px"
      pt="20px"
    >
      <Image
        px="20px"
        pb="20px"
        w="100%"
        src="http://media.djfan.app/images/feelmybicep-02.webp"
        alt="DJ"
      />

      <Flex align="center" direction="column" w="100%" pb="15px">
        <Flex
          fontSize="14px"
          lineHeight="1em"
          fontWeight="700"
          borderRadius="15px"
          py="6px"
          px="10px"
          color="white"
          bg="#a700fe"
          mb="15px"
        >
          DIGITAL DOWNLOAD
        </Flex>
        <Heading fontSize="24px" px="10px" color="white">
          Song / Product Name
        </Heading>
        <Heading
          fontSize="18px"
          py="5px"
          as="span"
          color="white"
          fontWeight="500"
        >
          <Box as="span" color="cyan" pr="2px">
            by{" "}
          </Box>
          Artist Name
        </Heading>
        <Heading fontSize="24px" pt="5px" color="#fff" fontWeight="500">
          $2.00
        </Heading>
        <Box pt="10px">
          <Button
            fontSize="16px"
            flex="1"
            fontWeight="700"
            variant="solid"
            bg="#fff"
          >
            PURCHASE
          </Button>
        </Box>
      </Flex>
    </VStack>
  );
}
