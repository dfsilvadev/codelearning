import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { TiTick } from 'react-icons/ti';
import { RiPlayCircleLine } from 'react-icons/ri';
import Footer from './Footer';

export default function SeriesContent({ serie }) {
  return (
    <>
      <Flex direction="column" paddingY="6">
        <Stack
          spacing="2"
          paddingY="4"
          borderBottom="1px"
          borderColor="gray.700"
        >
          <Heading fontSize="x-large">Sobre a série</Heading>
          <Text fontSize="sm" maxWidth="700" width="100%">
            {serie?.description}
          </Text>
        </Stack>
        <Stack
          spacing="2"
          paddingY="4"
          borderBottom="1px"
          borderColor="gray.700"
        >
          <Heading fontSize="x-large">O que você irá aprender </Heading>
          <Text fontSize="sm" maxWidth="700" width="100%">
            {serie.features.map((item) => (
              <HStack fontSize="16" fontWeight="bold">
                <Box color="green.500">
                  <TiTick />
                </Box>
                <Text>{item.name}</Text>
              </HStack>
            ))}
          </Text>
        </Stack>
        <Box my={4}>
          <Heading size="x-large" mb={3}>
            Conteúdo
          </Heading>
          <Accordion defaultIndex={[0]} allowMultiple>
            {serie?.seasons?.map((season) => (
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {season.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <List spacing={3}>
                    {season.episodes.map((episode) => (
                      <ListItem>
                        <Flex
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Flex alignItems="center" onClick={() => {}}>
                            <ListIcon as={RiPlayCircleLine} cursor="pointer" />
                            <Text fontSize="sm" fontWeight="medium">
                              <Link>{episode.name}</Link>
                            </Text>
                          </Flex>
                          <Text fontSize="sm">{episode.videoTime}</Text>
                        </Flex>
                      </ListItem>
                    ))}
                  </List>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
