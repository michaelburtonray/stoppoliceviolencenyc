export default function EmbedCodeRow({fields}) {
  const { embedCode, aspectRatio } = fields;




  return (
    <div className="embed-code-row wrapper">

      {aspectRatio && <svg className="iframe-spacer" xmlns='http://www.w3.org/2000/svg'  viewBox={`0 0 ${aspectRatio.split('x')[0]} ${aspectRatio.split('x')[1]}`}></svg>}

      <div className="embed-wrapper" dangerouslySetInnerHTML={{ __html: embedCode }} />
      <style jsx global>{`
        .embed-code-row {
          padding: 0;
          position: relative;
        }
        .embed-code-row iframe {
          border: none;
          width: 100%;
        }

        .iframe-spacer {
          display: block;
          width: 100%;
        }

        .iframe-spacer + .embed-wrapper {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        .iframe-spacer + .embed-wrapper iframe {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}
