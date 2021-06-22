import { Flex } from "@chakra-ui/react";

export default function SignInButton() {
  return (
    <Flex marginX="8" paddingY="1" color="gray.300">
      <Flex
        as="button"
        type="button"
        flex="1"
        paddingY="2"
        paddingX="12"
        marginLeft="6"
        maxWidth={400}
        background="gray.700"
        _hover={{ bg: "gray.800" }}
        position="relative"
        borderRadius="full"
        align="center"
        color="gray.200"
        fontWeight="bold"
        transition="background 0.2s"
      >
        Sign in
      </Flex>
    </Flex>
  );
}
