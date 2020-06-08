import { getPage } from '../services/contentful-queries';

import EndorsePage from '../components/EndorsePage';

const EndorsePageContainer = (props) => <EndorsePage {...props} />

EndorsePageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const endorsePage = await getPage({ slug: 'endorse' });
  return { endorsePage, pathname };
}

export default EndorsePageContainer
