import {
  Avatar,
  Box,
  Button,
  Flex,
  Stack,
  Icon,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Input,
  useToast,
  useDisclosure,
  VisuallyHidden,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CiImport } from "react-icons/ci";
import {
  FaSoundcloud,
  FaYoutube,
  FaMixcloud,
  FaSpotify,
  FaInstagram,
  FaFileImport,
} from "react-icons/fa";
import ImportModal from "./ImportModal";

const logoStyle = {
  display: "flex",
  fontSize: { base: "12px", md: "16px" },
  alignItems: "center",
  gap: "5px",
  color: "gray.500",
};

export default function ImportContent() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack>
      <Flex
        flexDir={"column"}
        border="2px solid #e2e8f0"
        p="10px"
        m="10px"
        borderRadius="10px"
        bg="#fff"
        maxW={"600px"}
      >
        <Flex flexDir="column" pt={"10px"} pb={"5px"} gap={"10px"}>
          <Heading fontSize={"24px"} textAlign={"center"} lineHeight={"1em"}>
            Import Content
          </Heading>
          <Text
            lineHeight={"1.4em"}
            alignSelf={"center"}
            w={{ base: "90%", md: "80%" }}
            fontSize={{ base: "14px", md: "18px" }}
            textAlign="center"
          >
            Give your profile a headstart and import images, video, & audio
            that's already online.
          </Text>

          <Box
            border="1px solid #7d5aeb"
            px="8px"
            py="8px"
            mt="5px"
            color="#fff"
            bg="#7d5aeb"
            fontWeight="600"
            fontSize={"14px"}
            lineHeight="1em"
            onClick={onOpen}
            borderRadius="5px"
            cursor="pointer"
            alignSelf={"center"}
            display={"flex"}
            alignItems={"center"}
            gap={"5px"}
          >
            START IMPORTING <CiImport fontSize={"20px"} />
          </Box>
          <HStack
            alignSelf={"center"}
            maxW={"100%"}
            w={"100%"}
            mt={"10px"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            <Box {...logoStyle}>
              <Icon as={FaYoutube} fontSize="1.2em" color="gray.400" /> YouTube
            </Box>
            <Box {...logoStyle}>
              <Icon as={FaSoundcloud} fontSize="1.2em" color="gray.400" />{" "}
              Soundcloud
            </Box>
            <Box {...logoStyle}>
              <Icon as={FaMixcloud} fontSize="1.2em" color="gray.400" />{" "}
              Mixcloud
            </Box>

            <Box {...logoStyle}>
              <Icon as={FaInstagram} fontSize="1.2em" color="gray.400" />{" "}
              Instagram
            </Box>
          </HStack>
        </Flex>

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody py={"20px"}>
              <ImportModal />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </VStack>
  );
}
