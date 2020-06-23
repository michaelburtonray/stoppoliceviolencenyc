import { getPage } from '../services/contentful-queries';

import Page from '../components/Page';

const EndorsePageContainer = (props) => <Page {...props} />

EndorsePageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const endorsePage = await getPage({ slug: 'endorse' });
  return { ...endorsePage, pathname };
}

export default EndorsePageContainer
