import Head from 'next/head';
import Row from './Row';

export default function PetitionPage({fields}) {
  const { title, metaDescription, rows } = fields;

  return (
    <div className="petition-page wrapper">
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <h1>{title}</h1>
      {rows && rows.filter(hasContentType).map((row, idx) => (
        <Row
          {...row}
          contentType={row.sys.contentType.sys.id}
          key={`${row.sys.id}_${idx}`}
        />
      ))}
    </div>
  )
}

const hasContentType = (entry) => {
  return entry.sys.contentType;
};
