import React, { useState } from "react";
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
  FaEye,
  FaChevronCircleDown,
} from "react-icons/fa";
import VisibilitySelect from "./Visibility";
import Advanced from "./Advanced";
import ImageUpload from "../ImageUpload";
import { FiEye } from "react-icons/fi";

export default function ImagePostBox() {
  const [isHovering, setIsHovering] = useState(false);
  const [previewOpacity, setPreviewOpacity] = React.useState(0);
  return (
    <>
      <Flex w="100%" flexDir={"column"}>
        <Flex
          flexDirection={"column"}
          border={"1px solid"}
          borderColor={"gray.200"}
          overflow={"hidden"}
          borderRadius={"10px"}
          position={"relative"}
        >
          <Textarea
            resize="none"
            border="none"
            h={"66px"}
            _focusVisible={{
              outline: "none",
            }}
            fontSize={"16px"}
            px="14px"
            pt="14px"
            placeholder="Write something about this post..."
          />
        </Flex>
        <ImageUpload />

        <Flex mt={4} justify="space-between" align="center">
          <HStack justify={"flex-end"} w={"100%"} gap="15px">
            <Flex
              id="preview"
              display={"none"}
              p="10px"
              cursor={"pointer"}
              zIndex={2}
              gap={"4px"}
              onMouseEnter={() => setPreviewOpacity(1)}
              onMouseLeave={() => setPreviewOpacity(0)}
            >
              <Text
                display={"flex"}
                color={"blue"}
                fontSize="16px"
                alignItems={"center"}
                lineHeight={"1em"}
                opacity={previewOpacity}
                transition={"opacity 0.8s"}
              >
                Preview Post
              </Text>
              <FiEye
                color={"blue"}
                fontSize="20px"
                style={{ marginRight: "5px" }}
              />
            </Flex>
            <VisibilitySelect />
            <Button
              type="submit"
              background="#300a6e"
              color="#fff"
              fontSize="15px"
              _hover={{ background: "#111" }}
              height="30px"
              px="10px"
              alignSelf={"flex-end"}
            >
              Publish{" "}
              <FaArrowRight fontSize="14px" style={{ marginLeft: "5px" }} />
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
}
