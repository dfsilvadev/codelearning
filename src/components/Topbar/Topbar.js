import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import Navlink from "./Navlink";

export default function Topbar() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      height="20"
      marginX="auto"
      paddingX="6"
      align="center"
    >
      <Logo />
      <Navlink />
    </Flex>
  );
}
