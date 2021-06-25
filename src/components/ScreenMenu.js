import Link from 'next/link';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function ScreenMenu({ btnMobileRef, isOpen, onClose }) {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnMobileRef}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton />
        </DrawerHeader>

        <DrawerBody>
          <Flex
            w="100%"
            h="100%"
            direction="column"
            align="center"
            justify="center"
          >
            <Stack>
              <Link href="/">
                <HStack fontSize="xx-large" fontWeight="bold">
                  <Text color="#00ff5f">00</Text>
                  <Text textTransform="uppercase">Home</Text>
                </HStack>
              </Link>
              <Link href="/series">
                <HStack fontSize="xx-large" fontWeight="bold">
                  <Text color="#00ff5f">01</Text>
                  <Text textTransform="uppercase">Séries</Text>
                </HStack>
              </Link>
              <Link href="/about">
                <HStack fontSize="xx-large" fontWeight="bold">
                  <Text color="#00ff5f">02</Text>
                  <Text textTransform="uppercase">Sobre</Text>
                </HStack>
              </Link>
            </Stack>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
