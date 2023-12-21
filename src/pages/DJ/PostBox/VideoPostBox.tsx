import React from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Button,
  Flex,
  Textarea,
  Checkbox,
  HStack,
  Text,
  Select,
  InputLeftElement,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Stack,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverCloseButton,
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaEdit,
  FaImages,
  FaLink,
  FaVideo,
  FaCalendar,
} from "react-icons/fa";
import VisibilitySelect from "./Visibility";
import Advanced from "./Advanced";
import FileUpload from "../FileUpload";

export default function VideoPostBox() {
  const [audioLink, setAudioLink] = React.useState("");

  return (
    <>
      <Flex w="100%" flexDir={"column"}>
        <Flex
          flexDirection={"column"}
          border={"1px solid"}
          borderColor={"gray.200"}
        >
          <Textarea
            resize="none"
            border="none"
            h={"66px"}
            _focusVisible={{
              outline: "none",
            }}
            fontSize={"18px"}
            px="18px"
            mb="10px"
            placeholder="Write something about this post..."
          />

          <Flex mb="10px" ml="10px">
            <VisibilitySelect />
          </Flex>
        </Flex>
        <Flex mt={4} justify="space-between">
          <Button fontSize="16px" height="35px" px="10px">
            <FaCalendar fontSize="14px" style={{ marginRight: "5px" }} />
            Preview
          </Button>
          <Button
            type="submit"
            background="#300a6e"
            color="#fff"
            fontSize="16px"
            _hover={{ background: "#111" }}
            height="35px"
            px="10px"
          >
            Create Post{" "}
            <FaArrowRight fontSize="14px" style={{ marginLeft: "5px" }} />
          </Button>
        </Flex>
        <Advanced />
      </Flex>
    </>
  );
}
