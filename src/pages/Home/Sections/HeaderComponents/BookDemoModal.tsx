import {
  ModalContent,
  ModalFooter,
  ModalBody,
  Link,
  ModalCloseButton,
  FormControl,
  InputRightElement,
  Input,
  InputGroup,
  Flex,
  Button,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import SocialButtons from "../../Forms/SocialButtons";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Booking from "../Booking";
export default function BookDemoModal() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <ModalContent w="700px" pt="20px" mx={{ base: "20px", md: "0" }}>
        <Box zIndex={20}>
          <ModalCloseButton />
        </Box>
        <Booking />
      </ModalContent>
    </>
  );
}
