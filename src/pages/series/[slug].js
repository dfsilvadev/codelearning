export default function SeriePage() {
  return <h1>Slug</h1>;
}

export const getStaticProps = async () => ({
  props: {},
  revalidate: 60,
});

export const getStaticPaths = async () => ({});
