import { Button } from '@chakra-ui/react';
import useAuth from '../../hooks/useAuth';

export default function SigninButton({ showSignInButton, handleClick }) {
  const { loading } = useAuth();
  return (
    <>
      {!showSignInButton && (
        <Button
          isLoading={loading}
          fontSize="13px"
          textTransform="uppercase"
          colorScheme="black"
          variant="link"
          onClick={() => handleClick()}
        >
          Entrar
        </Button>
      )}
    </>
  );
}
