import { Flex } from "@chakra-ui/react";
import Topbar from "./Topbar/Topbar";

function Layout({ children }) {
  return (
    <Flex as="main" w="100%" minH="100vh">
      <Flex
        as="header"
        w="100%"
        bg="gray.900"
        zIndex={100}
        borderBottom="2px solid"
        borderColor="gray.800"
        position="fixed"
      >
        <Topbar />
      </Flex>
      <Flex
        as="section"
        w="100%"
        pt="6em"
        align="center"
        justify="center"
        direction="column"
      >
        {children}
      </Flex>
    </Flex>
  );
}

export default Layout;
