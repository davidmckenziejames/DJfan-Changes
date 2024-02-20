import { Flex, Image } from "@chakra-ui/react";
export default function HeaderPlaceholder() {
  return (
    <Flex
      bg="#111"
      w="100%"
      justify="center"
      py="10px"
      borderBottom="1px solid #fff"
    >
      <Image
        height="50px"
        src="https://files.djfan.app/images/djfan-beta.png"
      />
    </Flex>
  );
}
