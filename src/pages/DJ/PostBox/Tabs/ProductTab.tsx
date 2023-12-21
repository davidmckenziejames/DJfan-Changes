import { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Textarea,
  Input,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import FileChoices from "../Components/FileChoices";

export default function ProductTab() {
  const [releaseName, setReleaseName] = useState("");
  const [description, setDescription] = useState("");
  const [releaseArtwork, setReleaseArtwork] = useState("");
  const [price, setPrice] = useState(0);
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [recordLabel, setRecordLabel] = useState("");
  const [featuredArtists, setFeaturedArtists] = useState("");
  const [downloadableTrackFile, setDownloadableTrackFile] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Stack px="20px" pt="10px" pb="20px">
      <FormControl isRequired mb={4}>
        <FormLabel>Release Name</FormLabel>
        <Input
          type="text"
          value={releaseName}
          placeholder="Name of Release / Track"
          onChange={(e) => setReleaseName(e.target.value)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Description</FormLabel>
        <Textarea
          value={description}
          placeholder="Write something about this release"
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Release Artwork</FormLabel>
        <Input
          type="file"
          accept="image/*"
          border="0px"
          p="2px"
          onChange={(e) => setReleaseArtwork(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Price ($ USD)</FormLabel>
        <NumberInput
          value={price}
          onChange={(value) => setPrice(Number(value))}
          placeholder="e.g. 2.00"
        >
          <NumberInputField />
        </NumberInput>
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Genre</FormLabel>
        <Input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="e.g. Tech House"
        />
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Release Date</FormLabel>
        <Input
          type="date"
          value={releaseDate}
          placeholder="Select a date"
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Record Label</FormLabel>
        <Input
          type="text"
          placeholder="Name of Record Label"
          value={recordLabel}
          onChange={(e) => setRecordLabel(e.target.value)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Featured Artists</FormLabel>
        <Input
          type="text"
          placeholder="All Featured Artists"
          value={featuredArtists}
          onChange={(e) => setFeaturedArtists(e.target.value)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Downloadable File Name</FormLabel>
        <Input type="text" placeholder="e.g. song-name.wav" />
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel>Downloadable Track File</FormLabel>
        <Input
          type="file"
          accept=".mp3"
          border="0px"
          p="2px"
          onChange={(e) => setDownloadableTrackFile(e.target.value)}
        />
      </FormControl>
      <FileChoices />

      <Button
        mt={4}
        type="submit"
        background="#300a6e"
        color="#fff"
        fontSize="18px"
        _hover={{ background: "#111" }}
        height="45px"
      >
        CREATE PRODUCT{" "}
        <FaArrowRight fontSize="14px" style={{ marginLeft: "5px" }} />
      </Button>
    </Stack>
  );
}
