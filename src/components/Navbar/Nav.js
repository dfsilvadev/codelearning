import { HStack } from '@chakra-ui/react';
import Navlink from './Navlink';

export default function Nav() {
  return (
    <HStack as="nav" spacing="8" paddingX="8">
      <Navlink href="/">Home</Navlink>
      <Navlink href="/series">Séries</Navlink>
      <Navlink href="/about">Sobre</Navlink>
    </HStack>
  );
}
