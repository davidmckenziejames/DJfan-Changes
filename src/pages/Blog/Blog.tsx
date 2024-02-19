import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Tooltip,
  Flex,
  Stack,
  Icon,
  Image,
  Text,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  FiShare,
  FiUnlock,
  FiUser,
  FiHeadphones,
  FiPlay,
  FiArrowLeft,
} from "react-icons/fi";
import { FaCheckCircle, FaEnvelope } from "react-icons/fa";

export default function Blog() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const avatarSizes = { base: "100px", sm: "150px" };
  return (
    <Flex align="center" flexDirection="column" w="100%">
      <Flex
        bg="#111"
        w="100%"
        justify="center"
        py="10px"
        borderBottom="1px solid #fff"
      >
        <Image
          height="50px"
          src="https://files.djfan.app/images/djfan-beta.png"
        />
      </Flex>
      <Box
        className="ProfileHeader"
        bg="#111"
        w="100%"
        position="relative"
        backgroundImage="url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Flex
          align="center"
          flexDirection="column"
          pos="relative"
          px={8}
          pt="50px"
          pb="50px"
          mx="auto"
          w="100%"
          gap="15px"
        >
          <Text
            fontSize="16px"
            color="white"
            fontWeight="600"
            cursor="pointer"
            position="absolute"
            left="10px"
            top="15px"
            lineHeight="1em"
            _hover={{ textDecoration: "underline" }}
          >
            <Icon as={FiArrowLeft} mb="-3px" mr="6px" />
            Back to Profile
          </Text>
          <Heading
            id="blogTitle"
            color="#fff"
            fontSize="40px"
            lineHeight="1.2em"
            textAlign="center"
          >
            HOW TO WRITE A DJ BIO
          </Heading>
          <Text
            id="blogCategory"
            bg="#7d5aeb"
            color="#ffffff"
            textTransform="uppercase"
            fontWeight="700"
            fontSize="16px"
            lineHeight="1em"
            px="8px"
            py="5px"
            borderRadius="10px"
          >
            CAREER
          </Text>
          <Text
            id="blogDate"
            color="#fff"
            fontSize="16px"
            textAlign="center"
            fontWeight="600"
            lineHeight="1em"
          >
            11th February 2024
          </Text>
        </Flex>
      </Box>
      <Flex
        py="20px"
        px="20px"
        id="blogBody"
        align="center"
        flexDirection="column"
        w="100%"
        gap="20px"
      >
        <Text
          w="100%"
          color="#111"
          fontSize="18px"
          fontWeight="500"
          lineHeight="1.2em"
        >
          You might already have a handful of mixes out there on SoundCloud but
          to attract listeners, you’ll want a bit of text that hooks them in and
          encourages them to go listen to your stuff.
        </Text>
        <Text
          w="100%"
          color="#111"
          fontSize="18px"
          fontWeight="500"
          lineHeight="1.2em"
        >
          You might already have a handful of mixes out there on SoundCloud but
          to attract listeners, you’ll want a bit of text that hooks them in and
          encourages them to go listen to your stuff.
        </Text>
        <Text
          w="100%"
          color="#111"
          fontSize="18px"
          fontWeight="500"
          lineHeight="1.2em"
        >
          You might already have a handful of mixes out there on SoundCloud but
          to attract listeners, you’ll want a bit of text that hooks them in and
          encourages them to go listen to your stuff.
        </Text>
      </Flex>
    </Flex>
  );
}
