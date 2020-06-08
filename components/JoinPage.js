import Head from 'next/head';
import Row from './Row';

export default function JoinPage({ fields }) {
  const { title, metaDescription, rows } = fields;

  return (
    <div className="join-page">
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      {rows && rows.filter(hasContentType).map((row, idx) => (
        <Row
          {...row}
          contentType={row.sys.contentType.sys.id}
          key={`${row.sys.id}_${idx}`}
        />
      ))}
      <style jsx>{`
        .join-page {
        }
      `}</style>
    </div>
  );
};

const hasContentType = (entry) => {
  return entry.sys.contentType;
};
