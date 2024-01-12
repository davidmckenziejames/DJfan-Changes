import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Heading,
  Container,
  VStack,
} from "@chakra-ui/react";

import { FaChevronDown } from "react-icons/fa";

export default function FAQs() {
  // Step 1: Define an array of questions and answers
  const faqItems = [
    {
      question: "What is DJfan?",
      answer:
        "Chakra UI is a simple and modular component library that gives developers the building blocks they need to create web applications.",
    },
    {
      question: "How much could I earn?",
      answer:
        "Chakra UI offers a variety of advantages including ease of use, accessibility, and customization options. It also provides a comprehensive set of UI components and is fully compatible with React.",
    },
    {
      question: "What content can I publish?",
      answer:
        "To get started with Chakra UI, you can install it via npm or yarn, and then import the components you need in your project. The Chakra UI documentation is also a great resource for getting started and learning more about the library.",
    },
    {
      question: "Which DJs use the platform?",
      answer:
        "To get started with Chakra UI, you can install it via npm or yarn, and then import the components you need in your project. The Chakra UI documentation is also a great resource for getting started and learning more about the library.",
    },
  ];

  // Step 2: Map through the array to render AccordionItems
  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg="purple"
      py="40px"
      bgImage={
        "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)) ,url(https://images.unsplash.com/photo-1661966522340-a51f578e4017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)"
      }
      bgPosition={"center"}
      bgSize={"cover"}
    >
      <VStack w={{ base: "90%", md: "600px" }}>
        <Heading
          color="white"
          fontSize={{ base: "24px", md: "40px" }}
          textAlign="center"
          lineHeight="1.2em"
          mb="20px"
        >
          Frequently Asked Questions
        </Heading>
        <Accordion allowMultiple width="100%" overflow={"hidden"}>
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              border={"1px solid "}
              mb="15px"
              rounded="lg"
              bg="white"
              overflow={"hidden"}
            >
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p="15px"
                pl="20px"
                _hover={{ bg: "#7d5aeb", color: "white" }}
              >
                <Text
                  fontSize={{ base: "18px", md: "24px" }}
                  fontWeight={"600"}
                >
                  {item.question}
                </Text>
                <FaChevronDown fontSize="20px" />
              </AccordionButton>
              <AccordionPanel pb={4} borderTop={"2px solid #111"} p="20px">
                <Text color="gray.600">{item.answer}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Flex>
  );
}
