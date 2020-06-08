import { markdown } from "markdown";

export default function Section({fields}) {
  const { heading, content } = fields;

  return (
    <div className="wrapper">
      <section className="section" id={ heading.replace(/\s+/g, '-').toLowerCase() }>
        <h2 className="section__heading">{heading}</h2>
        <div className="section__content" dangerouslySetInnerHTML={{ __html: markdown.toHTML(content) }}></div>
      </section>
      <style jsx>{`
        .section {
          max-width: var(--small-content-maxwidth);
        }
      `}</style>
      <style jsx global>{`
        .section h3 {
          color: var(--persimmon);
        }

        .section a {
          color: var(--persimmon);
        }
      `}</style>
    </div>
  )
}
