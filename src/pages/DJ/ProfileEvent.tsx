import { useRef } from "react";
import {
  Avatar,
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  IconButton,
  Heading,
  Button,
  Image,
  AvatarBadge,
  Menu,
  MenuButton,
  Link,
  MenuItem,
  MenuList,
  HStack,
  Tag,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  ButtonGroup,
  Input,
  Portal,
  FormControl,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";
import { BiLike, BiChat, BiShare, BiEdit, BiTrash } from "react-icons/bi";
import {
  FiShare,
  FiX,
  FiEye,
  FiMoreVertical,
  FiCloudSnow,
} from "react-icons/fi";

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

export default function ProfileEvent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card border="2px solid black" borderRadius="15px" overflow="hidden">
      <CardHeader p="0">
        <Image
          maxH="250px"
          objectFit="cover"
          w="100%"
          src="https://djfan.ams3.digitaloceanspaces.com/djfanuploads2023/6488722d52275.png"
          alt="DJ"
        />
        <Flex
          bg="black"
          px="15px"
          py="5px"
          borderTop="solid 2px cyan"
          borderBottom="solid 2px cyan"
          justifyContent="space-between"
        >
          <Text color="white" fontWeight="600">
            WEDNESDAY 28 JUNE
          </Text>
          <Text color="white" fontWeight="600">
            23:00 - 06:00
          </Text>
        </Flex>
        <Flex justify="space-between" px="15px" pt="10px">
          <Text ml="5px">
            <Box as="span" fontWeight="bold">
              Venue
            </Box>
            : Amnesia,Ibiza
          </Text>
          <Menu>
            <MenuButton transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <Box as={FiMoreVertical} size="20px" color="gray" />
            </MenuButton>
            <MenuList
              minW="max-content"
              fontSize="14px"
              bg="white"
              p="0"
              m="0"
              borderColor="gray.200"
            >
              <PostMenu icon={BiLike} label="Edit Event" />
              <PostMenu icon={BiTrash} label="Delete Event" />
              <PostMenu icon={FiShare} label="Share Event" />
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody pt="5px">
        <Heading pb="10pxs" fontSize="24px" mb="5px">
          Paradise Ibiza
        </Heading>
        <Text fontSize="14px">
          Paradise presents Night of The Jaguar…where the jungle comes alive
          this season with its world of vibrant acid hued wildlife and
          supernatural night visions. Every Wednesday we transport you deep into
          the heart of the tropical wilds, to the place where we meet the
          jaguar’s ‘spirit of the midnight sun’.
        </Text>
        <Flex pt="20px" pb="10px" justify="flex-start" flex="0">
          <Button
            fontSize="16px"
            variant="solid"
            colorScheme="purple"
            mr="15px"
            alignSelf={"flex-start"}
          >
            Tickets
          </Button>

          <Popover isOpen={isOpen} placement="top" onClose={onClose}>
            <PopoverTrigger>
              <Button
                alignSelf={"flex-start"}
                fontSize="16px"
                variant="solid"
                color={"white"}
                bg={"#111"}
                _hover={{ bg: "#111" }}
                onClick={onOpen}
              >
                Request Guestlist
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent border="2px solid #111">
                <PopoverArrow />
                <Flex flexDir="column" p="15px" position="relative">
                  <Box
                    onClick={onClose}
                    position="absolute"
                    top="10px"
                    right="10px"
                    zIndex="1"
                    cursor="pointer"
                  >
                    <FiX fontSize="20px" />
                  </Box>
                  <FormControl isRequired>
                    <Flex flexDir="column" gap={"10px"}>
                      <Text fontSize="16px" fontWeight={"bold"}>
                        Request Guestlist
                      </Text>
                      <Input placeholder="Full Name" />
                      <Checkbox>Confirm Full Name</Checkbox>
                      <Button
                        color={"white"}
                        bg={"#111"}
                        _hover={{ bg: "#111" }}
                      >
                        Request Guestlist
                      </Button>
                    </Flex>
                  </FormControl>
                </Flex>
              </PopoverContent>
            </Portal>
          </Popover>
        </Flex>
      </CardBody>
    </Card>
  );
}
