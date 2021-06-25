import { Text } from '@chakra-ui/react';

export default function Logo() {
  return (
    <Text
      fontSize={['22', '2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      // w={['54', '36']}
    >
      codelearning
      <Text as="span" ml="1" color="#00ff5f">
        .
      </Text>
    </Text>
  );
}
