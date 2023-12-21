import {
  Box,
  Button,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  Input,
} from "@chakra-ui/react";

import { FiCheck, FiEdit, FiX } from "react-icons/fi";
import SelectGuest from "../Approve";

const EditableControls = () => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <Flex justifyContent="center" fontSize={"20px"} ml="10px" gap="10px">
      <Box {...getSubmitButtonProps()}>
        <FiCheck />
      </Box>
      <Box {...getCancelButtonProps()}>
        <FiX />
      </Box>
    </Flex>
  ) : (
    <Flex justifyContent="center">
      <Box {...getEditButtonProps()}>
        <FiEdit />
      </Box>
    </Flex>
  );
};

export default function ManageGuestlistButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        fontSize="14px"
        lineHeight="1em"
        color="#fff"
        bg="#151515"
        h="30px"
        _hover={{ bg: "#7d5aeb" }}
        onClick={onOpen}
      >
        Guestlist
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="15px">
          <ModalCloseButton />
          <Flex pb="15px" flexDirection={"column"}>
            <Heading pb="5px" fontSize="20px">
              Manage Guestlist
            </Heading>

            <Flex>
              <Text display={"flex"} alignItems="center" gap={"5px"}>
                Guestlist places available:
                <Editable
                  textAlign="center"
                  defaultValue="2"
                  isPreviewFocusable={false}
                  display={"flex"}
                  gap={"5px"}
                  alignItems="center"
                  fontWeight={"bold"}
                >
                  <EditablePreview />
                  {/* Here is the custom input */}
                  <Input maxW="50px" display="flex" as={EditableInput} />
                  <EditableControls />
                </Editable>
              </Text>
            </Flex>
          </Flex>
          <SelectGuest />
        </ModalContent>
      </Modal>
    </>
  );
}
