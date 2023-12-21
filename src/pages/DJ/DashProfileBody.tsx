import {
  Avatar,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  StackDivider,
  Heading,
  Box,
  Button,
  Flex,
  HStack,
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
} from "@chakra-ui/react";
import {
  FiHeadphones,
  FiEdit,
  FiCamera,
  FiMinus,
  FiPlus,
  FiCheck,
  FiArrowRightCircle,
  FiArrowRight,
} from "react-icons/fi";
import { FaBandcamp, FaCamera, FaSoundcloud, FaUser } from "react-icons/fa";
import { useState } from "react";
import DashChecklist from "./DashChecklist";
import PostCardImageCarousel from "../Profile/Feed/PostCardImageCarousel";
import ImagePost from "./ImagePost";
import Player from "./Player";
import PostCardAudio from "../Profile/Feed/PostCardAudio";
import ListGuest, { GuestList } from "./Guestlist";
import ProfileEvent from "./ProfileEvent";
import ImportContent from "./ImportContent";

const headerStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  gap: "6px",
  lineHeight: "1em",
};

export default function DashProfileBody() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box
      px="10px"
      pt="30px"
      pb="30px"
      mx="auto"
      bg="#ebf0f6"
      position="relative"
    >
      <Box width={{ base: "100%", md: "500px" }}>
        <ProfileEvent />
      </Box>

      <ListGuest />
      <DashChecklist />

      <Box width={{ base: "100%", md: "500px" }} mb="30px">
        <PostCardAudio />
      </Box>
      <Box width={{ base: "100%", md: "500px" }}>
        <ProfileEvent />
      </Box>
    </Box>
  );
}
