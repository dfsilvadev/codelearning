import { Box, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';

export default function Layout({ children, bgColor }) {
  return (
    <Box as="main" w="100%" h="auto" paddingBottom="6">
      <Navbar />
      <Box as="section" background={bgColor} pt="100px">
        <Flex
          w="100%"
          maxW={1480}
          marginX="auto"
          paddingX="6"
          direction="column"
        >
          {children}
        </Flex>
      </Box>
    </Box>
  );
}
