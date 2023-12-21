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
  IconButton,
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaEdit,
  FaImages,
  FaLink,
  FaVideo,
  FaCalendar,
  FaEye,
} from "react-icons/fa";
import VisibilitySelect from "./Visibility";
import Advanced from "./Advanced";

export default function TextPost() {
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

          <Flex mb="10px" ml="10px" justify="space-between">
            <VisibilitySelect />
          </Flex>
        </Flex>
        <Flex mt={4} justify="space-between" align={"center"}>
          <Flex gap="15px">
            <Button
              border={"1px solid #300a6e"}
              color="#300a6e"
              fontSize="16px"
              _hover={{ background: "#111" }}
              height="35px"
              px="10px"
            >
              <FaEye fontSize="14px" style={{ marginRight: "5px" }} />
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
              Publish Post{" "}
              <FaArrowRight fontSize="14px" style={{ marginLeft: "5px" }} />
            </Button>
          </Flex>
        </Flex>
        <Flex justify={"flex-end"} mt="10px">
          <Advanced />
        </Flex>
      </Flex>
    </>
  );
}
