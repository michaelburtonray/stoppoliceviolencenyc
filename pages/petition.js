import { getPage } from '../services/contentful-queries';

import Page from '../components/Page';

const PetitionPageContainer = (props) => <Page {...props} />

PetitionPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const petitionPage = await getPage({ slug: 'petition' });
  return { ...petitionPage, pathname };
}

export default PetitionPageContainer
