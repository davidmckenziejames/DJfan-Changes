import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
export default function VenueCard() {
  return (
    <Flex
      id="VenueCard"
      direction="column"
      alignItems="center"
      w={{ base: "48%", md: "250px" }}
      gap="0px"
      border="2px solid #111"
      borderRadius="15px"
      position="relative"
      bg="#fff"
      overflow="hidden"
    >
      <Flex
        w="100%"
        height="100px"
        backgroundImage="url('https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL2NsdWJzL2xnL2liaXphdGFsZW50cy5qcGc_ZGF0ZVVwZGF0ZWQ9MTUxMzA5NDM5MDY3Nw==')"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        alignItems="center"
      >
        <Box as="a" href="#">
          <Avatar
            border="2px solid #111"
            width="auto"
            height="70px"
            src="https://imgproxy.ra.co/_/quality:66/h:180/w:180/extend:1/rt:fill/enlarge:1/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL2NsdWJzL2xvZ29tYXJjYXBhY2hhLmpwZz9kYXRlVXBkYXRlZD0xNTEzMDk0MzkwNjc3"
          />
        </Box>
      </Flex>
      <Flex flexDirection="column" alignItems="center" gap="10px" py="10px">
        <Text fontSize="18px" fontWeight="600" lineHeight="1em">
          Pacha Ibiza
        </Text>
        <Box
          as="a"
          fontSize="14px"
          fontWeight="600"
          color="white"
          lineHeight="1em"
          bg="#111"
          px="10px"
          py="5px"
          borderRadius="10px"
          href="#"
        >
          View Events
        </Box>
      </Flex>
    </Flex>
  );
}
