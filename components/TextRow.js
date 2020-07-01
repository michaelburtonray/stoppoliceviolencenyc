import { markdown } from "markdown";

export default function TextRow({fields}) {
  const { copy } = fields;

  return (
    <div className="text-row body wrapper" dangerouslySetInnerHTML={{ __html: markdown.toHTML(copy) }} />
  )
}
