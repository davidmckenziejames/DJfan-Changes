import { Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";

export default function SupportThankyou() {
  return (
    <Flex
      w="100%"
      h="100vh"
      maxH="100vh"
      pt={{ base: "90px", md: "180px" }}
      justifyContent="center"
      bg="#111111"
      position="relative"
      overflow="hidden"
    >
      <Flex
        w="100%"
        maxW="1200px"
        gap="10px"
        py={{ base: "20px", md: "30px" }}
        px={{ base: "20px", md: "30px" }}
        pos="absolute"
        justifyContent="center"
        alignItems="center"
        top="0px"
      >
        <Image
          src="https://files.djfan.app/images/djfan-beta.png"
          width="150px"
          onClick={() => (window.location.href = "https://djfan.app")}
          cursor="pointer"
        />
      </Flex>
      <Stack
        spacing="6"
        color="white"
        w={{ base: "90%", md: "500px" }}
        maxW="425px"
      >
        <Stack spacing="3">
          <VStack
            py="20px"
            px={"10px"}
            bgGradient="linear(to-r, #0acffe 0%, #495aff 100%)"
            borderRadius="10px"
            border="1px solid cyan"
            mb="15px"
          >
            <Heading textAlign="center" fontSize="20px">
              Support request received
            </Heading>

            <Text textAlign="center" fontSize={"16px"}>
              Your request has been received and is currently being processed by
              our dedicated support team. We understand the importance of your
              issue and will work diligently to resolve it as quickly as
              possible.
            </Text>
            <Text textAlign="center" fontSize={"16px"}>
              If you have any further questions or concerns, feel free to reach
              out to us at support@djfan.app. Our team is here to assist you
              every step of the way.
            </Text>
            <Text textAlign="center" fontSize={"16px"}>
              Thank you for your patience and understanding.
            </Text>
          </VStack>
        </Stack>
      </Stack>
    </Flex>
  );
}
