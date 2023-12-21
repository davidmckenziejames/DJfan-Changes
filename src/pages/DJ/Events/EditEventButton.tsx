import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import EditEventModal from "./EditEventModal";

export default function EditEventButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        fontSize="14px"
        lineHeight="1em"
        color="#fff"
        bg="#531db5"
        h="30px"
        onClick={onOpen}
        _hover={{ bg: "#7d5aeb" }}
      >
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <EditEventModal />
        </ModalContent>
      </Modal>
    </>
  );
}
