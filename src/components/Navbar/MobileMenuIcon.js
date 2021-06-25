import { Box, Flex, Stack } from '@chakra-ui/react';

export default function MobileMenuIcon() {
  return (
    <Flex w="10" h="10" align="center">
      <Stack spacing="2" w="100%">
        <Box w="100%" h="3px" background="#000" borderRadius="3" />
        <Box w="100%" h="3px" background="#000" borderRadius="3" />
      </Stack>
    </Flex>
  );
}
