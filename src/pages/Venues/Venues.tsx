import {
  Box,
  Heading,
  Flex,
  Icon,
  Image,
  Text,
  Avatar,
  FlexProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";
import HeaderPlaceholder from "./HeaderPlaceholder";
import VenueCard from "./VenueCard";
export default function Venues() {
  return (
    <Flex align="center" flexDirection="column" w="100%">
      <HeaderPlaceholder />
      <Flex
        mt="15px"
        id="VenueCardContainer"
        w="100%"
        flexWrap="wrap"
        justifyContent={{ base: "space-between", md: "flex-start" }}
        px="15px"
        rowGap="15px"
      >
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
      </Flex>
    </Flex>
  );
}
