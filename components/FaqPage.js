import Head from 'next/head';
import Row from './Row';

export default function FaqPage({faqPage}) {
  const { title, metaDescription, rows } = faqPage.fields;

  return (
    <div className="faq-page">
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
      <style jsx>{`
        .faq-page {
          margin-top: var(--top-gutter);
          padding: 0 var(--gutter);
        }
      `}</style>
    </div>
  )
}

const hasContentType = (entry) => {
  return entry.sys.contentType;
};
