import { Flex, useBreakpointValue } from "@chakra-ui/react";
import MobileMenu from "../MobileMenu";

import Logo from "./Logo";
import Navlink from "./Navlink";
import Profile from "./Profile";
import SignInButton from "./SignInButton";

export default function Topbar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });
  return (
    <Flex
      w="100%"
      maxW={1480}
      height="20"
      marginX="auto"
      paddingX="6"
      align="center"
    >
      <Logo />
      <Flex ml="6" align="center">
        {isDrawerSidebar ? <MobileMenu /> : <Navlink />}
      </Flex>
      <Flex align="center" marginLeft="auto">
        <SignInButton />
        <Profile />
      </Flex>
    </Flex>
  );
}
