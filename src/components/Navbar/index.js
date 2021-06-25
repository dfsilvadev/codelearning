import { Flex } from '@chakra-ui/react';
import Logo from './Logo';
import Nav from './Nav';
import Profile from './Profile';
import SigninButton from './SigninButton';

export default function Navbar() {
  const user = true;
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
        <Nav />
        <Flex align="center" marginLeft="auto">
          <SigninButton showSignInButton={user} />
          <Profile showProfileData={user} />
        </Flex>
      </Flex>
    </Flex>
  );
}
