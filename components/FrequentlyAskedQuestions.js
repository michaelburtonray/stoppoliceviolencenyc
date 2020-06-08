import { markdown } from "markdown";

export default function FrequentlyAskedQuestions({fields}) {
  const { questions } = fields;

  return (
    <div className="frequently-asked-questions">

      <ul className="faq-page__contents">
        {questions.map((question, idx) => <QuestionLink {...question} key={idx} />)}
      </ul>
      <dl className="faq-page__question-answers">{questions.map((question, idx) => <QuestionAnswer {...question} key={idx} />)}</dl>
      <style jsx>{`
        @media (min-width: 768px) {
          .faq-page h1 {
            font-size: 48px;
          }
        }

        .faq-page__contents {
          font: italic normal 18px/1.95 'Crimson Text';
          list-style: none;
          margin: 1em 0;
          padding-left: 0;
        }

        .faq-page__contents a {
          display: inline-block;
          color: inherit;
          text-decoration: none;
        }

        .faq-page__contents a:hover {
          color: var(--persimmon);
        }
      `}</style>
    </div>
  )
}

function QuestionLink({fields}) {
  const { question } = fields;
  return (
    <li>
      <a className="question" href={ '#' + question.replace(/\s+/g, '-').toLowerCase() }>{ question }</a>
      <style jsx>{`
        .question {
          color: inherit;
          text-decoration: none;
        }
        .question:hover {
          color: var(--persimmon);
        }
      `}</style>
    </li>
  )
}

function QuestionAnswer({fields}) {
  const { question, answer } = fields;
  return <div className="faq-page__question-answers">
    <dt className="definition" id={ question.replace(/\s+/g, '-').toLowerCase() }>{ question }</dt>
    <dd className="term" dangerouslySetInnerHTML={{ __html: markdown.toHTML(answer) }} />
    <button className="back-to-top" onClick={() => { window.scrollTo(0, 0); history.replaceState({}, '', location.pathname) }}>Back to top &#8599;</button>
    <style jsx>{`
      .faq-page__question-answers {
        margin: 1em 0;
        max-width: 688px;
      }

      .faq-page__question-answers dt {
        color: var(--persimmon);
        font: 700 22px/1.2 Montserrat;
        padding-top: 2em;
      }
      .faq-page__question-answers dd {
        font: 16px/1.2 'Crimson Text';
        margin-left: 0;
        margin: 1em 0 2em;
      }

      .back-to-top {
        appearance: none;
        background: transparent;
        border: none;
        color: var(--persimmon);
        cursor: pointer;
        font: inherit;
        padding: 0;
        text-decoration: none;
        text-transform: lowercase;
      }

      .back-to-top:focus {
        outline: none;
      }
  `}</style>
  </div>
}

function anchorfy(question) {
  return question.replace(/\s+/g, '-').toLowerCase()
}
