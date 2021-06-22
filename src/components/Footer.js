import { Flex, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      w="full"
      h="20"
      align="center"
      justify="center"
      borderTop="2px solid"
      borderColor="gray.800"
    >
      <Link
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ color: "pink.500" }}
        fontSize={14}
      >
        &copy; todos os direitos reservados.
      </Link>
    </Flex>
  );
}
