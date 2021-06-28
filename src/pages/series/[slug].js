import { Flex } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import SerieSlug from '../../components/SerieSlug';
import { getAllFullSeries } from '../../services/dato-cms';
import Footer from '../../components/Footer';

export default function SeriePage({ serie }) {
  return (
    <Layout>
      <Flex
        w="100%"
        maxW={1140}
        flex="1"
        marginX="auto"
        paddingX="6"
        pb="6"
        justify="center"
        direction="column"
      >
        <SerieSlug serie={serie} />
      </Flex>
      <Footer />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const series = await getAllFullSeries();
  const serie = series.find((s) => s.slug === slug) || null;

  if (!serie) {
    return {
      notFound: true,
    };
  }

  const data = {
    description: serie.description,
    id: serie.id,
    name: serie.name,
    features: serie.features,
    seasons: [...serie.seasons],
    slug: serie.slug,
    thumbUrl: serie.thumbUrl,
    updatedAt: new Date(serie.updatedAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  };

  return {
    props: {
      serie: data,
      allSeries: series,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const series = await getAllFullSeries();
  const slugs = series.map((s) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false,
  };
};
