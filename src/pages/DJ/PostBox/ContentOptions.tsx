import {
  Box,
  Flex,
  HStack,
  Tooltip,
  Icon,
  useToken,
  Text,
} from "@chakra-ui/react";
import { FaImages, FaVideo, FaLink, FaMusic, FaCalendar } from "react-icons/fa";
import { useState } from "react";

const ContentOptions = () => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const activeColor = useToken("colors", "#7d5aeb");
  const inactiveColor = useToken("colors", "#111");
  const inactiveColorWhenActive = useToken("colors", "gray.300");
  const icons = [
    {
      component: FaImages,
      label: "Add Image",
    },
    {
      component: FaVideo,
      label: "Add Video",
    },
    {
      component: FaLink,
      label: "Add Link",
    },
    {
      component: FaMusic,
      label: "Add Music",
    },
    {
      component: FaCalendar,
      label: "Add Date",
    },
  ];

  return (
    <Box>
      <HStack gap="20px">
        {icons.map(({ component, label }) => (
          <Flex
            border={label === activeIcon ? "1px solid" : "none"}
            borderColor={activeColor}
            borderRadius="10px"
            onMouseEnter={() => setActiveIcon(label)}
            onMouseLeave={() => setActiveIcon(null)}
          >
            <HStack spacing={2} px="10px" py="10px">
              <Icon
                as={component}
                fontSize="20px"
                color={
                  label === activeIcon
                    ? activeColor
                    : activeIcon
                    ? inactiveColorWhenActive
                    : inactiveColor
                }
              />
              {label === activeIcon && (
                <Text fontSize="16px" color={activeColor} fontWeight={"500"}>
                  {label}
                </Text>
              )}
            </HStack>
          </Flex>
        ))}
      </HStack>
    </Box>
  );
};

export default ContentOptions;
