import { Flex, Heading, Text } from '@chakra-ui/react';
import SerieHelper from './SerieHeader';

export default function SerieSlug({ serie }) {
  console.log(serie);
  return (
    <>
      <SerieHelper
        data={{
          title: serie.name,
          thumbUrl: serie.seasons[0].thumbUrl.url,
          updatedAt: serie.updatedAt,
        }}
      />
      <Flex
        w="100%"
        maxW={1480}
        flex="1"
        marginX="auto"
        paddingX="6"
        pb="6"
        justify="center"
        direction="column"
      >
        <Heading
          as="h1"
          fontSize={{ base: '42px', md: '52px', lg: '72px' }}
          lineHeight={{ base: '46px', md: '56px', lg: '76px' }}
          mb={4}
          fontWeight="900"
        >
          As melhores séries
          <Text as="span" display="block">
            direto ao ponto
          </Text>
          <Text
            as="span"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
          >
            você encontra aqui!
          </Text>
        </Heading>

        <Text fontSize={{ base: '14px', md: '16px', lg: '16px' }}>
          <Text as="span" display="block">
            Acompnahe as melhores séries do youtube com as mais novas{' '}
          </Text>
          <Text as="span">tecnologias que do mercado!</Text>
        </Text>
        <Text fontSize="xx-large" fontWeight="bold" color="gray.500" mt="8">
          Séries
        </Text>
      </Flex>
    </>
  );
}
