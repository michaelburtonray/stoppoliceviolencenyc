export default function EmbedCodeRow({fields}) {
  const { embedCode } = fields;

  return (
    <div className="embed-code-row wrapper">
      <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      <style jsx global>{`
        .embed-code-row iframe {
          border: none;
          width: 100%;
          height: calc(100vh - 158px);
        }
      `}</style>
    </div>
  )
}
