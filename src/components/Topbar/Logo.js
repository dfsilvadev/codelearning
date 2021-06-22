import { Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Text
      fontSize={["22", "2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
    >
      codelearning
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  );
}
