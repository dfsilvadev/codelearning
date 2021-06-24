import SeriesContent from './SerieContent';
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
      <SeriesContent serie={serie} />
    </>
  );
}
