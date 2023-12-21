import React, { ChangeEvent, useRef, useState } from "react";
import { Flex, Box, Image, VStack, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { FaImages } from "react-icons/fa";

const ImageUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files).filter((file) =>
        file.type.startsWith("image/")
      );
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
  };

  const triggerFileSelectPopup = () => fileInputRef.current?.click();

  return (
    <>
      <Flex
        w="100%"
        border="1px"
        borderColor="gray.200"
        borderRadius={"10px"}
        flexDirection="column"
        justify="center"
        align="center"
        bgGradient="linear(to-r, #300a6e, #7d5aeb)"
        color="white"
        p={4}
        _hover={{ cursor: "pointer", borderColor: "gray.300" }}
        onClick={triggerFileSelectPopup}
      >
        <FaImages fontSize="40px" />
        Click to Upload
        <input
          ref={fileInputRef}
          type="file"
          hidden
          multiple
          accept="image/*"
          onChange={handleImageUpload}
        />
      </Flex>
      {selectedFiles.length > 0 && (
        <Flex justify="flex-start" align="center" gap={4} mt="10px">
          {selectedFiles.map((file, index) => (
            <Box position="relative" key={file.name}>
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                boxSize="100px"
                objectFit="cover"
              />
              <IconButton
                aria-label="Delete"
                icon={<CloseIcon />}
                position="absolute"
                size="sm"
                top="0"
                right="0"
                onClick={() => handleRemoveFile(index)}
              />
            </Box>
          ))}
        </Flex>
      )}
    </>
  );
};

export default ImageUpload;
