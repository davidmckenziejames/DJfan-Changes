import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Textarea,
  Input,
  HStack,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import ImageUploadButton from "../ImageUploadButton";

export default function EditEventModal() {
  return (
    <Stack px="15px" py="20px" w={"100%"}>
      <Heading pb="5px" fontSize="20px">
        Edit Event
      </Heading>
      <FormControl isRequired mb={4}>
        <FormLabel>Event Name</FormLabel>
        <Input type="text" placeholder="Enter name of event" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Event Description</FormLabel>
        <Textarea placeholder="Write something about this event..." />
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Event Date</FormLabel>
        <Input type="date" placeholder="Select a date" />
      </FormControl>
      <HStack>
        <FormControl isRequired mb={4}>
          <FormLabel>Start Time</FormLabel>
          <Input type="time" />
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel>End Time</FormLabel>
          <Input type="time" />
        </FormControl>
      </HStack>
      <FormControl isRequired mb={4}>
        <FormLabel>Venue</FormLabel>
        <Input type="text" placeholder="e.g. Pacha" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>City / Location</FormLabel>
        <Input type="text" placeholder="e.g. London or Ibiza" />
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Event Artwork</FormLabel>
        <ImageUploadButton />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Link to book or buy tickets</FormLabel>
        <Input type="url" placeholder="https://" />
      </FormControl>

      <Button
        type="submit"
        background="#300a6e"
        color="#fff"
        fontSize="18px"
        _hover={{ background: "#111" }}
        height="45px"
      >
        SAVE EVENT{" "}
        <FaArrowRight fontSize="14px" style={{ marginLeft: "5px" }} />
      </Button>
    </Stack>
  );
}
