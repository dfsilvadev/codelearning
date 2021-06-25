import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';

export default function Layout({ children, bgColor }) {
  return (
    <Box as="main" w="100%" h="auto">
      <Navbar />
      <Box as="section" background={bgColor} pt="100px">
        {children}
      </Box>
    </Box>
  );
}
