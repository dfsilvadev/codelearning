import { Flex, HStack, IconButton, Link, Stack } from "@chakra-ui/react";
import { RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";

export default function Footer() {
  return (
    <Flex
      as="footer"
      w="full"
      h="100px"
      align="center"
      justify="center"
      direction="column"
      borderTop="2px solid"
      borderColor="gray.800"
    >
      <Stack spacing="2">
        <Flex align="center" justify="center">
          <HStack spacing="2">
            <Link target="_blank" href="https://github.com/daniel-silva-dxp">
              <IconButton
                variant="outline"
                colorScheme="gray"
                aria-label="Call Sage"
                fontSize="28px"
                icon={<RiGithubLine />}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/daniel-silva-dxp/"
            >
              <IconButton
                variant="outline"
                colorScheme="gray"
                aria-label="Call Sage"
                fontSize="28px"
                icon={<RiLinkedinBoxLine />}
              />
            </Link>
          </HStack>
        </Flex>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ color: "pink.500" }}
          fontSize={14}
        >
          &copy; todos os direitos reservados.
        </Link>
      </Stack>
    </Flex>
  );
}
