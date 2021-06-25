import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import Navlink from './Navbar/Navlink';

export default function SignOutMenu({ children }) {
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
          <Navlink href="#">Sair</Navlink>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
