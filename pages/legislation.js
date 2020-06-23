import { getPage } from '../services/contentful-queries';

import Page from '../components/Page';

const LegislationPageContainer = (props) => <Page {...props} />

LegislationPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const legislationPage = await getPage({ slug: 'legislation' });
  return { ...legislationPage, pathname };
}

export default LegislationPageContainer
