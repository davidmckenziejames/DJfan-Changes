import { Box } from "@chakra-ui/react";
import DashProfileBody from "./DashProfileBody";
import DashProfileHeader from "./DashProfileHeader";
import ImportContent from "./ImportContent";
import PostBox from "./PostBox";

export default function DashProfile() {
  return (
    <>
      <DashProfileHeader />
      <PostBox />
      <Box mt="15px">
        <ImportContent />
      </Box>
      <DashProfileBody />
    </>
  );
}
