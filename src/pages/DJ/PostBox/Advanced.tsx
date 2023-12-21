import React, { useState } from "react";
import { Box, Collapse, Flex, Text, Checkbox, Button } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";

function Advanced() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex flexDirection={"column"} align={"flex-end"}>
      <Text
        onClick={handleToggle}
        fontSize="14px"
        fontWeight="500"
        color="#7d5aeb"
      >
        {isOpen ? "Hide  Options" : " Advanced Options"}
      </Text>
      <Collapse in={isOpen} animateOpacity>
        <Checkbox>
          <Flex alignItems="center" fontSize="14px">
            Disable Comments
          </Flex>
        </Checkbox>
      </Collapse>
    </Flex>
  );
}

export default Advanced;
