import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import ProfileEvent from "./ProfileEvent";
import NotificationsPage from "../Settings/NotificationPage";
import FanGuestlists from "../Settings/FanGuestlists";
import EventList from "./Events/EventList";
import { DUMMY_DATA } from "./Events/Dummy";

const headerStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  gap: "6px",
  lineHeight: "1em",
};

export default function GuestlistFlow() {
  return (
    <Flex
      flexDirection="column"
      px="10px"
      pt="30px"
      pb="30px"
      mx="auto"
      bg="#ebf0f6"
      gap={"30px"}
      position="relative"
    >
      <Box width={{ base: "100%", md: "500px" }}>
        <ProfileEvent />
      </Box>
      <EventList posts={DUMMY_DATA} />
      <NotificationsPage />
      <FanGuestlists />
    </Flex>
  );
}
