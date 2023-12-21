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

export default function LinkPost() {
  const [audioLink, setAudioLink] = React.useState("");

  return (
    <>
      <Flex w="100%" flexDir={"column"}>
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
      <Box pt="15px">
        <HStack fontSize="14px" gap="15px" w="100%" pt="10px">
          <Text fontSize="14px">You are creating an embed post</Text>
          <Text fontSize="14px" fontWeight="600" color="#7d5aeb">
            Reset
          </Text>
        </HStack>
      </Box>
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
      <FormControl mb={4} id="single">
        <Input
          type="text"
          name="audiolink"
          placeholder="e.g. https://soundcloud.com/..."
          value={audioLink} // Bind the value to the state variable
          onChange={(e) => setAudioLink(e.target.value)} // 2. Update the state variable on change
        />
      </FormControl>

      <FormControl>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaLink color="#7A7A7A" />{" "}
          </InputLeftElement>
          <Input
            type="text"
            name="audiolink"
            placeholder="e.g. https://soundcloud.com/..."
            value={audioLink} // Bind the value to the state variable
            onChange={(e) => setAudioLink(e.target.value)} // 2. Update the state variable on change
          />
        </InputGroup>
        <Box lineHeight="1em" fontSize="12px" mt="10px">
          <b>Accepted links</b>: Soundcloud, Spotify, Mixcloud.
        </Box>
      </FormControl>
      {audioLink && (
        <Flex id="embedPreview" p="0" mb={4} flexDirection="column">
          <Flex>
            <ReactPlayer width="100%" height="180px" w="100%" url={audioLink} />
          </Flex>
          <Popover>
            <PopoverTrigger>
              <Text
                pt="10px"
                fontSize="14px"
                cursor="pointer"
                fontWeight="600"
                textAlign="right"
              >
                Not working?
              </Text>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton fontSize="12px" />
              <Stack p="15px">
                <Text fontSize="16px" fontWeight="600">
                  Common Fixes
                </Text>
                <Text fontSize="14px">
                  1. Try again to copy & paste the link
                </Text>
                <Text fontSize="14px">
                  2. Confirm the track is not set to private.
                </Text>
              </Stack>
            </PopoverContent>
          </Popover>
        </Flex>
      )}
    </>
  );
}
