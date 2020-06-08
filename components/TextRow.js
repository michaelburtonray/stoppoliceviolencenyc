import { markdown } from "markdown";

export default function TextRow({fields}) {
  const { copy } = fields;

  return (
    <div className="body wrapper" dangerouslySetInnerHTML={{ __html: markdown.toHTML(copy) }} />
  )
}
