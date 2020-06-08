import Head from 'next/head';
import Row from './Row';

export default function ContactPage({fields,  pathname}) {
  const { title, metaDescription, rows } = fields;

  return (
    <div className="contact-page">
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div className="wrapper">
        <h1>{title}</h1>
        {rows && rows.filter(hasContentType).map((row, idx) => (
          <Row
            {...row}
            contentType={row.sys.contentType.sys.id}
            key={`${row.sys.id}_${idx}`}
          />
        ))}
      </div>
      <style jsx>{`
      `}</style>


      <style jsx>{`
        .contact-page {
          margin-top: var(--top-gutter)
        }
      `}</style>
    </div>
  )
};

const hasContentType = (entry) => {
  return entry.sys.contentType;
};
