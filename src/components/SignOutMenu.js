import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';
import Navlink from './Navbar/Navlink';

export default function SignOutMenu({ children }) {
  const { signOut } = useAuth();
  return (
    <Popover>
      <PopoverTrigger>
        <Box cursor="pointer">{children}</Box>
      </PopoverTrigger>
      <PopoverContent
        maxW={20}
        background="gray.50"
        boxShadow="0 0 60px rgba(0,0,0,0.05)"
      >
        <PopoverArrow />
        <PopoverBody>
          <Navlink href="#">Perfil</Navlink>
          <Button
            fontSize="13px"
            textTransform="uppercase"
            colorScheme="black"
            variant="link"
            onClick={() => signOut()}
          >
            sair
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
