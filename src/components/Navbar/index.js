import { Flex, useBreakpointValue } from '@chakra-ui/react';

import useAuth from '../../hooks/useAuth';
import withAuthModal from '../Modal';

import Logo from './Logo';
import MobileMenuIcon from './MobileMenuIcon';
import Nav from './Nav';
import Profile from './Profile';
import SigninButton from './SigninButton';

function Navbar({ openAuthModal }) {
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
              <SigninButton
                showSignInButton={user}
                handleClick={openAuthModal}
              />
              <Profile showProfileData={user} />
            </Flex>
          </>
        ) : (
          <Flex marginLeft="auto">
            <MobileMenuIcon />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default withAuthModal(Navbar);
