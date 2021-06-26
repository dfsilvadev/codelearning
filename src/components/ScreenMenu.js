import Link from 'next/link';
import {
  Button,
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
import useAuth from '../hooks/useAuth';
import Profile from './Navbar/Profile';

function ScreenMenu({ btnMobileRef, isOpen, onClose }) {
  const { signInWithGithub, signInWithGoogle, user } = useAuth();

  function handleSignInGoogle() {
    onClose();
    signInWithGoogle();
  }

  function handleSignInGithub() {
    onClose();
    signInWithGithub();
  }
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
          <Profile showProfileData={user} />
          <DrawerCloseButton />
        </DrawerHeader>

        <DrawerBody>
          <Flex
            w="100%"
            h="100%"
            direction="column"
            align="center"
            justify="space-around"
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
            <Stack>
              <Button
                onClick={() => handleSignInGoogle()}
                backgroundColor="gray.900"
                color="#fff"
                variant="outline"
                fontWeight="medium"
                borderColor="#000"
                _hover={{ bg: 'gray.700' }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.95)',
                }}
              >
                Conecte-se com Google
              </Button>
              <Button
                onClick={() => handleSignInGithub()}
                backgroundColor="gray.900"
                color="#fff"
                variant="outline"
                fontWeight="medium"
                borderColor="#000"
                _hover={{ bg: 'gray.700' }}
                _active={{
                  bg: 'gray.800',
                  transform: 'scale(0.95)',
                }}
              >
                Conecte-se com Github
              </Button>
            </Stack>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default ScreenMenu;
