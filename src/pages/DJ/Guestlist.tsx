import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Select,
  Text,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  HStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  Input,
} from "@chakra-ui/react";
import { CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { FaTimes } from "react-icons/fa";
import UserInfoContainer from "./Approve";
import { FiCheck, FiEdit, FiX } from "react-icons/fi";
import ManageGuestlistButton from "./Events/ManageGuestlistButton";
import EditEventButton from "./Events/EditEventButton";
type Post = {
  title: string;
  eventLocation: string;
  date: string;
  eventVenue: string;
};

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  const [isEdit, setEdit] = useState(false);
  const [eventLocation, seteventLocation] = useState(post.eventLocation);

  const saveChanges = () => {
    // Save changes here..
    setEdit(false);
  };

  const deletePost = () => {
    // Delete post here..
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      border="1px"
      bg="white"
      borderColor="gray.200"
      borderRadius="md"
      w="full"
    >
      <Flex flexWrap="wrap" alignItems="center" width="100%" height="100%">
        <Flex width="40%">
          <Image
            minH="150px"
            objectFit="cover"
            src="https://djfan.ams3.digitaloceanspaces.com/djfanuploads2023/6488722d52275.png"
          />
        </Flex>
        <Flex width="60%" flexDirection="column" px="15px">
          <Text fontSize="14px" color="gray.500">
            {post.date}
          </Text>
          <Text fontSize="18px">{post.title}</Text>

          <HStack gap="15px" fontSize="15px">
            <Text color="gray.500">{post.eventVenue}</Text>
            <Text color="gray.500">{eventLocation}</Text>
          </HStack>
          <HStack gap="15px" pt="10px">
            <ManageGuestlistButton />
            <EditEventButton />
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

type GuestListProps = {
  posts: Post[];
};

export function GuestList({ posts }: GuestListProps) {
  return (
    <VStack spacing={4} p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Manage Events
      </Text>

      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </VStack>
  );
}

const DUMMY_DATA: Post[] = [
  {
    title: "Paradise Ibiza",
    eventLocation: "Ibiza",
    date: "2022-03-01",
    eventVenue: "Amnesia",
  },
];

export default function ListGuest() {
  return <GuestList posts={DUMMY_DATA} />;
}
