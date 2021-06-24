import Head from 'next/head';
import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import { getAllSeries } from '../../services/dato-cms';
import SerieCard from '../../components/SerieCard';

export default function Series({ series }) {
  return (
    <>
      <Head>
        <title>Séries | codelearning.</title>
      </Head>
      <Layout>
        <Breadcrumb page="Séries" />
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
        <Flex
          w="100%"
          maxW={1480}
          marginX="auto"
          align="center"
          justify="flex-start"
          paddingY="10"
          paddingX="6"
        >
          <SimpleGrid columns={[1, null, 3]} spacing="4">
            {series.map((serie) => (
              <SerieCard key={serie.id} serie={serie} />
            ))}
          </SimpleGrid>
        </Flex>
        <Footer />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const series = await getAllSeries();

  return {
    props: { series },
    revalidate: 3600,
  };
};
