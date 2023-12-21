import { useState } from "react";
import {
  Flex,
  Text,
  FormControl,
  Icon,
  Box,
  Divider,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Portal,
} from "@chakra-ui/react";
import {
  FiGlobe,
  FiStar,
  FiShield,
  FiChevronDown,
  FiCheck,
} from "react-icons/fi";

interface VisibilityOption {
  value: string;
  label: string;
  icon: React.ElementType;
}

const options: VisibilityOption[] = [
  { value: "everyone", label: "Everyone", icon: FiGlobe },
  { value: "gold_members", label: "Gold Members", icon: FiStar },
  { value: "vip_members", label: "VIP Members", icon: FiShield },
];

const VisibilitySelect = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState<VisibilityOption>(
    options[0]
  );

  const handleOptionClick = (option: VisibilityOption) => {
    setSelectedOption(option);
    onClose(); // this will close the popover
  };

  return (
    <Flex>
      <FormControl>
        <Popover
          placement="top"
          isOpen={isOpen}
          onOpen={onToggle}
          onClose={onClose}
        >
          <PopoverTrigger>
            <Box onClick={onToggle} cursor="pointer">
              <Flex
                border="1px solid #300a6e"
                borderRadius="md"
                lineHeight="1em"
                fontSize="15px"
                fontWeight="600"
                color="#7d5aeb"
                align="center"
                gap="2px"
                p="5px"
                px="8px"
                height="30px"
              >
                <Icon mr="4px" as={selectedOption.icon} />
                <Text>{selectedOption.label}</Text>
              </Flex>
            </Box>
          </PopoverTrigger>
          <Portal>
            <PopoverContent width="fit-content">
              <PopoverArrow />
              <PopoverBody>
                <Flex
                  pt="10px"
                  flexDirection="column"
                  lineHeight="1em"
                  fontSize="14px"
                  gap="8px"
                >
                  <Text fontWeight="600">Who can see this post?</Text>
                  <Text>Choose if this is free or paid content</Text>
                  <Divider my="10px" />
                  {options.map((option) => (
                    <Flex
                      key={option.value}
                      align="center"
                      p={2}
                      borderRadius="md"
                      _hover={{ bg: "gray.100" }}
                      cursor="pointer"
                      onClick={() => handleOptionClick(option)}
                    >
                      <Icon as={option.icon} mr={2} />
                      <Text flex="1">{option.label}</Text>
                      {selectedOption.value === option.value && (
                        <Icon ml="5px" as={FiCheck} />
                      )}
                    </Flex>
                  ))}
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </FormControl>
    </Flex>
  );
};

export default VisibilitySelect;
