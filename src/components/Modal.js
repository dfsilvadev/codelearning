import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';

function AuthModal({ isOpen, onClose }) {
  const { signInWithGithub, signInWithGoogle } = useAuth();

  function handleSignInGoogle() {
    onClose();
    signInWithGoogle();
  }

  function handleSignInGithub() {
    onClose();
    signInWithGithub();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent borderRadius={4}>
        <ModalCloseButton />
        <ModalBody>
          <Flex align="center" direction="column" justify="center" minH="250px">
            <Stack spacing="2">
              <Heading fontSize="20" textAlign="center">
                Para continuar, faça login abaixo.
              </Heading>
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

const withAuthModal = (Component) => (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <AuthModal isOpen={isOpen} onClose={onClose} />
      <Component openAuthModal={onOpen} {...props} />
    </>
  );
};

export default withAuthModal;
