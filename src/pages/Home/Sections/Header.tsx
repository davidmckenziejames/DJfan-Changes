import { Box, Button, Image, Flex } from "@chakra-ui/react";
import SignInButton from "./HeaderComponents/SignInButton";
import { useNavbar } from "./useNavbar";
import BookDemoButton from "./HeaderComponents/BookDemoButton";

export default function Header() {
  const { rootProps } = useNavbar();
  return (
    <Box
      as="nav"
      role="navigation"
      position="sticky"
      top="0"
      zIndex="docked"
      bg="bg-accent"
      {...rootProps}
    >
      <Flex
        bg="black"
        borderBottom="1px solid #ffffff"
        w="100%"
        display="flex"
        justifyContent="center"
      >
        <Flex
          maxW="1024px"
          w="100%"
          alignItems="center"
          justifyContent={"space-between"}
          px={{ base: "10px", md: "0px" }}
          py="10px"
        >
          <Image
            id="logo"
            w="120px"
            src="https://files.djfan.app/images/djfan-beta.png"
          />
          <Button
            bg="white"
            display={"flex"}
            as="a"
            href="#demo"
            borderRadius="5px"
            fontSize="15px"
            fontWeight="600"
            variant="unstyled"
            color="#111111"
            transition="all 0.3s ease"
            border="2px solid black"
            px="15px"
            height="35px"
            _hover={{
              boxShadow: `.15rem .15rem 0 #69f2eb, .3rem .3rem 0 #DB62FD`,
              color: "black",
              background: "white",
              border: "2px solid black",
            }}
          >
            BOOK DEMO
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
