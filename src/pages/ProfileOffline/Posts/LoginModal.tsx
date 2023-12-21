import {
  Flex,
  Heading,
  Image,
  HStack,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Portal,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  List,
  Box,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaLock, FaPlay } from "react-icons/fa";
import { FiX, FiCheck, FiPlay, FiPlayCircle } from "react-icons/fi";

export default function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Flex
            aria-label="Play button"
            px="25px"
            py="15px"
            borderRadius="20px"
            color="#fff"
            cursor={"pointer"}
            bgGradient="linear(to-r, , #5c03bc, #e536ab)"
            _hover={{
              bgGradient: "linear(to-r, #60efff, #00ff87)",
              color: "#ebfffb",
            }}
          >
            <FaPlay fontSize={"45px"} />
          </Flex>
        </PopoverTrigger>
        <Portal>
          <PopoverContent bg="#fff" px="0" w="fit-content">
            <PopoverArrow bg="#fff" />
            <PopoverBody p="0">
              <VStack gap={"15px"} px="10px" py="15px">
                <Heading
                  fontSize="18px"
                  borderRadius="5px"
                  lineHeight="1em"
                  fontWeight="600"
                  textAlign="center"
                  display={"flex"}
                  alignItems={"center"}
                  gap={"4px"}
                >
                  <FaLock fontSize={"16px"} />
                  Sign in to view this post
                </Heading>
                <HStack gap="15px">
                  <Button
                    px="10px"
                    fontSize="16px"
                    height="34px"
                    color="#111"
                    bg="#fff"
                    border="1px solid #111"
                    lineHeight="1em"
                    _hover={{ bg: "#fff" }}
                    onClick={() => {
                      window.location.href =
                        "https://auth.djfan.app/auth/signin";
                    }}
                  >
                    LOGIN
                  </Button>
                  <Button
                    px="10px"
                    fontSize="16px"
                    height="34px"
                    iconSpacing="1"
                    bgGradient="linear(to-r, #5c03bc, #e536ab)"
                    lineHeight="1em"
                    color="#fff"
                    border="1px solid #5c03bc"
                    _hover={{ bgGradient: "linear(to-r,#e536ab, #5c03bc)" }}
                    onClick={() => {
                      window.location.href =
                        "https://auth.djfan.app/auth/signup";
                    }}
                  >
                    FREE ACCOUNT
                  </Button>
                </HStack>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>

      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          border="1px solid #fff"
          overflow="hidden"
          borderRadius="10px"
        >
          <VStack w="100%" bg="#111">
            <Flex position="absolute" right="10px" top="10px">
              <FiX
                color="#fff"
                onClick={onClose}
                fontSize="30px"
                cursor="pointer"
              />
            </Flex>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}
