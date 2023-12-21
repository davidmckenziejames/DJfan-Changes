import {
  Box,
  Button,
  FormControl,
  Input,
  Select,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface ImportModalProps {}

const ImportModal: React.FC<ImportModalProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [username, setUsername] = useState("");

  const renderInputFields = () => (
    <Box>
      <Input
        placeholder={`${selectedPlatform} Username`}
        mt="2"
        mb="2"
        id={`${selectedPlatform}-username`}
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button mt="5px" colorScheme="purple" type="submit">
        Start Import
      </Button>
    </Box>
  );

  return (
    <>
      <Text fontSize="20px" fontWeight="700" mb={"10px"}>
        Import Content
      </Text>
      <form
        accept-charset="UTF-8"
        action="https://www.formbackend.com/f/01dc4568bc67712f"
        method="POST"
      >
        <FormControl>
          <Select
            placeholder="Select Platform"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="Youtube">YouTube</option>
            <option value="Soundcloud">Soundcloud</option>
            <option value="Mixcloud">Mixcloud</option>
            <option value="Spotify">Spotify</option>
            <option value="Instagram">Instagram</option>
          </Select>

          {renderInputFields()}
        </FormControl>
      </form>
    </>
  );
};

export default ImportModal;
