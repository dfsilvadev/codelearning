import {
  Button,
  Flex,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';

import useAuth from '../../hooks/useAuth';
import ScreenMenu from '../ScreenMenu';

import Logo from './Logo';
import MobileMenuIcon from './MobileMenuIcon';
import Nav from './Nav';
import Profile from './Profile';
import SigninButton from './SigninButton';

export default function Navbar() {
  const btnMobileRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      align="center"
      position="fixed"
      background="#fff"
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Flex w="100%" maxW={1480} marginX="auto" paddingX="6">
        <Logo />
        {!isDrawerSidebar ? (
          <>
            <Nav />
            <Flex align="center" marginLeft="auto">
              <SigninButton showSignInButton={user} />
              <Profile showProfileData={user} />
            </Flex>
          </>
        ) : (
          <Flex marginLeft="auto">
            <Button
              colorScheme="whatsapp"
              variant="ghost"
              ref={btnMobileRef}
              onClick={onOpen}
            >
              <>
                <MobileMenuIcon />
                <ScreenMenu
                  btnMobileRef={btnMobileRef}
                  isOpen={isOpen}
                  onClose={onClose}
                />
              </>
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
