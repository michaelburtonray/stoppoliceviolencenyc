import Head from 'next/head';
import Row from './Row';

export default function Page({fields}) {
  const { title, metaDescription, rows } = fields;

  return (
    <div className="page">
      <Head>
        <title>{title} | {process.env.NEXT_PUBLIC_WEBSITE_TITLE}</title>
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
        .page a {
          color: var(--persimmon);
        }
      `}</style>
    </div>
  )
}

const hasContentType = (entry) => {
  return entry.sys.contentType;
};
