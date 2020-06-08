import { getPage } from '../services/contentful-queries';

import LegislationPage from '../components/LegislationPage';

const LegislationPageContainer = (props) => <LegislationPage {...props} />

LegislationPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const legislationPage = await getPage({ slug: 'legislation' });
  return { ...legislationPage, pathname };
}

export default LegislationPageContainer
