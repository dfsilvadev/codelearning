import SeriesContent from './SerieContent';
import SerieHeader from './SerieHeader';

export default function SerieSlug({ serie }) {
  return (
    <>
      <SerieHeader
        data={{
          title: serie.name,
          thumbUrl: serie.seasons[0].thumbUrl.url,
          updatedAt: serie.updatedAt,
        }}
      />
      <SeriesContent serie={serie} />
    </>
  );
}
