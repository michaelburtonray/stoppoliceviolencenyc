import EmbedCodeRow from './EmbedCodeRow'
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions'
import HomePageDiagram from './HomePageDiagram'
import Section from './Section'
import Slideshow from './Slideshow'
import TextRow from './TextRow'

export default function Row(props) {
  const { fields, sys } = props;
  if (!sys.contentType) {
    return null;
  }
  switch (sys.contentType.sys.id) {
    case 'embedCodeRow': {
      return <EmbedCodeRow {...props} />
    }

    case 'frequentlyAskedQuestions': {
      return <FrequentlyAskedQuestions {...props} />
    }

    case 'homepageSlideshow': {
      return <EcrbSlideshow {...props} />
    }

    case 'homePageDiagram': {
      return <HomePageDiagram {...props} />
    }

    case 'joinSlideshow': {
      return <JoinSlideshow {...props} />
    }

    case 'slideshow': {
      return <Slideshow {...props} />
    }

    case 'textRow': {
      return <TextRow {...props} />
    }

    case 'section': {
      return <Section {...props} />
    }

    default: {
      return <p>component type {sys.contentType.sys.id} not found</p>;
    }
  }
}
