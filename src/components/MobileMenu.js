import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { TiThMenu } from "react-icons/ti";

export default function MobileMenu() {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Open Menu"
        ref={btnRef}
        onClick={onOpen}
        icon={<TiThMenu />}
        size="md"
        variant="outline"
        colorScheme="pink"
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay w="100%" />
        <DrawerContent bg="gray.800" paddingTop="4" paddingX="8">
          <DrawerCloseButton mt="6" />
          <DrawerHeader>Menu</DrawerHeader>
          <Flex>
            <Text fontWeight="bold" color="gray.400" fontSize="small">
              Geral
            </Text>
            <Stack spacing="4" marginTop="6" align="stretch">
              <Link href="/">
                <Text marginLeft="4" fontSize="medium">
                  Home
                </Text>
              </Link>
              <Link href="/series">
                <Text marginLeft="4" fontSize="medium">
                  Séries
                </Text>
              </Link>
              <Link href="/sobre">
                <Text marginLeft="4" fontSize="medium">
                  Sobre
                </Text>
              </Link>
            </Stack>
          </Flex>
          <DrawerBody />
        </DrawerContent>
      </Drawer>
    </>
  );
}
