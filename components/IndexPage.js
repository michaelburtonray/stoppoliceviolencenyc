import Head from 'next/head';
import Row from './Row';

const IndexPage = ({ fields, pathname }) => {
  const { title, metaDescription, rows } = fields;

  return (
    <div className="home-page">
      <Head>
        <title>{process.env.NEXT_PUBLIC_WEBSITE_TITLE}: {process.env.NEXT_PUBLIC_WEBSITE_SUBTITLE}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      {rows &&
        rows
          .filter(hasContentType)
          .map((row, idx) => (
            <Row
              {...row}
              contentType={row.sys.contentType.sys.id}
              key={`${row.sys.id}_${idx}`}
            />
          ))}
      <style jsx>{`
      `}</style>
    </div>
  );
};

const hasContentType = (entry) => {
  return entry.sys.contentType;
};

export default IndexPage;
