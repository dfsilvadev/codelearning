import { Box, Flex } from "@chakra-ui/react";
import Topbar from "./Topbar/Topbar";

function Layout({ children }) {
  return (
    <Box as="main" w="100%" minH="100vh">
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
      <Flex as="section" direction="column" pt="6em">
        <Box w="100%" maxW={1480} height="20" marginX="auto" paddingX="6">
          {children}
        </Box>
      </Flex>
    </Box>
  );
}

export default Layout;
