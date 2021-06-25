import {
  Center,
  Flex,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { RiInstagramLine, RiLinkedinBoxLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <Flex
      direction="column"
      w="100%"
      h="350px"
      align="center"
      background="#000"
      color="#fff"
    >
      <SimpleGrid
        w="100%"
        maxW={1480}
        marginX="auto"
        padding="6"
        flex="1"
        columns={[1, null, 2]}
        spacing="20px"
      >
        <Center>
          <HStack spacing="2">
            <Text as="p" fontSize="small">
              SIGAM-ME NAS REDES SOCIAIS
            </Text>
            <HStack spacing="4">
              <Link href="https://www.instagram.com/daniel.dxp/">
                <IconButton
                  type="sm"
                  variant="outline"
                  colorScheme="whiteAlpha"
                  aria-label="Instagram"
                  fontSize="1.5rem"
                  icon={<RiInstagramLine />}
                  _hover={{ color: '#00ff5f' }}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/daniel-silva-dxp/">
                <IconButton
                  type="sm"
                  variant="outline"
                  colorScheme="whiteAlpha"
                  aria-label="Instagram"
                  fontSize="1.5rem"
                  icon={<RiLinkedinBoxLine />}
                  _hover={{ color: '#00ff5f' }}
                />
              </Link>
            </HStack>
          </HStack>
        </Center>
        <Center>
          <Text ass="p" fontSize="small">
            Todos os direitos reservados
          </Text>
        </Center>
      </SimpleGrid>
    </Flex>
  );
}
