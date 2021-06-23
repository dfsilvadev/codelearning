import { RiHistoryFill } from "react-icons/ri";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function SerieHelper({ data }) {
  return (
    <Flex
      w="100%"
      maxW={1480}
      flex="1"
      marginX="auto"
      paddingX="6"
      justify="center"
    >
      <SimpleGrid columns={[1, null, 2]} spacing="10">
        <Image src={data.thumbUrl} width="100%" borderRadius="8" />
        <Heading
          as="h1"
          fontSize={{ base: "42px", md: "52px", lg: "62px" }}
          lineHeight={{ base: "46px", md: "56px", lg: "62px" }}
          mb={4}
          fontWeight="900"
        >
          {data.title}
          <Box fontSize="16" color="gray.500">
            <HStack as="span">
              <RiHistoryFill />
              <Text>{data.updatedAt}</Text>
            </HStack>
          </Box>
        </Heading>
      </SimpleGrid>
    </Flex>
  );
}
