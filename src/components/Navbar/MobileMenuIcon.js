import { Box, Button, Flex, Stack, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import ScreenMenu from '../ScreenMenu';

export default function MobileMenuIcon() {
  const btnMobileRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="whatsapp"
        variant="ghost"
        ref={btnMobileRef}
        onClick={onOpen}
      >
        <Flex w="10" h="10" align="center">
          <Stack spacing="2" w="100%">
            <Box w="100%" h="3px" background="#000" borderRadius="3" />
            <Box w="100%" h="3px" background="#000" borderRadius="3" />
          </Stack>
        </Flex>
      </Button>
      <ScreenMenu
        btnMobileRef={btnMobileRef}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
