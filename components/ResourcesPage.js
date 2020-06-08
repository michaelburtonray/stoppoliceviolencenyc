import Head from 'next/head';
import Row from './Row';

export default function ResourcesPage({fields}) {
  const { title, metaDescription, rows } = fields;

  return (
    <div className="resources-page">
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div className="wrapper">
        <h1>{title}</h1>
      </div>
      {rows && rows.filter(hasContentType).map((row, idx) => (
        <Row
          {...row}
          contentType={row.sys.contentType.sys.id}
          key={`${row.sys.id}_${idx}`}
        />
      ))}
      <style jsx>{`
        .resources-page {
          margin-top: var(--top-gutter)
        }
      `}</style>
    </div>
  )
}

const hasContentType = (entry) => {
  return entry.sys.contentType;
};
